// import mongoose module
const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  name: String,
  date_created: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  address: {
    street: String,
    city: String,
    state: String,
    zip_code: Number,
  },
});

// make schema
let entrySchema = new mongoose.Schema({
  id: Number,
  author_fname: {
    type: String,
    required: true,
  },
  author_lname: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  location_id: mongoose.SchemaTypes.ObjectId,
  location: locationSchema,
});

// transforms the schema into a mongoose model called "Entry", and exports it as a module
module.exports = mongoose.model("Entry", entrySchema);
