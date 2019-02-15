"use strict";

exports.handler = async (event, context, callback) => {
  console.info(`Input: ${JSON.stringify(event)}`);
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hi Testing For Mike Demo",
      input: event
    })
  });

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
