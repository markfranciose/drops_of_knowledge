### quick way to get AWS account number from cli:
```
	aws sts get-caller-identity --output text --query 'Account'
```
