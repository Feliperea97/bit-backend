import { Router } from "express"
import MoviesController from "../controllers/movies.js";

const moviesRouter = Router();

moviesRouter.post("/", MoviesController.create)
moviesRouter.get("/", MoviesController.readAll)
moviesRouter.get("/:id", MoviesController.readOne)
moviesRouter.put("/:id", MoviesController.update)
moviesRouter.delete("/:id", MoviesController.delete)

export default moviesRouter;