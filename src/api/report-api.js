import { handleResponse, handleError } from "./api-utils";
import config from "../config";
let baseUrl = `${config.baseApiURL[config.env]}checkpoint/report/daily`;

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