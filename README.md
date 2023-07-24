# Hit Counter Implementaion Using CDK

It demonstrates a CDK app with an instance of a stack (`CdkWorkshopStack`) which contains a Lambda Fuction and HitCounter construct that define a lambda function and dynamodb.

## Description

In this workshop we implemented hit counter functionality using lambda function and save the path Url's in dynamodb table with there hit counts. and also called a downstream lambda function and returned that lambda function response to the api gateway as well.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

after deyploying we got Endpoint to call HitCounter.
