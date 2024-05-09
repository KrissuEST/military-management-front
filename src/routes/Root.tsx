import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { IJWTResponse } from "../dto/IJWTResponse";

// creating context, specifing what context is
export const JwtContext = createContext<{  // capital letter then it's component
    jwtResponse: IJWTResponse | null,
    setJwtResponse: ((data: IJWTResponse | null) => void) | null  // void -> don't return anything
}>({ jwtResponse: null, setJwtResponse: null });

const Root = () => {

    // creating state objects
    const [jwtResponse, setJwtResponse] = useState(null as IJWTResponse | null);

    return (
        // Provider keeps track of the object - value(contains our response, state update function)
        // used as a data inside context provider
        <JwtContext.Provider value={{ jwtResponse, setJwtResponse }}>
            <Header/>

            <div className="container">
                <main role="main" className="pb-3">
                    <Outlet/>
                </main>
            </div>

            <Footer/>
        </JwtContext.Provider>
    );
}

export default Root;