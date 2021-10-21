const net = require('net');
const stdin = process.openStdin();

const client = net.Socket();

client.connect(2501, 'localhost', () => {
  stdin.addListener('data', (text) => {
    const message = text.toString().trim();

    client.write(message);
  })
});

client.on('data', (data) => {
  console.log(data.toString());
});