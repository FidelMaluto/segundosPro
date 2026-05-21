import dotenv from 'dotenv';
import { sequelize } from './instances/mysql.js';

dotenv.config();

async function main() {
    await sequelize.authenticate()

    try{
        console.log('Conexão feita com sucesso!')
    }catch(err){
        console.error(err);
    }
}
 main();