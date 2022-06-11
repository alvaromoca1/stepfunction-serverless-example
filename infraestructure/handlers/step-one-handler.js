'use strict';
const responseHttp = require('../helpers/response')
const { 
  stepOne: stepOneController,
} = require('../../application/controllers/stepController')

module.exports.stepOneHandler = async (event) => {
  const { success, data, message, statusCode } = await stepOneController();
  return responseHttp(success, data, message, statusCode);
};
