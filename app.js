const express = require('express');
require('dotenv').config();
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, './public')));

app.get('/inicio', (req, res) => {
    res.sendFile((__dirname + '/views/home.html'));
});

app.listen(process.env.PORT, () =>  {
    console.log('[Express]: Se ha iniciado correctamente en el puerto: ' + process.env.PORT)
});
