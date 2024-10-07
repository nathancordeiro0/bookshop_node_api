import express from "express";
import BookController from "../controllers/bookController.js";

const routes = express.Router();

routes.get('/livros', BookController.get);
routes.get('/livros/search', BookController.getByPublisher);
routes.get('/livros/:id', BookController.getById);
routes.post('/livros', BookController.post);
routes.put('/livros/:id', BookController.update);
routes.delete('/livros/:id', BookController.delete);

export default routes ;
