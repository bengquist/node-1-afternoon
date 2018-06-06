const express = require("express");
const bodyParser = require("body-parser");

const port = 3000;
const app = express();

const mc = require("./controllers/messages_controller");

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public/build"));

app.get("/api/messages", mc.readMessage);
app.post("/api/messages", mc.createMessage);
app.put("/api/messages/:id", mc.updateMessage);
app.delete("/api/messages/:id", mc.deleteMessge);

app.listen(port, () => {
  console.log(`Server listening on port:${port}`);
});
