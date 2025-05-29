const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Received request from:', req.socket.remoteAddress);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Debug server is working!\n');
});

const PORT = 9000;

server.on('error', (error) => {
  console.error('Server error:', error);
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use`);
  }
});

server.on('listening', () => {
  const address = server.address();
  console.log('Server is listening on:');
  console.log(`- http://localhost:${PORT}`);
  console.log(`- http://127.0.0.1:${PORT}`);
  console.log(`- http://[::1]:${PORT}`);
  console.log(`- http://${address.address}:${PORT}`);
});

server.listen(PORT, '0.0.0.0'); 