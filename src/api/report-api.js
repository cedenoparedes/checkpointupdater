import { handleResponse, handleError } from "./api-utils";
import config from "../config";
let baseUrl = `${config.baseApiURL[config.env]}/checkpoint/report/daily/`;


export const getTableData = (customer, model, process, date, token) => {
    return fetch(baseUrl + "export/" + customer + "/" + model + "/" + process + "/" + date, {
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
    return fetch(baseUrl + "graphic/" + customer + "/" + model + "/" + process + "/" + date, {
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
