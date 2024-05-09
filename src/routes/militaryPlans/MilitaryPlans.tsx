import { useContext, useEffect, useState } from "react";
import { JwtContext } from "../Root";
import { MilitaryPlanService } from "../../services/MilitaryPlanService";
import { IMilitaryPlan } from "../../domain/IMilitaryPlan";

const MilitaryPlans = () => {
    const militaryPlanService = new MilitaryPlanService();  // access to api, MilitaryPlan api
    const { jwtResponse, setJwtResponse } = useContext(JwtContext);  // hook useContext

    // For renderring
    const [data, setData] = useState([] as IMilitaryPlan[]);

    useEffect(() => {
        // Simplest form of useEffect is empty function.
        if (jwtResponse) {  // if jwtResponse is there
            militaryPlanService.getAll(jwtResponse.jwt).then(
                response => {
                    console.log(response);
                    if (response){
                        setData(response);
                    } else {
                        setData([]);
                    }
                }
            );
        }
    }, [jwtResponse]);
    
    return (
        <>MilitaryPlans {data.length}</>  // we write out how many data elements we got
    );
}

export default MilitaryPlans;