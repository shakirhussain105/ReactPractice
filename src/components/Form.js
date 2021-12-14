import React, { useState } from "react";
import "./form.css";

const Form = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
    address: "",
  });
  // const [fullName, setFullName] = useState("");

  const formEvent = (event) => {
    //console.log(event.target.value);
    console.log(event.target.name);
    //setUserInfo();
    //const { value, name } = setName(() => {});
    // const value = event.target.value;
    //const name = event.target.name;

    const { value, name } = event.target;
    setUserInfo((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const submitForm = (event) => {
    event.preventDefault();
    alert("Form Submitted");
    //setFullName(name);
  };

  return (
    <>
      <div className="flex-container">
        <form onSubmit={submitForm}>
          <h1>{`Hello ${userInfo.username} ${userInfo.password}  
            ${userInfo.email} ${userInfo.phone} ${userInfo.address}`}</h1>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={formEvent}
            value={userInfo.username}
          />

          <input
            type="text"
            name="password"
            placeholder="Password"
            onChange={formEvent}
            value={userInfo.password}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={formEvent}
            value={userInfo.email}
          />

          <input
            type="number"
            name="phone"
            placeholder="Phone"
            onChange={formEvent}
            value={userInfo.phone}
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={formEvent}
            value={userInfo.address}
          />

          <button type="submit">Click Me 😆</button>
        </form>
      </div>
    </>
  );
};

export default Form;
