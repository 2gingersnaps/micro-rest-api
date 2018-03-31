# micro-rest-api
>Use Node.js, Mongo, and free serverless infrastructure services instead of traditional full stack architecture to handle on-demand data reporting tasks.
>
>In this example, traditional server routes are replaced by AWS CloudFormation.
>
>Models and controllers live in AWS Lambda microservices like this one. See models/ and handler.js.
>
>MongoDB Atlas is hosting the database.
>
>Serverless is handling deployment instead of a traditional CI/CD process.
>
>No load balancers needed.
>
>Optional log consolidation and monitoring are provided by Dashbird.
>
>Overall, this is a fast, affordable, "cloud thinking" solution for on-demand data queries and reporting.
### requirements
```txt
(1) AWS Lambda and CloudFormation
(2) Serverless
(3) MongoDB Atlas
(4) Dashbird (optional)
I highly recommend this awesome tutorial by https://github.com/adnanrahic: https://hackernoon.com/building-a-serverless-rest-api-with-node-js-and-mongodb-2e0ed0638f47
```
### run locally
```sh
npm install
sls offline start --skipCacheInvalidation
```
### deployment
```sh
sls deploy
```
### available endpoints
```txt
getAll
getOne
(post, put, and delete routes will work for you if you set up your personal permissions accordingly in Atlas and AWS)
```
