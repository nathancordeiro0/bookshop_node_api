import { author } from "../models/Author.js";

class AuthorController {

    static async get (req, res) {
        try {
            const listOfAuthors = await author.find({});
            res.status(200).json(listOfAuthors);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisição` });
        }
    };

    static async getById (req, res) {
        try {
            const id = req.params.id;
            const findedAuthor = await author.findById(id);
            res.status(200).json(findedAuthor);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisição do autor` });
        }
    };

    static async post (req, res) {
        try {
            const newAuthor = await author.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", author: newAuthor });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao cadastrar o autor` });
        }
        
    };

    static async update (req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Atualizado com sucesso" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao atualizar o autor` });
        }
    };

    static async delete (req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndDelete(id);
            res.status(200).json({ message: "Deletado com sucesso" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao deletar o autor` });
        }
    }

};

export default AuthorController;
