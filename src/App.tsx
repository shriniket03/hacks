// import { useState } from 'react'
import "./App.css";
import { Container } from "@mui/material";
import Heading from './components/Heading'
import RadioButtons from './components/RadioButtons'
import { useState } from 'react'
import Form from './components/Form' 

function App() {
  const [type, setType] = useState("")
  return (
    <div style={{width:'100vw', height:'100vh'}}>
    <Container sx={{marginBottom:10}}>
      <Heading msg={`Identify Illicit Blockchain Transactions`}/>
      <RadioButtons setType={setType}/>
      <Form type={type}/>
    </Container>
    </div>
  );
}

export default App;
