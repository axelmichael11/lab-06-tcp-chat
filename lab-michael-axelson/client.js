'use strict';

const net = require('net');

const User = module.exports = function(socket) {
  this.socket = socket;
  this.nickname = `user_${Math.floor(Math.random()*200)}`;
};
