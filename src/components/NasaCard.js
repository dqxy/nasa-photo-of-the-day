import React from "react";

const NasaCard = props => {
  return (
    <div className="nasa-card" key={props.id}>
      <img className="nasa-image" alt="initial nasa" src={props.img_src} />
      <h2>{props.id}</h2>
    </div>
  );
};

export default NasaCard;
