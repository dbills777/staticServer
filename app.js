const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.listen(process.env.PORT || port, () =>
  console.log(`"Static Files App LIstening at http://localhost:${port}`)
);
