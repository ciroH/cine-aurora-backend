const express = require('express');
const app = express();
const port = 3030;

app.get('/', (req, res) => {
  res.send('OK');
});

app.listen(port, () => {
  console.log(`aurora-backend listening on port ${port}`);
});

