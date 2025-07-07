import MovieModel from "../models/movie.js"

const MoviesController = {
    create: async (req, res)=> {
 try {
    const {movieName, releaseDate, genre, watched} = req.body;
    const newMovie = new MovieModel({
        movieName,
        releaseDate,
        genre, 
        watched,
    });
    const movieAdded = await newMovie.save();
    res.status(201).json({allOk: true, message: "Movie added successfully", data: movieAdded,})
 } catch (error) {
    res.status(500).json({allOk: false, message: "Error adding movie", data: error.message,})
 }
  },
    readAll: async (req, res)=> {
 try {
    const movies = await MovieModel.find ();
    res.status(200).json({allOk: true, message: "All movies retrieved", data: movies})
 } catch (error) {
    res.status(500).json({allOk: false, message: "Error retrieving movies", data: error.message})
 }
  },
readOne: async (req, res)=> {
 try {
    const {id} = req.params;
    const movie =  await MovieModel.findById(id)
    if (!movie) {
      res.status(404).json({allOk: false, message: `Movie with ID ${id} not found`, data: null});
    }
    res.status(200).json({allOk: true, message: `Movie with ID ${id} retrieved successfully`, data: movie})

 } catch (error) {
    res.status(500).json({allOk: false, message: "Error, cannot retrieve movie", data: error.message})
 }
  },
update: async (req, res)=> {
 try {
    const {id} = req.params;
    const {movieName, releaseDate, genre, watched} = req.body;
    const movieUpdated = await MovieModel.findByIdAndUpdate(id, {movieName, releaseDate, genre, watched})
    if (!movieUpdated) {
      res.status(404).json({allOk: false, message: `Movie with ID ${id} not found`, data: null});
    }
    res.status(200).json({allOk: true, message: `Movie with ID ${id} updated successfully`, data: movieUpdated})
 } catch (error) {
    res.status(500).json({allOk: false, message: "Error updating movie", data: error.message})
 }
  },
    delete: async (req, res)=> {
 try {
   const {id} = req.params;
   const movieDeleted = await MovieModel.findByIdAndDelete(id)
   if (!movieDeleted) {
      res.status(404).json({allOk: false, message: `Movie with ID ${id} not found`, data: null});
    }
    res.status(200).json({allOk: true, message: `Movie with ID ${id} deleted successfully`, data: null})
 } catch (error) {
    res.status(500).json({allOk: false, message: "Error deleting movie", data: error.message})
 }
  },
}

export default MoviesController