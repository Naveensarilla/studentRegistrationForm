// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Form } from './Form'
import { Student } from './Student'
import { GetingApi } from './Geting'
import Vall from './Vall'
import { Pdf } from './Pdf'
// import { Canav } from './Canav'
// import { Vall } from './Vall'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* <div style={{background:'red'}}>
      {`http://localhost:709/${id}`}
    </div> */}

{/* <Canav/> */}



    <Student/>
    <Pdf/>
     {/* <Form/> */}
     {/* <GetingApi/> */}
   
     {/* <Form/> */}

     {/* <Vall/> */}
    </>
  )
}

export default App
