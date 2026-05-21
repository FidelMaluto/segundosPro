const express = require('express');
const PORT = 3434;
const http = require('http');
const socket = require('socket.io');

const app =express();
const server = http.createServer(app);
const io = socket(server);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/paginas.html');
});

io.on('connection', (socket) => {
  console.log('Usuário conectado!');

  socket.on('chatMessage', (msg) => {
    io.emit('chatMessage', msg);
  });

   socket.on('sendImage', (imgData) => {
    io.emit('receiveImage', imgData);
  });

  socket.on("send-audio", (data) => {
    // Enviar áudio para todos (menos quem enviou)
    socket.broadcast.emit("receive-audio", data);
  });
});

server.listen(PORT, () => {
  console.log(`Rodando em http://localhost:${PORT}`);
});
