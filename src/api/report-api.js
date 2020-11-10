import { handleResponse, handleError } from "./api-utils";
import config from "../config";
let baseUrl = `${config.baseApiURL[config.env]}/checkpoint/report/daily/`;


export const getTableData = (customer, model, process, date, token) => {
    baseUrl += `${"export"}/${customer}/${model}/${process}/${date}`;
    return fetch(baseUrl, {
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

export const getPieCharData = (customer, model, process, date, token) => {
    baseUrl += `${"graphic"}/${customer}/${model}/${process}/${date}`;
    return fetch(baseUrl, {
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

export function getDailyData(customer, process, model, result, token) {

    return fetch(baseUrl + "daily" + customer + "/" + process + "/" + model + "/" + result, {
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