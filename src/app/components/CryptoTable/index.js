"use client"
import useGetTable from "./useGetTable";

const CryptoTable = () => {
  const { data, isLoading } = useGetTable();

  console.log("data", data);
  
  return <div>CryptoTable</div>;
};

export default CryptoTable;
