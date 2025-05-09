const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('dist'));

const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
