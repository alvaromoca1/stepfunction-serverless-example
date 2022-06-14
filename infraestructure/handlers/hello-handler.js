'use strict';
const responseHttp = require('../helpers/response')
const { 
  getHelloWord: getHelloController,
} = require('../../application/controllers/helloController')
const AWS = require('aws-sdk');

module.exports.getHelloStep = async (event) => {
  const reqBody = event.body || {};
  const stepfunctions = new AWS.StepFunctions();
  var params = {
    stateMachineArn: 'arn:aws:states:us-east-1:776703223828:stateMachine:stepFunctions_test05',
    input: JSON.stringify(reqBody)
  }
  

  const suscribete = await stepfunctions.startExecution(params).promise()
        .then(async data => {
            console.debug('==> data: ', data)
            await new Promise(r => setTimeout(r, 3000));
            return await stepfunctions.describeExecution({ executionArn: data.executionArn }).promise();
        })
        .then(result => {
          console.debug("reulst debug -> : ",result)
           return {
                statusCode: 200,
                message: JSON.stringify(result)
            }
        })
        .catch(err => {
            console.error('err: ', err)
            return {
                statusCode: 500,
                message: JSON.stringify({ message: 'facing error' })
            }
        })
console.debug("suscribete -> : ",suscribete);



  const { success, data, message, statusCode } = await getHelloController(event);
  return responseHttp(success, data, message, statusCode);
};
