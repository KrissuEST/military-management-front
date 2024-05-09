import { IBaseEntity } from "./IBaseEntity";

export interface IMilitaryPlan extends IBaseEntity {
    planName: string,
    appUserId: string,    
}