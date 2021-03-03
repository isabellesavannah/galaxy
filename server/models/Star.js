import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId


const Star = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    galaxyId: {type: ObjectId, required:true, ref:"Galaxy"}
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Star;