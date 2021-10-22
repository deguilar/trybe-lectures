const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const EXPRESS_PORT = 3000
const SOCKETIO_PORT = 5000

const socketIoServer = require('http').createServer(app);
const io = require('socket.io')(socketIoServer, {
  cors: { // Aqui existe um objeto de configuração, essas options são necessárias a partir da major 3 do socket.io 
    origin: `http://localhost:${EXPRESS_PORT}`, // origem permitida
    methods: ['GET', 'POST'], // métodos permitidos
  },
});

io.on('connection', (socket) => {
  socket.emit('loadNotifications', NEWS);
  console.log(`novo usuário ${socket.id}  conectado ao socket.io`);
})

app.set('view engine', 'ejs')
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/assets', express.static('./assets/javascripts'));
app.use('/assets', express.static('./assets/css'));

const NEWS = [];

app.get('/board/ssr', (req, res) => {
  res.render('board/ssr', { notifications: NEWS });
})

app.get('/board/csr', (req, res) => {
  res.render('board/csr');
})

app.post('/notify', (req, res) => {
  const { notification } = req.body;

  NEWS.push(notification);

  io.emit('notification', notification);

  res.status(201).json({ message: 'Notificado com sucesso'});
});

// app.listen(EXPRESS_PORT, () => console.log(`Express app listening on port ${EXPRESS_PORT}!`));

socketIoServer.listen(EXPRESS_PORT, console.log(`Socket.io server listening on port ${SOCKETIO_PORT}!`))