require('dotenv').config();
const express = require("express");
const axios = require("axios");
const port = 4000;

const app = express();
app.use(express.json());

const api = axios.create({
  method: "GET",
  baseURL: "https://pro-api.coinmarketcap.com",
  headers: {
    'X-CMC_PRO_API_KEY': process.env.COINMARKET_API_KEY,
    Accept: 'application/json',
    'Accept-Encoding': 'deflate, gzip',
  },
});
app.get('/api', (req, res) => {
  api('/v1/cryptocurrency/listings/latest?limit=20')
    .then((response) => response.data)
    .then((value) => res.json(value.data))
    .catch((err) => console.log(err));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
