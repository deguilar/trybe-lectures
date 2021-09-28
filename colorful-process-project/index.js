const express = require('express');

const randomHexColor = require('random-hex-color');

const randomColor = randomHexColor();


const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // res.type('text/html');
  // res.send(`<body style="background-color: ${randomColor};">
  //   <h1>A aplicação esta rodando no processo de id: ${process.pid}!</h1>
  // </body>`);
  res.json({ pid: process.pid })
});

app.get('/bug', (req, res) => {
  res.send('Aplicação vai cair!');
  console.log('aplicação caiu por x motivo');
  process.exit(0);
})

app.listen(port, (err) => {
  console.log(`Escutando na porta ${port}`);
});