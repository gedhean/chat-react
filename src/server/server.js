const app = require('express')();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);

const PORT = 8000 || process.env.PORT;

io.on('connection', socket => {
  console.log('Connection recieved');
  socket.on('client message', msg => {
    socket.broadcast.emit('agente message', {
      msgId: Math.random().toString(32).substr(2),
      content: msg.content,
      createAt: msg.createAt,
      from: 'agente'
    });
    console.log('Message from client:', msg.content);
  });
  socket.on('disconnect', () => {
    console.log('Client desconnected');
  });
  io.on('connection_error', err => {
   console.log('Erro: ', err);
  });
});

httpServer.listen(PORT, (stuff) => {
  console.log(`Linstening on port ${PORT}...`);
  //console.log('Stuff:', stuff);
});

