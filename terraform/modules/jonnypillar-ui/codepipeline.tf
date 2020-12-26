resource "aws_codepipeline" "jonnypillar_ui_pipeline" {
  name     = "jonnypillar-ui-pipeline"
  role_arn = aws_iam_role.jonnypillar_ui_pipeline_role.arn

  artifact_store {
    location = aws_s3_bucket.jonnypillar_ui_pipeline_artifact_bucket.bucket
    type     = "S3"
  }

  stage {
    name = "Source"

    action {
      category = "Source"
      configuration = {
        "OAuthToken"           = var.github_token
        "Branch"               = var.repository_branch
        "Owner"                = var.repository_owner
        "PollForSourceChanges" = "false"
        "Repo"                 = var.repository_name
      }
      input_artifacts = []
      name            = "Source"
      output_artifacts = [
        "SourceArtifact",
      ]
      owner     = "ThirdParty"
      provider  = "GitHub"
      run_order = 1
      version   = "1"
    }
  }
  stage {
    name = "Build"

    action {
      category = "Build"
      configuration = {
        "ProjectName" = aws_codebuild_project.jonnypillar_ui_build.name
      }
      input_artifacts = [
        "SourceArtifact",
      ]
      name = "Build"
      output_artifacts = [
        "BuiltUIArtifact",
      ]
      owner     = "AWS"
      provider  = "CodeBuild"
      run_order = 1
      version   = "1"
    }
  }
  stage {
    name = "Deploy"

    action {
      category = "Deploy"
      configuration = {
        "BucketName" = aws_s3_bucket.jonnypillar_ui_bucket.bucket
        "Extract"    = "true"
      }
      input_artifacts = [
        "BuiltUIArtifact",
      ]
      name             = "DeployDev"
      output_artifacts = []
      owner            = "AWS"
      provider         = "S3"
      run_order        = 1
      version          = "1"
    }

    action {
      category = "Build"
      configuration = {
        "ProjectName" = aws_codebuild_project.jonnypillar_cloudfront_invalidation.name
      }
      input_artifacts = [
        "SourceArtifact",
      ]
      name      = "InvalidateCloudfront"
      owner     = "AWS"
      provider  = "CodeBuild"
      run_order = 2
      version   = "1"
    }
  }
}
