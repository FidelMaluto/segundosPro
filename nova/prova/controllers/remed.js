import { db } from "../db.js";

// PEGAR TODOS OS MEDICAMENTOS
export const getRemed = async (req, res) => {
    // const consult = db.query('SELECT * FROM medicamentos', (err, result) =>{
    //     if(err){
    //         console.log(err);
    //         return res.status(200).json({message: "Erro ao consuktar o banco!"});
    //     }
    //     return res.status(200).json(result);
    // });

    const consult = 'SELECT * FROM medicamentos';

    db.query(consult, (err, result) => {
        if (err) return res.status(500).json({ message: "Erro ao consultar o banco!" });

        return res.status(200).json(result);
    });
}
//POSTAR/ADICIONAR MEDICAMENTOS
export const addRemed = async (req, res) => {
    const { nome, descricao, preco, quantidade, fornecedor, validade, criado_em } = req.body;

    db.query('INSERT INTO medicamentos(nome, descricao, preco, quantidade, fornecedor, validade, criado_em) VALUES(?,?,?,?,?,?,?)',
        [nome, descricao, preco, quantidade, fornecedor, validade, criado_em], (err, result) => {
            if (err) {
                console.log(err)
                return res.status(500).json({ message: "Erro ao cadastrar medicamentos!" });
            }

            return res.status(201).json({ id: result.insertId, nome, descricao, preco, quantidade, fornecedor, validade, criado_em });
        }
    )
}

//ATUALIZAR MEDICAMENTOS
export const upDateRemed = async (req, res) => {
    const { id } = req.params;
    const { nome, descricao, preco, quantidade, fornecedor, validade, criado_em } = req.body;

    db.query('UPDATE medicamentos SET nome = ?, descricao = ?, preco = ?, quantidade = ?, fornecedor = ?, validade = ?, criado_em = ?',
        [nome, descricao, preco, quantidade, fornecedor, validade, criado_em, id], (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: "Erro ao atualizar!" });
            }

            return res.status(201).json({ id: result.insertId, nome, descricao, preco, quantidade, fornecedor, validade, criado_em });
        });
}

//DELETAR MEDICAMENTOS
export const deleteRmed = async (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM medicamentos WHERE id = ?', [id], (err, result) => {
        if (err) {
            console.log(err);

            return res.status(500).json({ message: "Erro ao deletar!" });
        }

        return res.status(200).json({ message: "Apagado com sucesso." });
    });
}
