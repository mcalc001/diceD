import React from 'react';


const posts =({data, date, id }) => {
  const newdata =  data.replace(/"/g, '');

    if (data === "No posts yet, you had better get rolling!"){
      return <div className=" pt3 black"> {data} </div>
    }else {
     return (


<article className="  pl4 white tc color shadow-5 center mh mw6 mw6-ns hidden pa3 mb4 ba mv4">
  <h1 className="f4 tc mw6 black b white mv0 pv2 ph3">{date.slice(0, -14)}</h1>
   <div className="pa3 tc bt">

    <p className="  white f4 ">
      {newdata}
     </p>
     
   


  </div>
</article>
  	
  	)
}}

export default posts; 

