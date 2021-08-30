const express = require('express');

const app = express();

const primeiro = (req, res, next) => {
    console.log("PRIMEIRO");
    next();
}

const segundo = (req, res, next) => {
    console.log("SEGUNDO");
    next();
}

const final = (req, res) => {
    console.log('FINAL');
    res.end();
}


app.get('/', primeiro, segundo, (req, res) => {
    console.log('FINAL');
    res.end();
})


app.get('/v2', primeiro, segundo, final)

app.listen(3000, () => console.log('API rodando em http://localhost:3000'))