import React from 'react';

//Using React-Router-DOM we allow the program to switch screens routing it to the subdomain to play!
const PongGame = () => {

    return(
        <div>
            <ul>
              {  [ "Javi", "Alex", "Ben", "Zion", "Andre", "Matthew" ].map((user, idx) => {
                  return <li key={idx}>{user}</li>
              }) }
            </ul>
        </div>
    )
        
    



}


export default PongGame;