const connection = require("./connection");
const mongoose = require("mongoose");
let express = require("express");

// runs express app taking json input
let app = express();
app.use(express.json());

// cors middleware
const cors = require("cors");
app.use(cors());

const Entry = require("./Entry");

// check root path
app.get("/", (req, res) => {
  res.send("Magnolia DB");
});

// get first 20 entries
app.get("/entries", (request, response) => {
  Entry.find({})
    .then((entries) => {
      let small = entries.slice(0, 20);
      response.json({ small });
    })
    .catch((err) => console.error(err));
});

// post a new entry
app.post("/entries", (request, response) => {
  console.log("posting");
  Entry.create(request.body)
    .then(() => {
      response.send("new entry recorded");
    })
    .catch((err) => console.error(err));
});

// run();
// async function run() {
//   try {
//     const entry = await Entry.find({});
//     console.log(entry);
//   } catch (err) {
//     console.error(err.message);
//   }
// }

// runs the express server
const PORT = 9000;
let server = app.listen(process.env.PORT || 9000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
server.on("listening", () =>
  console.log("listening on port " + process.env.PORT || PORT)
);
server.on("error", (error) => console.error("server error", error));
