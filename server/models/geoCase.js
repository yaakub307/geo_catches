import mongoose from "mongoose";

const geoCaseSchema = mongoose.Schema({
  title: String,
  description: String,
  photo: String,
  lon: Number,
  lat: Number,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  digged: {
    type: Boolean,
    default: false,
  },
  // creator: String,
});

var geoCase = mongoose.model("geoCase", geoCaseSchema);

export default geoCase;
