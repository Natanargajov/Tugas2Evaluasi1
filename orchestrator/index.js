const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/order', async (req, res) => {
  try {
    const order = await axios.post('http://localhost:3001/order', req.body);
    const payment = await axios.post('http://localhost:3002/pay', { orderId: order.data.id });
    const shipping = await axios.post('http://localhost:3003/ship', { orderId: order.data.id });
    res.json({ order: order.data, payment: payment.data, shipping: shipping.data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log('Orchestrator running on port 3000'));