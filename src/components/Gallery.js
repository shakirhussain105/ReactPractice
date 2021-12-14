import React, { useEffect, useState } from "react";
import Card from "./Card";

const Gallery = () => {
  //use state
  const [serData, setSerData] = useState([]);
  const getSeriesInfo = async () => {
    // Fetch API Data
    try {
      const res = await fetch(
        "http://localhost/recruitment/api/v1/netflix/series"
      );
      const resData = await res.json();
      console.log(`response ${resData.series[0].sname}`);
      setSerData(resData.series);
    } catch (err) {
      console.log(`error ${err}`);
    }
  };
  useEffect(() => {
    getSeriesInfo();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Netflix Series</h1>
      <div className="container">
        {serData.map((val) => {
          return (
            <Card
              key={val.id}
              sname={val.sname}
              imgSrc={val.imgSrc}
              title={val.title}
              links={val.links}
            />
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
