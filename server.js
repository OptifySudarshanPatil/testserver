const http = require('http');
const url = require('url');
const axios = require('axios');

const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';
const PORT = 3000;

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url.startsWith('/')) {
    const queryObject = url.parse(req.url, true).query;
    const city = queryObject.city;

    if (!city) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'City parameter is required' }));
      return;
    }

    try {
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const temperature = response.data.main.temp;

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ city, temperature }));
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Failed to fetch temperature' }));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
