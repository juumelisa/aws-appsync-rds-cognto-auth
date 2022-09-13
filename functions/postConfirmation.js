'use strict';
const AWS = require('aws-sdk');
exports.handler = (event, context, callback) => {
  const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();
  const params = {
    GroupName: event.request.userAttributes.email ? 'admin' : 'user',
    UserPoolId: event.userPoolId, 
    Username: event.userName
  };
  cognitoidentityserviceprovider.adminAddUserToGroup(params, function(err, data) {
    if (err) {
        callback(err);
    }
    callback(null, event);
  });
}