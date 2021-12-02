let connection;
// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;  
}

const handleUserInput = function (key) {
  
  // \u0003 maps to ctrl+c input
  switch (key){
    
    case '\u0003':
      process.exit();
    case 'a':
      connection.write('Move: left')
      break;
    case 'w':
      connection.write('Move: up')
      break;
    case 'd':
      connection.write('Move: right')
      break;
    case 's':
      connection.write('Move: down')
      break; 
    case 'h':
      connection.write('Say: topkek')
      break;
    case 'l':
      connection.write('Say: u snooze u lose')
      break;
    default:
      connection.write('Say: kono dio da')
    }

};

module.exports = setupInput;
//https://www.key-shortcut.com/en/writing-systems/35-symbols/arrows
// \u2190 maps left arrow key
// \u2191 maps up arrow key
// \u2193 maps to the down arrow key
// \u2192 maps right arrow key