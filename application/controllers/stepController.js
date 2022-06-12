const { responseSuccess, responseFail } = require('../helpers/responses');
const { StatusCodes } = require('http-status-codes')

const dataStep0ne = [
    {
        hello:"stpe 1 good code in the day"
    }
];

const dataStepTwo = [
    {
        hello:"step 2 good code in the day"
    }
];

const dataStepThree = [
    {
        hello:"step 3 good code in the day"
    }
];
const stepOne = async() =>{
    let response = null
    try {
        response = responseSuccess({ dataStep0ne });
        console.debug("one",dataStep0ne)
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
        response = responseSuccess({ dataStepTwo });
        console.debug("two",dataStepTwo)
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
        response = responseSuccess({ dataStepThree });
        console.debug("three",dataStepThree)
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