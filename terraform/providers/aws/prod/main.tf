terraform {
  required_version = ">= 0.14.2"

  backend "s3" {
    bucket         = "jonnypillar-ui-tf-state"
    key            = "terraform.tfstate"
    region         = "eu-west-1"
    dynamodb_table = "jonnypillar-ui-state-lock"
  }

  required_providers {
    aws    = "~> 3.21"
    github = "~> 4.1.0"
  }
}

provider "aws" {
  region = "eu-west-1"
}

// Provider used to access the ACM SSL Cert from us-east-1
# https://github.com/hashicorp/terraform/issues/21472#issuecomment-497508239
provider "aws" {
  alias  = "us_east"
  region = "us-east-1"
}

provider "github" {
  token        = var.github_token
  organization = "JonnyPillar"
}

module "jonnypillar-ui" {
  source = "../../../modules/jonnypillar-ui"

  providers = {
    aws         = aws
    aws.us_east = aws.us_east
  }

  repository_owner = "JonnyPillar"
  repository_name  = "jonnypillar-co-uk"
  github_token     = var.github_token
}
