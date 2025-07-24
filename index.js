const express = require('express');
const axios = require('axios');
const app = express();

const API_URL = 'https://cloudjson-production.up.railway.app/api/payments/transaction-details/?format=json';

app.get('/proxy', async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    res.json(response.data);
  } catch (error) {
    console.error('❌ Error fetching API:', error.message);
    res.status(500).send('Proxy Error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Proxy running at http://localhost:${PORT}`);
});
