import react ,{ useState } from "react";

function UseState(){
    const [message, setmessage] = useState("Hello");
    return(
        <div>
            <h1>Parent Component</h1>
            <Child data = {message}/>
        </div>
    );
}
function Child({data}){
    return <h2>Child recevied:{data}</h2>;
}

export default UseState;