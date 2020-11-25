import { handleResponse, handleError } from "./api-utils";
import config from "../config";
const baseUrl = config.baseApiURL[config.env] + "/checkpoint/menu/";

export function getProcesses(token) {
    return fetch(baseUrl + "processes", {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + token,
        }
    })
        .then(handleResponse)
        .catch(handleError)

}


export function getModels(token) {
    return fetch(baseUrl + "models", {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + token,
        }
    })
        .then(handleResponse)
        .catch(handleError)
}

export function getCustomers(token) {
    return fetch(baseUrl + "customers", {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + token,
        }
    })
        .then(handleResponse)
        .catch(handleError)
}


