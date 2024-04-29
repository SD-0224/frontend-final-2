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

    /**
    * Update User Profile
    * @param {{firstName: string, lastName: string, phoneNumber: string,email: string}} updateProfileRequest - The update profile request.
    *  
    */
    async updateProfile(updateProfileRequest) {
        try {
            const response = await this.axiosInstance.put('/profile/update-details', updateProfileRequest, {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            });
            return response.data;

        } catch (error) {
            console.log(error);
            throw error;
        }

    }


    /**
   * Gets User Details
   *  
   */
    async getUserDetails() {
        try {
            const response = await this.axiosInstance.get('/profile/details', {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            });
            return response.data;

        } catch (error) {
            console.log(error);
            throw error;
        }

    }




}

export default UserService;