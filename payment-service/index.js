const express = require('express');
const app = express();
app.use(express.json());

app.post('/pay', (req, res) => {
  res.json({ status: 'Paid', orderId: req.body.orderId });
});

app.listen(3002, () => console.log('Payment Service on port 3002'));