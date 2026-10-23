require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Server running on port ' + process.env.PORT);
});

app.listen(process.env.PORT, () => {
  console.log('Server started on http://localhost:' + process.env.PORT);
});
