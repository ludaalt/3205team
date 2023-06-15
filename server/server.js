const http = require("http");

const { findUsers } = require("./services/findUsers");

const server = http.createServer(function (request, response) {
  if (request.url === "/api") {
    let chunks = [];
    request.on("data", (chunk) => {
      chunks.push(chunk);
    });

    request.on("end", () => {
      setTimeout(() => {
        const data = Buffer.concat(chunks);
        const querystring = data.toString();
        const resivedData = JSON.parse(querystring);
        const searchResult = findUsers(resivedData);
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(JSON.stringify(searchResult));
        response.end();
      }, 5000);
    });
  }
});

const PORT = process.env.PORT || 3001;
server.listen(PORT);
console.log(`Listening at :${PORT}`);
