const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');

const app = express();

/* O que é isso? */
app.use(bodyParser.urlencoded({ extended: true }));


const connection = mysql
  .createPool({
    host: 'localhost',
    user: 'root',
    database: 'cats_api',
    password: 'root',
  });

/* Busca todos os gatos */
app.get('/cats', async (req, res) => {
  try {
    const [cats] = await connection.execute('SELECT name, age FROM cats_api.cats');

    const content = cats.reduce((html, cat) => {
      const {name, age} = cat;
      return html + `<li>Nome: ${name} - Idade: ${age}</li>`;
    }, '');

    const htmlBase = `
      <html>
        <head>
          <title>Gatos</title>
        </head>
        <body>
          <ul style="background-color: antiquewhite">
            ${content}
          </ul>
          <form action="/cats" method="POST">
            <input name="name" type="text">
            <input name="age" type="number">
            <button type="submit">Criar novo gato!</button>
          </form>
        </body>
      </html>
    `;
    res.send(htmlBase);
  } catch (err) {
    console.error(err);
    res.status(500).send('<h2>Erro ao tentar realizar operação</h2>');
  }
});

/* Cria um novo gato */
app.post('/cats', async (req, res) => {
  const { name, age } = req.body;

  if (typeof name !== 'string' || name.length < 3 || name.length >= 30) {
    return res.status(400).send(`
      <h2>O nome digitado não é válido</h2>

      <a href='/cats'>Voltar</a>
    `);
  }

  try {
    await connection.execute(
      'INSERT INTO cats_api.cats (name, age) VALUES (?,?)',
      [name, age],
    );

    res.send(`
      <h2>Gato criado com sucesso!</h2>

      <a href='/cats'>Voltar</a>
    `);
  } catch (error) {
    console.error(error);
    res.status(500).send('<h2>Erro ao tentar criar o gato</h2>');
  }
});

/* Busca um gato por ID */

  app.get('/cats/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const [cat] = await connection.execute(
        'SELECT name, age FROM cats_api.cats WHERE id = ?',
        [id]
      );

      if (!cat) {
        return res.status(404).send(`
          <h2>Gato não encontrado :(</h2>

          <a href='/cats'>Voltar</a>
        `);
      }
      
      const {name, age} = cat[0];

      const content = `<h2>Nome: ${name} - Idade: ${age}</h2>`;
      const htmlBase = `
        <html>
          <head>
            <title>Detalhes</title>
          </head>
          <body>
            <div style="background-color: antiquewhite">
              ${content}
            </div>

            <a href='/cats'>Voltar</a>
          </body>
        </html>
      `;
  
      res.send(htmlBase);
    } catch (error) {
      console.error(error);
      res.status(500).send('<h2>Erro ao tentar realizar operação</h2>');
    }
  });

app.listen(3001, () => {
  console.log('Ouvindo a porta 3001!');
});