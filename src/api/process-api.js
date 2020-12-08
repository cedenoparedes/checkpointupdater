import { handleResponse, handleError } from "./api-utils";
import config from "../config";
let baseUrl = `${config.baseApiURL[config.env]}/checkpoint/process/`;

///resume/:customername/:modelname/:processname/:partnumber
export function getPieParams(customer, model, process, partnumber, token) {


    return fetch(baseUrl + "resume/" + customer + "/" + model + "/" + process + "/" + partnumber, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + token
        }
    })
        .then(handleResponse)
        .catch(handleError);
}

export function getFailures(customer, model, process, stepProcess, token) {

    return fetch(baseUrl + "failure/" + customer + "/" + model + "/" + process + "/" + stepProcess, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + token
        }
    })
        .then(handleResponse)
        .catch(handleError);
}

export function saveProcess(passParams, token) {

    return fetch(baseUrl, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + token
        },
        body: JSON.stringify(passParams),
    })
        .then(handleResponse)
        .catch(handleError);
}