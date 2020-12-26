terraform {
  required_version = ">= 0.14.2"

  backend "s3" {
    bucket = "jonnypillar-tf-init-state"
    key    = "terraform.tfstate"
    region = "eu-west-1"
  }

  required_providers {
    aws = "~> 3.21"
  }
}

provider "aws" {
  region = "eu-west-1"
}

resource "aws_s3_bucket" "state_bucket" {
  bucket = "jonnypillar-ui-tf-state"

  versioning {
    enabled = true
  }
}

# Build a DynamoDB to use for terraform state locking
resource "aws_dynamodb_table" "tf_lock_state" {
  name = "jonnypillar-ui-state-lock"

  # Pay per request is cheaper for low-i/o applications, like our TF lock state
  billing_mode = "PAY_PER_REQUEST"

  # Hash key is required, and must be an attribute
  hash_key = "LockID"

  # Attribute LockID is required for TF to use this table for lock state
  attribute {
    name = "LockID"
    type = "S"
  }

  tags = {
    Name = "jonnypillar-ui-state-lock"
  }
}
