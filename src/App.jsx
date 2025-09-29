import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Welcome(props) {
  return<h1>Hii {props.name}</h1>
}
function App(){
  return(
    <div>
      <Welcome name="Savi" />
      <Welcome name="sasi" />
      <Welcome name="dharns" />
    </div>
  )
}
export default App
