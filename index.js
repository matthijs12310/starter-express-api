var http = require("http");

http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    const { spawn } = require('child_process')

// start the `ping google.com` command
const command = spawn('lscpu')

// the `data` event is fired every time data is
// output from the command
command.stdout.on('data', output => {
    console.log("Output: ", output.toString())
    response.end('Hello World\n', output.toString());
})

 }).listen(8081);
 
 // Console will print the message
 console.log('Server running at http://127.0.0.1:8081/');
