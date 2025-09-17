import { use, useState } from "react";
import Elemanlar from "./ornek_bir";
import "./App.css";
import Addegistir  from "./Ornek_iki";

function App() {
 // const [FisrtName, setFisrtName] = useState("Metin");
 // const [LastName, setLastName] = useState("Köseci");

const [FisrtName,setFisrtName]=useState("Metin");
const[LastName,setLastName]=useState("Köseci");
const[addegis,setAddegis]=useState("Haşeria");

const [userInfo,setusertInfo]=useState({username:"metin", password:"1234"});
const [show, setShow]=useState(true);

const ismidegistir=()=>{
  setFisrtName("Ahmet")
}

  return (
    <div style={{display:"flex", gap:"10px"}}>
<Elemanlar isim={FisrtName} />
<Elemanlar soyisim={LastName} />

<div style={{display:"flex, flexDricetion:column"}}>
  <Addegistir ad={addegis}/>
</div>
<div> 

<button onClick={ismidegistir}>AD DEĞİŞTİR 
</button>
  <button onClick={()=>{setAddegis("ÖLDÜ")}} >İsim Değiştir</button></div> 


{show ? <div>{userInfo.username} {userInfo.password}   </div>: <div>Bilgileri gösterme</div>}






  
    </div>
  );
}

export default App;
