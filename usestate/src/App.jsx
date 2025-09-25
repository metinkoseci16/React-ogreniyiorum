import React from "react";
import Header  from "./Header";

import "./App.css"
import { courses } from "./Data";
import Course from "./Course";

function App() {
  return (
    <div >
      <Header />

      <div className="Kurslar">
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default App;
