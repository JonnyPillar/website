resource "aws_codebuild_project" "jonnypillar_ui_build" {
  name           = "jonnypillar-ui-build"
  badge_enabled  = false
  build_timeout  = 60
  queued_timeout = 480
  service_role   = aws_iam_role.jonnypillar_ui_build_role.arn

  artifacts {
    encryption_disabled    = false
    name                   = "jonnypillar_ui_build_artifact"
    override_artifact_name = false
    packaging              = "NONE"
    type                   = "CODEPIPELINE"
  }

  environment {
    compute_type                = "BUILD_GENERAL1_SMALL"
    image                       = "aws/codebuild/amazonlinux2-x86_64-standard:2.0"
    image_pull_credentials_type = "CODEBUILD"
    privileged_mode             = false
    type                        = "LINUX_CONTAINER"
  }

  logs_config {
    cloudwatch_logs {
      status = "ENABLED"
    }

    s3_logs {
      encryption_disabled = false
      status              = "DISABLED"
    }
  }

  source {
    type                = "CODEPIPELINE"
    buildspec           = "ci/pipeline_build_buildspec.yml"
    git_clone_depth     = 0
    insecure_ssl        = false
    report_build_status = false
  }
}

resource "aws_codebuild_project" "jonnypillar_cloudfront_invalidation" {
  name           = "jonnypillar-cloudfront-invalidation"
  badge_enabled  = false
  build_timeout  = 60
  queued_timeout = 480
  service_role   = aws_iam_role.jonnypillar_cloudfront_invalidation_role.arn

  artifacts {
    encryption_disabled    = false
    name                   = "jonnypillar_cloudfront_invalidation"
    override_artifact_name = false
    packaging              = "NONE"
    type                   = "CODEPIPELINE"
  }

  environment {
    compute_type                = "BUILD_GENERAL1_SMALL"
    image                       = "aws/codebuild/amazonlinux2-x86_64-standard:2.0"
    image_pull_credentials_type = "CODEBUILD"
    privileged_mode             = false
    type                        = "LINUX_CONTAINER"
  }

  logs_config {
    cloudwatch_logs {
      status = "ENABLED"
    }

    s3_logs {
      encryption_disabled = false
      status              = "DISABLED"
    }
  }

  source {
    type                = "CODEPIPELINE"
    buildspec           = "ci/pipeline_cloudfront_buildspec.yml"
    git_clone_depth     = 0
    insecure_ssl        = false
    report_build_status = false
  }
}