# testserver

## Instructions

### How to run the server

1. Clone the repository:
   ```
   git clone https://github.com/OptifySudarshanPatil/testserver.git
   cd testserver
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```
   API_KEY=YOUR_OPENWEATHERMAP_API_KEY
   ```

4. Start the server:
   ```
   node server.js
   ```

### How to make GET requests to retrieve the temperature of a city

1. Open your web browser or use a tool like `curl` or Postman.

2. Make a GET request to the server with the city name as a query parameter. For example, to get the temperature of London:
   ```
   http://localhost:3000/?city=London
   ```

3. The server will respond with the temperature in JSON format. Example response:
   ```json
   {
     "city": "London",
     "temperature": 15.5
   }
   ```
