const express = require('express');
const app = express();
app.use(express.json());

app.post('/ship', (req, res) => {
  res.json({ status: 'Shipped', orderId: req.body.orderId });
});

app.listen(3003, () => console.log('Shipping Service on port 3003'));