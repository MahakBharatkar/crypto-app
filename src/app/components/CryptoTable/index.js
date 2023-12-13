import useGetTable from "./useGetTable";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import COLUMNS from "../constants/get-columns";
import styles from "./styles.module.css";

const CryptoTable = () => {
  const { data: nodes, loading = false } = useGetTable();
  const reactTheme = useTheme(getTheme());
  const theme = {
    ...reactTheme,
    Table: `
    border-radius: 10px;
    background-color: #3e0061;
    `,

    HeaderRow: `
    background-color: #3e0061;
    margin-top: 8px;
    margin-bottom: 8px;
    @media(max-width: 576px){
      font-size: 10px;
  `,

    Row: `
    background-color: #3e0061;
    color: #ffffff;
    &:not(:last-of-type) .td {
      border-bottom: 1px solid #24004a;
    }
    &:hover .td {
      background-color: #4f1d6e;
        }
        cursor:pointer;
    @media(max-width: 576px){
      font-size: 10px;
  }
`,
  };

  const columnData = { nodes };

  return (
    <div className={styles.table_container}>
      <span className={styles.table_heading}>Crypto Table</span>
      <div className={styles.box_container}>
        {!loading && columnData?.length !== 0 ? (
          <CompactTable
            className={styles.custom_table}
            columns={COLUMNS}
            data={columnData}
            theme={theme}
          />
        ) : null}
      </div>
    </div>
  );
};

export default CryptoTable;
