const { responseSuccess, responseFail } = require('../helpers/responses');
const { StatusCodes } = require('http-status-codes')

const data = [
    {
        hello:"good code in the day"
    }
];
const stepOne = async() =>{
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

const stepTwo = async() =>{
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
const stepThree = async() =>{
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
    stepOne,
    stepTwo,
    stepThree
}