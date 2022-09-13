"use strict";
const AWS = require('aws-sdk');
const {USER_POOL_ID} = process.env
exports.handler = (event, context, callback) => {
    const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();
    const params = {
        UserPoolId: USER_POOL_ID,
        Limit: event.limit,
        PaginationToken: event.paginationToken
      };
      cognitoidentityserviceprovider.listUsers(params, function(err, data) {
        if (err){
          callback(err);
        }
        else{
          callback(null, {statusCode: 200, body: data})
        }
      });
}