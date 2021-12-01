const net = require('net');
const setup = require("/home/dio/lighthouse/w2/d3-net/snek-client/setupInput.js")
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541// PORT number here,
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