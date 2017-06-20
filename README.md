
![cf](https://i.imgur.com/7v5ASc8.png) lab-06-tcp-chat-server
======

## To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

# Include
* gitignore-done
* eslint-done
* package.json-done
* include any npm scripts for starting server, linting, testing, etc -done
* readme
 * Write a paragraph about your project
 * Write docs on how to get the project running
 * Write docs on how to connect to the server
* test your code
  * ensure that all of your methods have test coverage
  * write tests which start your server, send and receive, and confirm functionality

## Directions
* Create a TCP Server use using the net module
* Create a Client Constructor
* When sockets connect to the server a new `Client` instance should be made
* Clients should have a unique 'nickname'
 * **e.g.** `guest-43`
* When sockets are connected with the ClientPool they should be given event listeners for `data`, `error`, and `close` events
 * When a socket emits the `close` event the socket should be removed from the client pool! -done
 * When a socket emits the `error` event the error should be logged on the server :DONE
 * When a socket emits the `data` event the data should be logged on the server and the `\wack` commands below should be implemented

# Wack commands `'/'`
* `/nick` should allow a user change their nickname
* `/dm` should allow a user to send a message directly to another user by nick name-DONE
* when a user speaks their nickname should be printed
 * **i.e.** `teapot: Sup Hacker?` -done
* `/troll` should take in a number and a message and send the message to everyone that number of times -done
* `/quit` should close the connection with the user -done.

## Bonus
* 2pts Write a test that tests `\nick` actually changes a clients nickname
