import { db } from "../db.js";

// LISTAR TAREFAS 
export const getList = async (req, res) =>{
     db.query('SELECT * FROM listtask', (err, result) =>{
        if(err){
            console.log(err)
            return res.status(500).json({message: "Erro ao consultar tabela!"});
        }
        return res.status(200).json(result);
     })
}

//LISTAR APENAS UMA NOTA
export const getIdList = async(req, res) =>{
    const { id } = req.params;
    db.query('SELECT task FROM listtask WHERE id = ?', [id], (err, result) =>{
        if(err){
            console.log('Nota não encontrada.!');
            return res.status(404).json({message: "Nota não encontrada.!"})
        }
        return res.status(200).json(result)
    })
}

// CRIAR TAREFA
export const addList = async (req, res) =>{
    const { task } = req.body;

    db.query('INSERT INTO listtask(task) VALUES(?)', [task], (err, result) =>{
        if(err){
            console.log(err);
            return res.status(500).json({message: "Nota não criada!"})
        }

        return res.status(201).json({id: result.insertId, task})
    });
}
// ATUALIZAR TAREFA
export const upDateList = async (req, res) =>{
    const { id } = req.params;
    const { task } = req.body;

    db.query('UPDATE listtask SET task = ? WHERE id = ?', [task, id], (err, result) =>{
        if(err){
            console.log(err);
            return res.status(500).json({message: "Erro na atualização!"});
        }

        return res.status(201).json({id: result.insertId, task})
    });
}
// DELETAR TAREFA
export const deleteList = async (req, res) =>{
    const { id } = req.params;

    db.query('Delete FROM listtask WHERE id = ?', [id], (err, result) =>{
        if(err){
            console.log(err);
            return res.status(500).json("Erro ao deletar Nota!");
        }

        return res.status(200).json({message: "Nota deletada com sucesso."});
    });
}
