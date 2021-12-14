import React from "react";
import Image from "./Image";
import Title from "./Title";
import Button from "./Button";
import "./card.css";

const Card = (props) => {
  return (
    <>
      <div className="item-card">
        <Image imgSrc={props.imgSrc} />
        <div className="card-info">
          <Title sname={props.sname} />
          <Button links={props.links} />
        </div>
      </div>
    </>
  );
};

export default Card;
