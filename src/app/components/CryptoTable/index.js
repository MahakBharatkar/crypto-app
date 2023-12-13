import useGetTable from "./useGetTable";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from '@table-library/react-table-library/baseline';
import { Box } from "@chakra-ui/react";
import COLUMNS from "../constants/get-columns";
import styles from './styles.module.css';

const CryptoTable = () => {
  const { data:nodes, loading = false } = useGetTable();
  const reactTheme = useTheme(getTheme());
  const theme = {...reactTheme,
    Table: `
    border-radius: 10px;
    `,
  }

  console.log('table', theme);

  const columnData = { nodes };

  return (
    <div>
      <span>CryptoTable</span>
      <div className={styles.box_container}>
        {!loading && columnData?.length !== 0 ? (
          <CompactTable className={styles.custom_table} columns={COLUMNS} data={columnData} theme={theme}/>
        ) : null}
      </div>
    </div>
  );
};

export default CryptoTable;
