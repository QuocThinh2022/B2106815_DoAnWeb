import { authHeader } from '../helpers';
import createApiClient from "./api.service";

class UserService {
    constructor(baseUrl = "/api/user/") {
        this.api = createApiClient(baseUrl);
    }

    async login(email, password) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        };
        const user = await this.api.post('/login' , requestOptions);
        if (user.accessToken) {
            // lưu dữ liệu user và token jwt vào local storage để giữ user được log in trong page
            localStorage.setItem('user', JSON.stringify(user));
        }
        return user;
    }
}

export default new UserService();