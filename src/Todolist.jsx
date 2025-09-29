import React, { useReducer, useState } from "react";
import './Todolist.css'

// Initial state
const initialState = [
    { sno: 1, name: "Sasi", status: "True" },
    { sno: 2, name: "Rekha", status: "False" },
];

// Reducer function
function reducer(state, action) {
    switch (action.type) {
        case "TOGGLE_STATUS":
            return state.map((item) =>
                item.sno === action.payload
                    ? { ...item, status: item.status === "True" ? "False" : "True" }
                    : item
            );
        case "DELETE":
            return state.filter((item) => item.sno !== action.payload);
        case "ADD":
            return [...state, action.payload];
        default:
            return state;
    }
}

function Todolist() {
    const [data, dispatch] = useReducer(reducer, initialState);
    const [name, setName] = useState("");
    const [status, setStatus] = useState("True"); 

    const handleAdd = () => {
        if (!name) return alert("Enter name!");
        const newSno = data.length > 0 ? data[data.length - 1].sno + 1 : 1;dispatch({type: "ADD",payload: { sno: newSno, name, status },});
        setName("");
        setStatus("True");
    };

    return (
        <div>
            <h2>Todolist Table</h2>

            {/* {/* Input for adding } */}
            <div style={{ marginBottom: "10px" }}>
                <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button className="add" onClick={handleAdd}>Add</button>
            </div>
            <table className="table" border="1" cellPadding="5" >
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (  
                        <tr key={item.sno}>
                            <td>{item.sno}</td>
                            <td>{item.name}</td>
                            <td>{item.status}</td>
                            <td>
                                <button
                                    className={`toggle ${item.status === "True" ? "True" : "False"}`}
                                    onClick={() =>
                                        dispatch({ type: "TOGGLE_STATUS", payload: item.sno })
                                    }
                                >
                                    Toggle
                                </button>
                                <button
                                    className="delete"
                                    onClick={() => dispatch({ type: "DELETE", payload: item.sno })}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Todolist;
