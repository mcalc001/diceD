import React from 'react';

const UserPage = ({user, onRollChange}) => {
const ser = JSON.stringify(user);
return(
    <div className="tc">
              <h1> User Page </h1>      
              {ser}                  
   </div>
    );
}

export default UserPage;  
