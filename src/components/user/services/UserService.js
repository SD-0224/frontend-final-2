import axios from "axios";
import { environment } from "../../../utilities/environment";

class UserService {
    constructor(token) {
        this.token = token;
        this.axiosInstance = axios.create({
            baseURL: environment.baseUrl,

        });
    }

    /**
     * Uploads an image for the user profile.
     * @param {File} file - The image file to be uploaded.
     */
    async uploadImage(file) {
        const formData = new FormData();
        formData.append('file', file);
        try {
            const response = await this.axiosInstance.post('/profile/upload-photo/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${this.token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error("Error:", error);
            throw error;
        }
    }


}

export default UserService;
