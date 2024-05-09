import Axios, { AxiosInstance } from 'axios';

// This is the base of all our services
// Smiple wrapper around low level browser methods how to fetch data.
export abstract class BaseService {
    private static hostBaseURL = "http://localhost:5289/api/";  // fixed base url

    protected axios: AxiosInstance;  // protected -> I need to access it

    // Communicating with base service
    constructor(baseUrl: string) {

        this.axios = Axios.create(
            {
                baseURL: BaseService.hostBaseURL + baseUrl,
                headers: {
                    common: {
                        'Content-Type': 'application/json'
                    }
                }
            }
        )
    }
    
}