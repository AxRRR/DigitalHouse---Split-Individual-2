const express = require('express');
require('dotenv').config();
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, './public')));

app.get('/inicio', (req, res) => {
    res.sendFile((__dirname + '/views/home.html'));
});

// Iniciamos el servidor obteniendo el 'PORT' del archivo '.env'(Environment variable)
// Para una mejor organización.
app.listen(process.env.PORT, () =>  {
    console.log('[Express]: Servidor corriendo en la ruta - http://localhost:' + process.env.PORT)
});
