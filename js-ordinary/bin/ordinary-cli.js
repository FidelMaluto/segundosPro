import { lintFiles }  from'../lib/lint.js';
import { captureRuntimeErrors }  from'../lib/runtime.js';
import inquirer  from'inquirer';
import chalk  from'chalk';

captureRuntimeErrors() // Ativando a captura de erros

    (async () => {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'files',
                message: 'Digite os arquivos JS ou pastas para analisar.',
                default: './'
            }
        ]);

        const files = [answers.files];
        const results = lintFiles(files);

        console.log(chalk.green("\nAnálise concluída! "));
        results.forEach(r => {
            console.log(chalk.blue("\nArquivo: ", r.filePath));
            console.log(`Erros: ${r.errorCount}, Avisos: ${r, warningCount}`);
        });

    })();

// console.log('Funcional.');

// setTimeout(() => {
//     throw new Error('Teste de erro não capturado');
// }, 100);