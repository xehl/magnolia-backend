// import mongoose
let mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// connect to database
const DATABASE_NAME = process.env.ATLAS_URI;
let mongooseConfig = { useNewUrlParser: true, useUnifiedTopology: true };

// event listeners for mongoose
mongoose.connection.on("connected", () =>
  console.log("connected to cloud database")
);
mongoose.connection.on("disconnected", () =>
  console.log("disconnected from database")
);
mongoose.connection.on("error", (error) => console.error("error", error));
mongoose.connect(DATABASE_NAME, mongooseConfig);

module.exports = mongoose;

// const { MongoClient } = require("mongodb");
// const Db = process.env.ATLAS_URI;
// const client = new MongoClient(Db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// var _db;

// module.exports = {
//   connectToServer: function (callback) {
//     client.connect(function (err, db) {
//       // Verify we got a good "db" object
//       if (db) {
//         _db = db.db("employees");
//         console.log("Successfully connected to MongoDB.");
//       }
//       return callback(err);
//     });
//   },

//   getDb: function () {
//     return _db;
//   },
// };
