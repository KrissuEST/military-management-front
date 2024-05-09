import { IMilitaryPlan } from "../domain/IMilitaryPlan";
import { BaseEntityService } from "./BaseEntityService";

export class MilitaryPlanService extends BaseEntityService<IMilitaryPlan> {

    constructor(){
        super('v1/MilitaryPlans');  // gives actual url to IMilitaryPlan datatype
    }
}