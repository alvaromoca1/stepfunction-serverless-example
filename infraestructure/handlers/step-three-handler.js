'use strict';
const responseHttp = require('../helpers/response')
const { 
  stepThree: stepThreeController,
} = require('../../application/controllers/stepController')

module.exports.stepThreeandler = async (event) => {
  const { success, data, message, statusCode } = await stepThreeController(event);
  return responseHttp(success, data, message, statusCode);
};
