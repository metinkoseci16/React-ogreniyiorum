import { useState } from "react";
import Getir from "./ornek_bir";
import "./App.css";

function App() {
  const [FisrtName, setFisrtName] = useState("Metin");
  const [LastName, setLastName] = useState("Köseci");
  return (
    <div style={{display:"flex", gap:"10px"}}>
      <Getir adi={FisrtName} />
         <Getir soyad={LastName} />
    </div>
  );
}

export default App;
