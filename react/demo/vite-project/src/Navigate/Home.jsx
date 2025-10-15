import React from 'react'
import Img from './assets/react.svg'
import { useAuth } from './Router/AuthContext';
import { useNavigate } from "react-router-dom";



function Home() {
  const {activateReadMore } = useAuth();
  const navigate = useNavigate();

  const handleReadmore = () =>{
    activateReadMore();
    navigate('/about');
  }
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome Home Page</h1>
      <button onClick={handleReadmore} style={{ padding: '10px', backgroundColor: 'blue', color: 'white' }}>
        Readmore
      </button>

    </div>
  );
}

export default Home;
