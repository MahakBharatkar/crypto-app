"use client";
import useGetTable from "./useGetTable";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import {
  DEFAULT_OPTIONS,
  getTheme,
} from "@table-library/react-table-library/chakra-ui";
import { Box } from "@chakra-ui/react";
import COLUMNS from "../constants/get-columns";

const CryptoTable = () => {
  const { data, isLoading } = useGetTable();
  const chakraTheme = getTheme(DEFAULT_OPTIONS);
  const theme = useTheme(chakraTheme);

  const nodes = [
    {
      id: "0",
      name: "Shopping List",
      deadline: new Date(2020, 1, 15),
      type: "TASK",
      isComplete: true,
      nodes: 3,
    },
  ];

  console.log("data", data);
  console.log("COLUMNS", COLUMNS);
  // const columnData= { data };
  const columnData = { nodes };

  return (
    <div>
      <span>CryptoTable</span>
      <Box p={3} borderWidth="1px" borderRadius="lg">
        {!isLoading && data?.length !== 0 ? (
          <CompactTable columns={COLUMNS} data={data} theme={theme} />
        ) : null}
      </Box>
    </div>
  );
};

export default CryptoTable;
