const { responseSuccess, responseFail } = require('../helpers/responses');
const { StatusCodes } = require('http-status-codes')

const data = [
    {
        hello:"good code in the day"
    }
];
const getHelloWord = async() =>{
    let response = null
    try {
        response = responseSuccess({ data });
    } catch (error) {
        response = responseFail({
            message: "Error inesperado"
        });
    }
    return response;
}

module.exports = {
    getHelloWord
}