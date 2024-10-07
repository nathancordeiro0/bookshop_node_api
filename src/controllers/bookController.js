import book from "../models/Book.js";
import { author } from "../models/Author.js";

class BookController {

    static async get (req, res) {
        try {
            const listOfBooks = await book.find({});
            res.status(200).json(listOfBooks);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisição` });
        }
    };

    static async getById (req, res) {
        try {
            const id = req.params.id;
            const findedBook = await book.findById(id);
            res.status(200).json(findedBook);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisição do livro` });
        }
    };

    static async post (req, res) {
        const newBook = req.body
        try {
            const findedAuthor = await author.findById(newBook.author);
            const completeBook = { ...newBook, author: { ...findedAuthor._doc } }
            const createdBook = await book.create(completeBook)
            res.status(201).json({ message: "Criado com sucesso", book: completeBook });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao cadastrar livro` });
        }
        
    };

    static async update (req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Atualizado com sucesso" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao atualizar livro` });
        }
    };

    static async delete (req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndDelete(id);
            res.status(200).json({ message: "Deletado com sucesso" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao deletar livro` });
        }
    };

    static async getByPublisher (req, res) {
        const publisher = req.query.publisher;
        try {
            const booksByPublisher = await book.find({ publisher: publisher });
            res.status(200).json(booksByPublisher);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao encontrar livros` });
        }
    };

};

export default BookController;
