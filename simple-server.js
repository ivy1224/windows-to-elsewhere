const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Received request');
  res.end('Test server is working!');
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`);
  console.log(`Try accessing: http://localhost:${PORT}`);
}); 