resource "aws_ssm_parameter" "contentful_space_id_parameter" {
  name  = "contentful_space_id"
  type  = "String"
  value = var.contentful_space_id
}

resource "aws_ssm_parameter" "contentful_access_token_parameter" {
  name  = "contentful_access_token"
  type  = "String"
  value = var.contentful_access_token
}