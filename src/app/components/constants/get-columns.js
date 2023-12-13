import millify from "millify";

const COLUMNS = [
    // { label: '#', renderCell: (item) => item.cmc_rank },
    // {
    //     label: 'Name', renderCell: (item) => item.name
    // },
    // {
    //     label: 'Price', renderCell: (item) => `$ ${millify(item?.quote?.USD?.price, { precision: 2})}`
    // },
    // {
    //     label: '24h %', renderCell: (item) => `${millify(item?.quote?.USD?.percent_change_24h, { precision: 2})} %`
    // },
    // {
    //     label: '7d %', renderCell: (item) => `${millify(item?.quote?.USD?.percent_change_7d, { precision: 2})} %`
    // },
    { label: '#', renderCell: (item) => 'hello' },
];

export default COLUMNS;