
import React from "react";

function Course({course}){
const { id, title, description, price, link, image}=course




    return(

<div className="Kurs_box" key={id}>
      <img src={image}alt="" width={250} height={150}  />
   <div className="course_content">
   
<h4>{title}</h4>
<p>{description}</p>
<p>{price}</p>

<a href={link}>Satın Al</a>
   </div>
</div>



    )
}
 export default Course;