import { getHostedUrl, RequestMethod } from "../../functions/common";

/**
 * call GET `roleUri`
 * 
 * @param session 
 * @param roleUri - uri of the role
 * 
 * @returns - role details, if the call failed `null`
 */
export default async function mediumApiCall() {

    try {
        const res = await fetch(
            `${getHostedUrl()}/api/mediumApi`, {
                method:  RequestMethod.POST
            }
        );

        const data = await res.json();

        return data;
    } catch (err) {
        return null;
    }
}
