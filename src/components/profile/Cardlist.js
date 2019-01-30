import React from 'react';
import Posts from './Posts';


const Cardlist = ({data}) => {

         
     return(

		<div >
		{
		data.map((user, i) => {
      	return (  
      		<Posts key={i} 
          id={data[i].roll_id}
      		data={data[i].rolldata} 
      		date={data[i].rolldate}
         }
            />

      	);
    
      })
     }
		 </div>
	);
}






export default Cardlist;