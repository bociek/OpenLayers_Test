// Lokalny serwer Express
const express = require('express');     // Inicjalizacja serwera
const port = 5500;                      // Ustalenie portu

const app = express();

app.get('/', function(req, res) {
    res.render('index');
})

app.listen(port);