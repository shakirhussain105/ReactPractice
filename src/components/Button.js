import React from "react";

const Button = (props) => {
  return (
    <>
      <a href={props.links} target="_blank">
        <button>Watch Now</button>
      </a>
    </>
  );
};

export default Button;
