const { responseSuccess, responseFail } = require('../helpers/responses');
const { StatusCodes } = require('http-status-codes')

const stepOne = async() =>{
    const data = [
        {
            hello:"stpe 1 good code in the day"
        }
    ];
    let response = null
    try {
        response = responseSuccess({ data });
        console.debug("one",data)
    } catch (error) {
        response = responseFail({
            message: "Error inesperado"
        });
    }
    return response;
}

const stepTwo = async(event) =>{
    let response = null

    const data = [
        {
            hello:"step 2 good code in the day"
        }
    ];
    try {
        console.debug("event-2 ->>> : ",event)

        response = responseSuccess({ data });
        console.debug("two",data)
    } catch (error) {
        response = responseFail({
            message: "Error inesperado"
        });
    }
    return response;
}
const stepThree = async(event) =>{
    let response = null

    const data = 
        {
            hello:"step 3 good code in the day"
        }
    try {
        console.debug("dataStepThree : ",data)
        console.debug("event : ",event)
        response = await responseSuccess({ data });
        console.debug("reponse : ",response);
        console.debug("three",data)
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