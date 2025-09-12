
function İsimlistesi({isimler}){

    return(
        <div>
            <ul>
{isimler.map((ad,i)=>(
<li key={i} >{ad}</li>



))}
</ul>
        </div>
    )
}


export default İsimlistesi;














//function İsimlistesi({isimler}){

  //  return(
///<div>
    //<ul>
    //  {isimler.map((ad, i) => (
      //  <li key={i}>{ad}</li>
     /// ))}
   // </ul>
//</div>
  //  )
//}
//export default İsimlistesi;