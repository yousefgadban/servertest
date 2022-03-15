const express = require('express');

const app = express();

app.get('/test', (req, res) => {
    console.log('test');
    res.status(200).send('test success!');
});

const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`); 
});