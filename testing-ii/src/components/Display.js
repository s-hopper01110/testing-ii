import React from 'react';

function Players(props) {
  
  return (
    <>

        <h3>Come and Play </h3>
        <p>Balls: {props.balls}</p>
        <p>Strikes: {props.strikes}</p>
      
    </>
    
    
  );
}

export default Players;