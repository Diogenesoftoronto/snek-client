const net = require("net");
const connect = require("/home/dio/lighthouse/w2/d3-net/snek-client/client.js");
const setupInput = require("/home/dio/lighthouse/w2/d3-net/snek-client/setupInput.js")



console.log("Connecting ...");
// establishes a connection with the game server

connect();

setupInput(connect)
