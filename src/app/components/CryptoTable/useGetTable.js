import { useEffect, useReducer, useState } from "react";
import axios from "axios";

const useGetTable = ({ setCurrencies = () => {} }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getdata = async () => {
    try {
      setLoading(true);

      await axios.get("http://localhost:4000/api").then((res) => {
        setData(res.data);
      });

      setLoading(false);

     
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  useEffect(()=>{
    setCurrencies((previousValues) => {
      const newSymbols = data.map(item => item.symbol);
      const uniqueSymbols = Array.from(new Set([...previousValues, ...newSymbols]));
      return uniqueSymbols;
  });
  },[setCurrencies, data])

  return { data, loading };
};

export default useGetTable;
