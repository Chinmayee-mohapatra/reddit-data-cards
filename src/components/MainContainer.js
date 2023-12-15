import React, { useEffect, useState } from "react";
import DataCards from "./DataCards";
import { DATA_URL } from "../utils/constants";

const MainContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(DATA_URL);
    const json = await response.json();
    setData(json?.data?.children);
  };

  return data.length === 0 ? (
    <div className="h-[50vh] flex justify-center items-center text-5xl">
      Loading data...
    </div>
  ) : (
    <div>
      <h1 className="text-3xl text-blue-950 font-extrabold tracking-wide mb-8 text-center">
        Data Cards:
      </h1>
      <div className="flex flex-wrap justify-center items-center ">
        {data.map((item, index) => (
          <div key={index}>
            <DataCards data={item?.data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContainer;
