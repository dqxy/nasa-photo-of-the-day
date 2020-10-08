import React from "react";
import styled from "styled-components";
const MarsCard = styled.div`
  background: #000000;
  color: #ffffff;
  width: 200px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const NasaImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: scale;
  flex-shrink: 2;
`;

const NasaCard = props => {
  return (
  <MarsCard>
    <NasaImage alt="initial nasa" src={props.img_src} />
    <h2>{props.id}</h2>
  </MarsCard>
  );
};

export default NasaCard;
