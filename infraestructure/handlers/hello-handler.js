'use strict';
const responseHttp = require('../helpers/response')
const { 
  getHelloWord: getHelloController,
} = require('../../application/controllers/helloController')

module.exports.getHello = async (event) => {
  const { success, data, message, statusCode } = await getHelloController();
  return responseHttp(success, data, message, statusCode);
};
