import { handleResponse, handleError } from "./api-utils";
import config from "../config";
let baseUrl = `${config.baseApiURL[config.env]}/checkpoint/process/`;

export function getPieParams(customer, model, process, token) {


    return fetch(baseUrl + "resume/" + customer + "/" + model + "/" + process, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        }
    })
        .then(handleResponse)
        .catch(handleError);
}

export function getFailures(customer, model, process, token) {

    return fetch(baseUrl + "failure/" + customer + "/" + model + "/" + process, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
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
            Authorization: token
        },
        body: JSON.stringify(passParams),
    })
        .then(handleResponse)
        .catch(handleError);
}