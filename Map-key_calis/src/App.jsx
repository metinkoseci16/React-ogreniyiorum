import { useState } from "react";
import Adlar from "./Adlar.jsx";

function App() {

const [gelenveriler]=useState([

{id:1, name:"ALİ", age:25},
{id:2, name:"VELİ", age:35}




]);

return(


<div>

<ul>

{gelenveriler.map((veri)=>(

<Adlar key={veri.id} kano={veri}/> 



))}



</ul>



</div>




)




}
export default App;
