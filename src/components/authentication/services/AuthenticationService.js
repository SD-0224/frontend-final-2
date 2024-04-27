import axios from "axios";
import { environment } from "../../../utilities/environment";

/**
 *
 * @param {{email: string, password: string}} loginRequest - The login credentials.
 */
export async function login(loginRequest) {
    try {
        const response = await axios.post(`${environment.baseUrl}/user/login`, loginRequest);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }

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


export async function logout() {
    try {
        const response = await axios.post(`${environment.baseUrl}/user/logout`);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}