import React, { useState, useEffect } from "react";
import NasaCard from "./NasaCard";
import axios from "axios";

export default function NasaGrid() {
  const [images, setImages] = useState([]);
  const [cam, setCam] = useState("fhaz");

// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY


  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${cam}&api_key=DEMO_KEY`)
      .then(response => {
        console.log(response.data.photos);
        setImages(response.data.photos);
      })
      .catch(error => {
        console.log("Sorry no photos", error);
      });
  }, [cam]);
  return (
    <div className="container">
      <button onClick={() => setCam("fhaz")}>Front Hazard</button>
      <button onClick={() => setCam("rhaz")}>Rear Hazard</button>
      <div className="entry">
        {images.map(image => {
          return <NasaCard cam={cam} img_src={image.img_src} id={image.id}/>;
        })}
      </div>
    </div>
  );
}
