const mongoose = require("mongoose");

const ArtistScehma = new mongoose.Schema(
  {
    name: String,
    link:String,
    image:String,
  },
  {
    collection: "Certificates",
  }
);

mongoose.model("Certificates", ArtistScehma);