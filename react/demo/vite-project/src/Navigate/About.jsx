


import React from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';


function About() {
    // const navi = useNavigate();
    // const location = useLocation();
    // const GoTeam = () => {
    //     navi("Team")
    // }
    return (
        <>
            <div className=' m-5 text-2xl text-center font-bold' >Welcome About</div>
            {/* <p>Current URL:{location.pathname}</p> */}
            {/* <Link to="Team">Team page</Link><br></br> */}
            {/* <button onClick={GoTeam} className="px-4 m-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >click it</button><br/> */}
            {/* <Link to = "Teams/101">id 101</Link><br/>
            <Link to = "Teams/102">id 102</Link><br/>
            <Link to = "Teams/103">id 103</Link><br/> */}
            <Outlet />
        </>
    )

}
export default About;