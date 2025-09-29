import React, { createContext, useContext, useState } from "react";
import './App.css'

const Mycontext = createContext();

function Example() {
    const [styleClass, setStyleClass] = useState("");

    return (
        <Mycontext.Provider value={{ styleClass, setStyleClass }}>
            <h1>Components</h1>
            <Parent />
            <Child />
            <Grandchild />
        </Mycontext.Provider>
    );
}

const Parent = () => {
    const { styleClass, setStyleClass } = useContext(Mycontext);
    return (
        <div className={`div1 ${styleClass}`}>
            Parent
            <button className="btn" onClick={() => setStyleClass("style1")}>Change Textcolor</button>
        </div>
    );
};

const Child = () => {
    const { styleClass,setStyleClass } = useContext(Mycontext);
    return (
        <div className={`div2 ${styleClass}`}>
            Child
            <button className="btn" onClick={() => setStyleClass("style2")}>Change Fontsize</button>
        </div>
    );
};

const Grandchild = () => {
    const { styleClass,setStyleClass } = useContext(Mycontext);
    return (
        <div className={`div2 ${styleClass}`}>
            Grandchild
            <button className="btn" onClick={() => setStyleClass("style3")}>Change Background</button>
        </div>
    );
};

export default Example;
