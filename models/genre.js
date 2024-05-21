const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
});

// Virtual for genre's URL
GenreSchema.virtual("url").get(function () {
  return "/catalog/genre/" + this._id;
});

// Export the model
module.exports = mongoose.model("Genre", GenreSchema);
