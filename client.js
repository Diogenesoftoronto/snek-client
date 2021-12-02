const net = require('net');
const setup = require("/home/dio/lighthouse/w2/d3-net/snek-client/setupInput.js")
const {IP, PORT} = require("/home/dio/lighthouse/w2/d3-net/snek-client/constant.js")
const connect = function () {
  const conn = net.createConnection({
   host: IP,
   port: PORT
  });
  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log(data);
  });
  conn.on("connect", () => {
    conn.write("Name: Dio" )


    console.log('connection established')
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};
module.exports = connect;