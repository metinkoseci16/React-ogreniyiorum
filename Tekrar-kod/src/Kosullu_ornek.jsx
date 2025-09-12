function Stoklar({stok}){

return(

<div>
{stok >0 ? <p>Stokta var</p>: <p>Stokta Yok</p>}

{stok >10 && <small> Stok 10 dan fazla </small>}
</div>


)

}
export default Stoklar;