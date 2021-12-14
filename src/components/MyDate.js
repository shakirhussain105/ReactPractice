import React from "react";

const MyDate = () => {
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();

  return (
    <>
      <h1
        className="heading"
        style={{
          textAlign: "center",
          color: "green",
          textTransform: "capitalize",
        }}
      >
        Shakir Hussain
      </h1>
      <p>{`Current Date is ${currDate}`}</p>
      <p>{`Current Time is ${currTime}`}</p>
    </>
  );
};

export default MyDate;
