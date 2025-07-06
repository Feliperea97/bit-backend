import { Schema, model } from "mongoose";

const movieSchema = new Schema ({
      movieName: {
        type: String,
      },
      releaseDate: {
        type: Date,
      },
        genre: {
        type: String,
      },
        watched: {
        type: Boolean,
      },
}, {versionKey:false, timestamps:true}
);

export default model("Movie", movieSchema);