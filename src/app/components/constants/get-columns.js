import millify from "millify";
import styles from "./styles.module.css";

const COLUMNS = [
  { label: "RANK", renderCell: (item) => `# ${item.cmc_rank}` },
  {
    label: "NAME",
    renderCell: (item) => {
      return (
        <div>
          <div>{item.symbol}</div>
          <div className={styles.lower_label}>{item.name}</div>
        </div>
      );
    },
  },
  {
    label: "PRICE",
    renderCell: (item) =>
      `$ ${millify(item?.quote?.USD?.price, { precision: 2 })}`,
  },
  {
    label: "24H %",
    renderCell: (item) => {
      const textStyle = {
        color: item?.quote?.USD?.percent_change_24h > 0 ? "#16a34a" : "#e53e3e",
      };
      return (
        <div style={textStyle}>
          {millify(item?.quote?.USD?.percent_change_24h, { precision: 2 })} %
        </div>
      );
    },
  },
  {
    label: "7D %",
    renderCell: (item) => {
      const textStyle = {
        color: item?.quote?.USD?.percent_change_24h > 0 ? "#16a34a" : "#e53e3e",
      };
      return (
        <div style={textStyle}>
          {millify(item?.quote?.USD?.percent_change_7d, { precision: 2 })} %
        </div>
      );
    },
  },
];

export default COLUMNS;
