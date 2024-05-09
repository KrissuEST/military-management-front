import { IJWTResponse } from "../dto/IJWTResponse";
import { IRegisterData } from "../dto/IRgeisterData";
import { BaseService } from "./BaseService";

export class IdentityService extends BaseService {
    constructor() {
        super('v1/identity/account/');  // add here url where identity service should go
    }
    
    // takes one parameter -> register data
    async register(data: IRegisterData): Promise<IJWTResponse | undefined> {
        try {
            // does simple async axios post, post have generic type parameter -> IJWTResponse
            // specifies what return type should be
            const response = await this.axios.post<IJWTResponse>('register', data); //final url we call -> register

            console.log('register response', response);
            if (response.status === 200) {
                return response.data;
            }
            return undefined;
        } catch (e) {
            console.log('error: ', (e as Error).message);
            return undefined;
        }
    }

}