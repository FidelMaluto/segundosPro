import express, { json } from "express";
import { createConnection } from "mysql";
const app = express();

app.use(json());

const connection = createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Angola@123',
    database: 'login'
});

connection.connect((err) =>{
    if(err){
        console.log('Erro ao conectar ao banco!', err);
        return;
    }
    console.log('Conectado ao banco com sucesso!')
});

app.post('/login', (req, res) =>{
    const { username, password } = req.body;
    // AUTENTICAÇÃO DA TABELA
    connection.query('SELECT * FROM login WHERE username = ? AND password = ?', [username, password], (err , results) =>{
        if(err){
            console.error('Erro ao executar consulta:', err);
            res.status(500).json({success: false });
        }else if(results.length > 0){
            res.json({success: true });
        }else{
            res.json({success: false });
        }
    });
});

app.get('/usuarios', (req, res) =>{
    return res.json(connection);
})

app.get('/dashboard', (req, res) =>{
    res.send('Bem-Vindo ao dashboard!');
});

app.listen(8000, ()=>{
    console.log('Servidor rodando na porta 8000');
});
