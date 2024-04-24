import axios from "axios";
import { environment } from "../../../utilities/environment";

/**
 *
 * @param {{email: string, password: string}} loginRequest - The login credentials.
 * @returns {Promise<Object>} The login response data.
 */
export function login(loginRequest) {
    return fetch(`${environment.baseUrl}/user/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loginRequest),
    })
        .then(response => response.json())
        .then(data => {
            console.log("Success:", data);
            return data;
        })
        .catch(error => {
            console.error("Error:", error);
            throw error;
        });
}
/**
 * Registers a user with given credentials.
 * @param {{firstName: string, lastName: string, phoneNumber: string, email: string, password: string}} signupRequest - The register credentials.
 */
export async function signup(signupRequest) {
    try {
        const response = await axios.post(`${environment.baseUrl}/user/register`, signupRequest);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}