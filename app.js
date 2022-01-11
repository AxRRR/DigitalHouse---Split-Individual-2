const express = require('express');
const path = require('path');
const app = express();

// app.use(express.static(path.join(__dirname, '/public')));

// app.use('/css',express.static(__dirname +'.public/css'));
app.use(express.static(path.join(__dirname, './public')));

app.get('/inicio', (req, res) => {
    res.sendFile((__dirname + '/views/home.html'));
});

// app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + './public'));

// app.use(express.static(path.join(__dirname, './public')));

app.listen(4000, () =>  {
    console.log('[Express]: Se ha iniciado correctamente en el puerto 4000.')
});
