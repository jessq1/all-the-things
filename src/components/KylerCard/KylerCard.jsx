import React from 'react';

const KylerCard = ({ kyler }) => {
  return (
    <>
      <h2>{kyler.name}</h2>
      <img height='300'src={kyler.image} alt=""/>
      <ul>
        {kyler.attributes.map((attribute, idx) =>
          <li key={idx} >{attribute}</li>  
        )}
      </ul>
    </>
  );
}