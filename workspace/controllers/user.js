import { db } from "../db.js";

//PEGAR TODOS OS USUÁRIOS CADASTRADO
export const getUsers = async(req, res) =>{
    const consult = 'SELECT * FROM login';

    db.query(consult, (err, result) =>{
        if(err){
            console.log(err);
            return res.status(500).json({message: "Erro ao consultar usuários!"})
        }

        return res.status(200).json(result);
    });
}

//ADICIONANDO USUÁRIOS
export const addUser = async(req, res) =>{
    const { username, password } = req.body;

    db.query('INSERT INTO login(username, password) VALUES(?,?)', [username, password], (err, result) =>{
        if(err){
            console.log(err);
            return res.status(500).json({message: "Erro ao criar usuário!"});
        }
        
        return res.status(201).json({id: result.insertId, username, password});
    });
}

//ATUALIZANDO USUÁRIOS
export const upDateUser = async(req, res) =>{
    const { id } = req.params;
    const { username, password } = req.body;

    db.query('UPDATE login SET username = ?, password = ? WHERE id = ?', [username, password, id], (err, result) =>{
        if(err){
            console.log(err);
            return res.status(500).json({message: "Erro ao atualizar usuário!"});
        }

        return res.status(201).json({id: result.insertId, username, password});
    });
}

//DELETAR USUÁRIOS
export const deleteUser = async(req, res) =>{
    const { id } = req.params;

    db.query('DELETE FROM login WHERE id = ?', [id], (err, result) =>{
        if(err){
            console.log(err);
            return res.status(500).json({message: "Erro ao apagar usuário!"});
        }

        return res.status(200).json({message: "Usuário apagado com sucesso."});
    })
}
