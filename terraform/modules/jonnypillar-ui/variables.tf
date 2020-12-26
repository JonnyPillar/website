variable "repository_branch" {
  type        = string
  description = "Name of repository branch"
  default     = "master"
}

variable "repository_owner" {
  type        = string
  description = "Name of repository owner"
}

variable "repository_name" {
  type        = string
  description = "Name of source repository"
}

variable "github_token" {
  type        = string
  description = "Github access token"
}

variable "contentful_space_id" {
  type        = string
  description = "Contentful space id"
}

variable "contentful_access_token" {
  type        = string
  description = "Contenful access token"
}
