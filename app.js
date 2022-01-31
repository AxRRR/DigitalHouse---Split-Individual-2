const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, './public')));

app.listen(process.env.PORT || 5000, () =>  {
    console.log('[Express]: Servidor corriendo correctamente.')
});

app.get('/home', (req, res) => {
    res.sendFile((__dirname + '/views/home.html'));
});

app.get('/auth/register', (req, res) => {
    res.sendFile((__dirname + '/views/register.html'));
});

app.get('/auth/login', (req, res) => {
    res.sendFile((__dirname + '/views/login.html'));
});

app.get('/', (req, res) => {
    res.sendFile((__dirname + '/views/home.html'));
});

// Si el enlace no existe... renderizamos la vista de 404.
app.get('*', (req, res) => {
    res.sendFile((__dirname + '/views/404.html'));
});
