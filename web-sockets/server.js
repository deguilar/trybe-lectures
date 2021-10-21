const net = require('net');

let connectedClients = [];
let clientId = 0;

const broadcastMessage = (from, message) => {
  connectedClients
  .filter((client) => client.id !== from.id)
  .forEach((client) => {
    client.write(message)
  });
}

const server = net.createServer((socket) => {
  console.log(`Clientes conectados: ${connectedClients.length}`);
  console.log("novo cliente conectado");

  clientId = clientId + 1;
  socket.id = `Cliente${clientId}`;

  socket.write(`Bem vindo, ${socket.id}!`);

  connectedClients.push(socket);

  broadcastMessage(socket, `O cliente #${socket.id} entrou!`);

  socket.on('data', (data) => {
    console.log(`mensagem recebida do cliente: ${data.toString()}`);

    broadcastMessage(socket, `${socket.id} > ${data}!`);
  });

  socket.on('end', () => {
    console.log(`Clientes conectados: ${connectedClients.length}`);
    broadcastMessage(socket, `O cliente #${socket.id} saiu!`);
    connectedClients = connectedClients.filter((client) => client.id !== socket.id);
  })
});

server.listen(2501, () => console.log('Websockets is running...'));
