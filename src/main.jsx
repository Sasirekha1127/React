import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import State from './State.jsx'
import UseState from './UseState.jsx'
import Form from './Form.jsx'
import UseContext from './UseContext.jsx'
import Update from './Updatecontext.jsx'
import Example from './UseContextTask.jsx'
import Todolist from './Todolist.jsx'
import Task from './Task.jsx'
import FormValidation from './Formvalidation.jsx'
import ValidationExample  from './Formik.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <State /> */}
    {/* <UseState/> */}
    {/* <UseContext/>  */}
    {/* <Form/> */}
    {/* <Update/> */}
    {/* <Todolist/>  */}
    {/* <Example/> */}  
    {/* <Task/> */}
    <FormValidation/>
    <ValidationExample/>
  </StrictMode>,
)
