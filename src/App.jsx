import { useState } from 'react'
import './App.css'
import Input from './assets/components/input'
import Button from './assets/components/button'

function App() {
  const [calVal,setcalVal]=useState("")

  const clickButton=(event)=>{
    console.log(event.target.childNodes[0].data)
    if (event.target.childNodes[0].data==='C'){
      setcalVal("")
    }
    else if(event.target.childNodes[0].data==='='){
      const result=eval(calVal)
      setcalVal(result)
    }
    else{
      const newDisplay=calVal+event.target.childNodes[0].data;
      setcalVal(newDisplay)
    }
  }

  let buttonArray=['1','2','3','+','4','5','6','-','7','8','9','/','0','%','.','='];
  return (
    <>
      <div className='main'>
        <Input calVal={calVal} clickButton={clickButton}></Input>
        <Button buttonArray={buttonArray} clickButton={clickButton}></Button>
      </div>
    </>
  )
}

export default App
