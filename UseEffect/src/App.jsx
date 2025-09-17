import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
const [firstrName, setFirstName]= useState('');
const [LastName, setLastName]= useState('');
useEffect(()=>{
  debugger//hataları aramak için kullanılır
  console.log("Her render’da çalışır");
});


useEffect(()=>{
    debugger
  console.log("Her render’da çalışır 1 kere çalışır");
},[firstrName]);


useEffect(()=>{
  console.log("her render’da çalışır 1 kere çalışır !");
},[LastName]);



  return (
<div>
  <button onClick={()=>{setFirstName("Metin")}}>Değişti 1</button>
    <button onClick={()=>{setLastName("Köseic")}}>Değişti 2</button>
</div>
  )
}

export default App
