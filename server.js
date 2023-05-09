const express = require("express");
const app = express();

module.exports = app;

const PORT = process.env.PORT || 4001;

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const apiRouter = require("./server/api");
app.use("/api", apiRouter);

// This conditional is here for testing purposes:
if (!module.parent) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}
