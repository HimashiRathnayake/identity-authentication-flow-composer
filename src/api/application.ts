/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import axios from "axios";
import { getApplicationsResourceEndpoints } from "../configs";
import { AuthenticationSequenceInterface } from "../models";

/**
 * Gets the application details.
 *
 * @param {string|null} appId
 *
 * @return {Promise<any>} A promise containing the response.
 *
 * TODO: Use this function to get the application details to show the existing authentication flow of the application
 *  from the console when the Authentication Flow Composer opens
 */
export const getApplicationDetails = (appId:string|null) : Promise<any> => {
    return axios.get(
        `${getApplicationsResourceEndpoints().applications}${appId}`,
        {
            headers: {
                "Accept": "application/json",
                "Authorization": "Basic YWRtaW46YWRtaW4="
            }
        }
    ).then((response) => {
        if (response.status !== 200) {
            return Promise.reject(new Error("Failed to update authentication sequence"));
        }
        return Promise.resolve(response);
    }).catch((error) => {
        return Promise.reject(error);
    });
};

/**
 * Gets the authenticators or the idp list.
 *
 * @param {string} type
 *
 * @return {Promise<any>} A promise containing the response.
 */
export const getAuthenticators = (type?:string) : Promise<any> => {
    return axios.get(
        type === "idp"
            ? getApplicationsResourceEndpoints().identityProviders
            : getApplicationsResourceEndpoints().authenticators,
        {
            headers: {
                "Accept": "application/json",
                "Authorization": "Basic YWRtaW46YWRtaW4="
            }
        }
    ).then((response) => {
        if (response.status !== 200) {
            return Promise.reject(new Error("Failed to update authentication sequence"));
        }
        return Promise.resolve(response);
    }).catch((error) => {
        return Promise.reject(error);
    });
};

/**
 * Gets the templates.
 *
 * @return {Promise<any>} A promise containing the response.
 *
 * Current implementation use templates from templates.json
 * TODO: Use this function to get the templates from the server.
 */
export const getTemplates = () : Promise<any> => {
    return axios.get(
        getApplicationsResourceEndpoints().templates,
        {
            headers: {
                "Accept": "application/json",
                "Authorization": "Basic YWRtaW46YWRtaW4="
            }
        }
    ).then((response) => {
        if (response.status !== 200) {
            return Promise.reject(new Error("Failed to get templates"));
        }
        return Promise.resolve(response);
    }).catch((error) => {
        return Promise.reject(error);
    });
};

/**
 * Gets the authenticators or the idp list.
 *
 * @param {AuthenticationSequenceInterface} authenticationSequence
 * @param {string|null} appId
 *
 * @return {Promise<any>} A promise containing the response.
 */
export const updateAuthenticationSequence = (
    authenticationSequence: AuthenticationSequenceInterface, appId: string|null
) : Promise<any> => {
    return axios.patch(
        `${getApplicationsResourceEndpoints().applications}${appId}`,
        { authenticationSequence: authenticationSequence },
        {
            headers: {
                "Accept": "application/json",
                "Authorization": "Basic YWRtaW46YWRtaW4="
            }
        }
    ).then((response) => {
        if (response.status !== 200) {
            return Promise.reject(new Error("Failed to update authentication sequence"));
        }
        return Promise.resolve(response);
    }).catch((error) => {
        return Promise.reject(error);
    });
};
