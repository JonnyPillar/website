resource "aws_iam_role" "jonnypillar_ui_pipeline_role" {
  name = "jonnypillar_ui_pipeline_role"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "codepipeline.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF
}

resource "aws_iam_role_policy" "jonnypillar_ui_pipeline_policy" {
  name = "jonnypillar_ui_pipeline_policy"
  role = aws_iam_role.jonnypillar_ui_pipeline_role.id

  policy = <<EOF
{
  "Statement": [
    {
      "Action": [
        "iam:PassRole"
      ],
      "Resource": "*",
      "Effect": "Allow",
      "Condition": {
        "StringEqualsIfExists": {
          "iam:PassedToService": [
            "cloudformation.amazonaws.com",
            "elasticbeanstalk.amazonaws.com",
            "ec2.amazonaws.com",
            "ecs-tasks.amazonaws.com"
          ]
        }
      }
    },
    {
      "Action": [
        "cloudwatch:*",
        "s3:*"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "codebuild:BatchGetBuilds",
        "codebuild:StartBuild"
      ],
      "Resource": "*",
      "Effect": "Allow"
    }
  ],
  "Version": "2012-10-17"
}
EOF
}

# Create an IAM role for CodeBuild to assume
resource "aws_iam_role" "jonnypillar_ui_build_role" {
  name = "jonnypillar-ui-build_role"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "codebuild.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF
}

resource "aws_iam_role_policy" "jonnypillar_ui_build_role_policy" {
  name = "jonnypillar_ui_build_role_policy"
  role = aws_iam_role.jonnypillar_ui_build_role.name

  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Resource": [
        "*"
      ],
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "s3:*"
      ],
      "Resource": [
        "${aws_s3_bucket.jonnypillar_ui_pipeline_artifact_bucket.arn}",
        "${aws_s3_bucket.jonnypillar_ui_pipeline_artifact_bucket.arn}/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "ssm:Get*"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": "sts:AssumeRole",
      "Resource": "${aws_iam_role.jonnypillar_ui_build_role.arn}"
    }
  ]
}
POLICY
}

resource "aws_iam_role" "jonnypillar_cloudfront_invalidation_role" {
  name = "jonnypillar_cloudfront_invalidation_role"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "codebuild.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF
}

resource "aws_iam_role_policy" "jonnypillar_cloudfront_invalidation_policy" {
  name = "jonnypillar_cloudfront_invalidation_policy"
  role = aws_iam_role.jonnypillar_cloudfront_invalidation_role.id

  policy = <<EOF
{
  "Statement": [
    {
      "Action": [
        "cloudwatch:*",
        "s3:Get*",
        "s3:List*"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Effect": "Allow",
      "Resource": [
        "*"
      ],
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ]
    },
    {
      "Effect": "Allow",
      "Resource": [
        "*"
      ],
      "Action": [
        "cloudfront:Get*",
        "cloudfront:List*",
        "cloudfront:CreateInvalidation"
      ]
    },
    {
      "Effect": "Allow",
      "Action": "sts:AssumeRole",
      "Resource": "${aws_iam_role.jonnypillar_cloudfront_invalidation_role.arn}"
    }
  ],
  "Version": "2012-10-17"
}
EOF
}