const express = require('express');
const app = express();
app.use(express.json());
let orderId = 1;

app.post('/order', (req, res) => {
  const order = { id: orderId++, item: req.body.item };
  res.json(order);
});

app.listen(3001, () => console.log('Order Service on port 3001'));