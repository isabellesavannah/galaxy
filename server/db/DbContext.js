import GalaxySchema from "../models/Galaxy";
import StarSchema from "../models/Star";
import mongoose from "mongoose";

class DbContext {
  //Values = mongoose.model("Value", ValueSchema);
  Galaxies = mongoose.model("Galaxy", GalaxySchema)
  Stars = mongoose.model("Star", StarSchema)

}

export const dbContext = new DbContext();
