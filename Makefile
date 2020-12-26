AWS := aws
CLOUDFRONT_ID := EKCJHF7HAK4KU

.PHONY: aws-cloudfront-invalidate-all
aws-cloudfront-invalidate-all:
	$(AWS) cloudfront create-invalidation --distribution-id $(CLOUDFRONT_ID) --paths "/*"