const app = require('express')();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);

const PORT = 8000 || process.env.PORT;

io.on('connection', socket => {
  console.log('Connection recieved');
  socket.on('client message', msg => {
    console.log('Message from client:', msg.content);
    socket.broadcast.emit('agente message', { 
      content: msg.content,
      time: new Date().toLocaleTimeString()}
    );
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