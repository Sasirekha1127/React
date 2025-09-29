import React, { createContext, useContext} from "react";

const Mycontext = createContext();

function UseContext() {
    return(
        <Mycontext.Provider value={"Sasi"}>
            <Child/>
        </Mycontext.Provider>   
    )
}
function Child(){
    const name = useContext(Mycontext)
    return <h1>Hello, <br></br>{name}</h1>
}
export default UseContext;
    