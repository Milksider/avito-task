import axios from 'axios';

const baseURL = 'http://127.0.0.1:8080/api/v1/';

const instanceCreate = () => {
    const instance = axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    instance.interceptors.response.use(
        (response) => response,
        async (error) => {

            try {
                return Promise.reject(error);
            } catch {
                return Promise.reject(error);
            }
        },
    );

    return instance;
};

const apiClient = instanceCreate();

export default apiClient;
