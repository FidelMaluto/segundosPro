import { db } from "../db.js";

// PEGANDO TODOS OS USUÁRIOS
export const getUsers = (_, res) =>{
    const q = "SELECT * FROM usuario";

    db.query(q, (err, data) =>{
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
}
// ADICIONANDO NOVO USUÁRIO
export const addUser = async (req, res) =>{
    const { nome, email, fone, dataNascimento } = req.body;

     db.query('INSERT INTO usuario(nome, email, fone, dataNascimento) VALUES(?, ?, ?, ?)', [nome, email, fone, dataNascimento], 
        (err, result) =>{
            if(err){
                console.error(err);
                return res.status(500).json({message: "Erro ao criar usuário."});
            }
            res.status(201).json({id: result.insertId, nome, email, fone, dataNascimento});
        });
    
}

// ATUALIZAR/EDITAR UM USUÁRIO
export const upDateUser = async (req, res) =>{
    const { id } = req.params;
    const { nome, email, fone, dataNascimento } = req.body;

    db.query('UPDATE usuario SET nome = ?, email = ?, fone = ?, dataNascimento = ? WHERE id = ?', [nome, email, fone, dataNascimento, id], (err, result) =>{
        if(err){
            console.error(err);
            return res.status(500).json({message: "Erro ao atualizar!"});
        }
        res.status(201).json({id: result.insertId, nome, email, fone, dataNascimento})
    });
}

// DELETANDO UM USUÁRIO
export const deleteUser = async (req, res) =>{
    const { id } = req.params;

    db.query('DELETE FROM usuario WHERE id = ?', [id], (err, result) =>{
        if(err){
            console.error(err);
            return res.status(500).json({message: "Erro ao deletar!"});
        }
        res.status(201).json({message: "Deletado com sucesso."});
    })
}
