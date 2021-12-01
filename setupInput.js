// setup interface to handle user input from stdin
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;  
}
// does not work
const handleUserInput = function (key) {
  // your code here
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  };
  if (key === '\u2190') {
    conn.write('Move: left')
  };
  if (key === '\u2191') {
    conn.write('Move: up')
  };
  if (key === '\u2192') {
    conn.write('Move: right')
  };
  if (key === '\u2193') {
    conn.write('Move: down')
  };
};

module.exports = setupInput;
//https://www.key-shortcut.com/en/writing-systems/35-symbols/arrows
// \u2190 maps left arrow key
// \u2191 maps up arrow key
// \u2193 maps to the down arrow key
// \u2192 maps right arrow key