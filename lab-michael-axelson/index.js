'use strict';

const net = require('net');
const User = require('./client.js');

const server = net.createServer();
let clientPool = [];

server.on('connection', (socket) => {
  const user = new User(socket);
  socket.write('hello user, welcome to Michaels chat!\n');
  socket.write(`${user.nickname} connected!\n`);

  clientPool = [...clientPool, user];
  console.log(clientPool);
  let handleDisconnect = () => {
    console.log(`${user.nickname} left the chat`);
    clientPool = clientPool.filter(item => item !== socket);
  };

  socket.on('error', handleDisconnect);
  // socket.on('close', handleDisconnect);

  socket.on('data', (buffer) => {
    let data = buffer.toString();
    if(data.startsWith('/nickname')){
      user.nickname = data.split('/nickname ')[1] || user.nickname;
      user.nickname = user.nickname.trim();
      user.socket.write(`you are now know as ${user.nickname}\n`);
      user;
      return;
    }
    // "/troll 3 how are you"
    if(data.startsWith('/troll')){
      let content = data.split('/troll')[1] || '';
      let split = content.split(' ');
      let words = split.slice(1);
      let trollNumber = parseInt(words[0]);
      let message = split.slice(2).join(' ');
      for (var i = 0; i< trollNumber; i++){
        clientPool.forEach((user) => {
          user.socket.write(`${user.nickname}: ${message}`);
        });
      }
    }
    if(data.startsWith('/quit')){
      // let content = data.split('/troll')[1] || '';
      // let split = content.split(' ');
      // let words = split.slice(1);
      // let handleDisconnect = () => {
      //   console.log(`${user.nickname} left the chat`);
      //   clientPool = clientPool.filter(item => item !== socket);
      // };
      // clientPool.forEach((user) => {
      //   user.socket.write(`${user.nickname} left the chat`);
      console.log('end user\n');
      socket.end();
    }



    // "/dm slugbyte how are you"
    if(data.startsWith('/dm')){
      let content = data.split('/dm')[1] || '';

      let split = content.split(' ');
      let words = split.slice(1);
      let userName = words[0];
      let message = split.slice(2, split.length).join(' ');
      let dmClients = clientPool.filter(user => user.nickname ==userName);
      console.log('clients....'+dmClients);
      for (let i= 0; i <dmClients.length; i++){
        dmClients[i].socket.write(`${user.nickname}:${message}`);
      }
      return;
    }

    if(data.startsWith('/quit')){


    clientPool.forEach((user) => {
      user.socket.write(`${user.nickname}: ${data}`);
    });
  });
});

server.listen(3000, () => {
  console.log('server up on port 3000');
});
