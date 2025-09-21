
import React from "react";
import Header  from "./Header";
import "./App.css"
import { courses } from "./Data";

import Course from "./Course";
function App() {
  const [adlar] = useState([
    { id: 1, name: "Ali" },
    { id: 2, name: "Veli" },
    { id: 3, name: "Ayşe" },
  ]);

  return (
    <ul>
      {adlar.map((isim) => (
        <li key={isim.id}>{isim.name}</li>
      ))}
    </ul>
  );
}
export default App;