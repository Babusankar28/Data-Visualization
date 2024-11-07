/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const CarSaleData = createContext();
function CarContext({ children }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/get-car")
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, []);

  return <CarSaleData.Provider value={data}>{children}</CarSaleData.Provider>;
}

export const useCars = () => useContext(CarSaleData);
export default CarContext;
