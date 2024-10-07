import express from "express";
import connectDatabase from "./config/dbConnect.js";
import book from "./models/Book.js";

const connection = await connectDatabase();

connection.on('error', (error) => {
    console.error('Erro de conexão', error)
});

connection.once('open', () => {
    console.log('Conexão com o banco feita com sucesso')
})

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node');
});

app.get('/livros', async (req, res) => {
    const booksList = await book.find({});
    res.status(200).json(booksList);
});

app.get('/livros/:id', (req, res) => {
    let index = searchBook(req.params.id);
    res.json(books[index]);
});

app.post('/livros', (req, res) => {
    books.push(req.body);
    res.status(201).send('O livro foi cadastrado com sucesso');
});

app.put('/livros/:id', (req, res) => {
    let index = searchBook(req.params.id);
    books[index].titulo = req.body.titulo;
    res.json(books)
});

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = searchBook(id);
    books.splice(index, 1);
    res.send(`Livro ${id} removido com sucesso`);
});

export default app