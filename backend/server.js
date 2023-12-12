require('dotenv').config();
const express = require("express");
const cors = require('cors');
const axios = require("axios");
const port = 4000;

const app = express();
app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
  };
  
  app.use(cors(corsOptions));

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
