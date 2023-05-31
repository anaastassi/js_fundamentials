const http = require("http");
const hostname = "127.0.0.1";
const port = 5000;
const os = require("os");
const path = require("path");
const { json } = require("stream/consumers");
const scriptName = path.basename(__filename);
const dirName = path.dirname(__filename);
let platform = os.type();
const username = os.userInfo()["username"];
const uptime = os.uptime();

const module1 = require("./ personalmodule");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(
    "<h1>System information</h1><p>Current user name :" +
      username +
      ",<br>OS type: " +
      platform +
      ",<br>System work time : " +
      uptime +
      ",<br>Current work directory : " +
      dirName +
      ",<br>Server file name : " +
      scriptName +
      "</p><br><p>Date of request :" +
      new Date() +
      "<br>" +
      module1.greet(username) +
      "</p>"
  );
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
