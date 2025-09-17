import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const arttir = () =>{
    setCount(count + 1)
  }
    const eksilt = () =>{
  if(count >0){
      setCount(count - 1)
  }
  }


  return (
  <div style={{display:"flex",gap:"2rem"}}>

<div><button onClick={eksilt}>-</button></div>
<div> <input  style={{textAlign:'center'}} type="text" value={count} /></div>
<div><button onClick={arttir}>+</button></div>




  </div>
     
  )
}

export default App
