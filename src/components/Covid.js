import React, { useEffect, useState } from "react";
import "./covid.css";

const Covid = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    // fetch API data
    try {
      const res = await fetch(
        "http://localhost/recruitment/api/v1/advposts/quota/1"
      );
      const resData = await res.json();
      console.log("response" + JSON.stringify(resData.quota[0]));
      setData(resData.quota[0]);
    } catch (error) {
      console.log("error" + error);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <h1>COVID-19 Tracker</h1>
      <div className="card">
        <div className="container">
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
          <p>{data.title}</p>
        </div>
      </div>
    </>
  );
};
// To Use Effect - use Pascal Convention
//(First Letter must be Capital)
export default Covid;
