'use strict';
const responseHttp = require('../helpers/response')
const { 
  stepTwo: stepTwoController,
} = require('../../application/controllers/stepController')

module.exports.stepTwoHandler = async (event) => {
  const { success, data, message, statusCode } = await stepTwoController(event);
  return responseHttp(success, data, message, statusCode);
};
