import React from "react";

const Greeting = () => {
  let currDate = new Date(2021, 12, 1, 14);
  let greet = "";
  let greetColor = {};
  //let currDate = new Date();
  let currTime = currDate.getHours();
  if (currTime >= 1 && currTime < 12) {
    greet = "Morning";
    greetColor.color = "green";
  } else if (currTime >= 12 && currTime < 19) {
    greet = "Evening";
    greetColor.color = "orange";
  } else {
    greet = "Night";
    greetColor.color = "black";
  }
  //let greet =
  return (
    <>
      <div>
        <h1>
          Hello Naveed Bhai,{" "}
          <span style={greetColor}>
            Good {`${greet} ${currTime} ${currDate}`}
          </span>
        </h1>
      </div>
    </>
  );
};
export default Greeting;
