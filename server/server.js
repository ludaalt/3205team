const http = require("http");

const { findUsers } = require("./services/findUsers");

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

const server = http.createServer(function (request, response) {
  if (request.url === "/api") {
    let chunks = [];
    request.on("data", (chunk) => {
      chunks.push(chunk);
    });

    request.on("end", () => {
      const data = Buffer.concat(chunks);
      const querystring = data.toString();
      const resivedData = JSON.parse(querystring);
      const searchResult = findUsers(resivedData);
      //////////
      // const html = `
      //       <div>
      //       ${searchResult}
      //       </div>`;
      // response.writeHead(200, { "Content-Type": "text/html" });
      response.write(JSON.stringify(searchResult));
      response.end();
      // response.write("<h2>hello world</h2>");
      // response.end();
    });

    //   response.write("<h2>hello world</h2>");

    //response.end();
  }
});

//const port = 8000;

const PORT = process.env.PORT || 3001;
server.listen(PORT);
console.log(`Listening at :${PORT}`);

// const host = "127.0.0.1";
// server.listen(PORT, host);
// console.log(`Listening at http://${host}:${PORT}`);
