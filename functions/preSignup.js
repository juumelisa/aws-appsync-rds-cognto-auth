exports.handler = (event, context, callback) => {
  event.response.autoConfirmUser = true;
  if (event.request.userAttributes.email) {
    event.response.autoVerifyEmail = true;
  }
  context.done(null, event);
};