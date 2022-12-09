// const express = require("express");
// const app = express();
// const http = require("http");
// const server = http.createServer(app);
// const io = require("socket.io")(server);
// const PORT = 3000;

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// app.use(express.static(__dirname + "/"));

// io.on("connection", (socket) => {
//   socket.on("result", (number) => {
//     // console.log("こちらは？");
//     console.log("番号とれたかな" + number);
//     io.send("result", number);
//   });
// });

// server.listen(PORT, () => {
//   console.log("listening on 3000");
// });
