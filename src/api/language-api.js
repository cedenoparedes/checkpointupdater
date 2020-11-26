import { handleResponse, handleError } from "./api-utils";
import config from "../config";
const baseUrl = config.baseApiURL[config.env] + "/checkpoint/lang/";


export function getLanguage(language) {
    return fetch(baseUrl + language, {
        method: "GET",
        mode: "cors",
        headers: {
            "API-KEY-CHK-X": config.apiKey,
        }

    })
        .then(handleResponse)
        .catch(handleError);
}