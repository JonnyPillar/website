resource "aws_s3_bucket" "jonnypillar_ui_bucket" {
  bucket = "jonnypillar.co.uk"
  acl    = "public-read"
  website {
    index_document = "index.html"
    error_document = "index.html"
  }
  force_destroy = true

  policy = <<EOF
{
  "Version":"2012-10-17",
  "Statement":[{
        "Sid":"PublicReadForGetBucketObjects",
        "Effect":"Allow",
          "Principal": "*",
      "Action":["s3:GetObject"],
      "Resource":["arn:aws:s3:::jonnypillar.co.uk/*"]
    }
  ]
}
EOF
}

resource "aws_s3_bucket" "jonnypillar_ui_pipeline_artifact_bucket" {
  bucket = "jonnypillar-ui-artifacts"
  acl    = "private"
}
