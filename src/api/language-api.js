import { handleResponse, handleError } from "./api-utils";
import config from "../config";
const baseUrl = config.baseApiURL[config.env] + "/login";


export function getLanguage(language) {
    return fetch(baseUrl + language, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        }

    })
        .then(handleResponse)
        .catch(handleError);
}