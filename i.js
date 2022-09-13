'use strict';
var AWS = require('aws-sdk');
module.exports.addUserToGroup = async (event, context, callback) => {
  var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();
  var params = {
    GroupName: event.request.userAttributes.email_verified === true ? 'admin' : 'user',
    UserPoolId: event.userPoolId, 
    Username: event.userName 
  };
  try{
    cognitoidentityserviceprovider.adminAddUserToGroup(params).promise()
  }
  catch(err){
    callback()
  }
}


const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();
const params = {
  UserPoolId: 'ap-southeast-1_BsNTvetsl',
  AttributesToGet: ['username', 'email']
};
cognitoidentityserviceprovider.listUsers(params, function(err, data) {
  if (err){
    callback(err);
  }
  else{
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  }
});