import { useState } from "react";

import './App.css';
import Product from './Product';
import Getir from './ornkek_02';
import İcerde from './Ornek_03';
import Dahil_ET from './Dahil_etme';
import Stoklar  from './Kosullu_ornek';
import Dizi from './Dizi';
import NameInput from './NameInput';

export default function App() {
  const isimler=["Ali","veli"];
  const [ad, setAd] = useState("");
  return (
    <>
      <div>
        <Product isim="iPhone 25 Pro Max" />
       <Getir menu="Anasayfa" />
<Dahil_ET>
  <İcerde isim="Metin Köseci"/>
</Dahil_ET>

<Stoklar stok={10}/>
<Stoklar stok={25}/>

<Dizi isimler={isimler}/>

<NameInput value={ad}onChange={setAd}/>
<p>Merhaba, { ad|| "?"}</p>

  
      </div>
    </>
  );
}
