import express from "express";
import AuthorController from "../controllers/authorController.js";

const routes = express.Router();

routes.get('/autores', AuthorController.get);
routes.get('/autores/:id', AuthorController.getById);
routes.post('/autores', AuthorController.post);
routes.put('/autores/:id', AuthorController.update);
routes.delete('/autores/:id', AuthorController.delete);

export default routes;
