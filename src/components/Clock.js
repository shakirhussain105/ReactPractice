import React, { useState } from "react";

const Clock = () => {
  let [currentTime, setTime] = useState(new Date().toLocaleTimeString());
  const UpdateTime = () => {
    setTime(new Date().toLocaleTimeString());
  };
  setInterval(UpdateTime, 1000);
  return (
    <>
      <div class="container">
        <h2>{currentTime}</h2>
        {/* <button
          style={{ padding: "10px", background: "purple", color: "#fff" }}
          onClick={UpdateTime}
        >
          Get Time
        </button> */}
      </div>
    </>
  );
};

export default Clock;
