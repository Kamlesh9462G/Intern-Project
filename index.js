const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const hostname = 'localhost';

app.listen(port, ()=> {
    console.log(`Server listening on https://${hostname}:${port}`);
})