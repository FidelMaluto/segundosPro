import chalk from 'chalk';

function captureRuntimeErrors() {
    // Erros não capturados
    process.on('uncaught Exception', (err) => {
        console.log(chalk.red("Erro não capturado: "), err.message);
        console.log(chalk.yellow("Stack trace: "), err.stack);
    });

    // Promises rejeitadas
    process.on("unhandledRejection", (reason, promise) => {
        console.log(chalk.red("Promise rejeitada: "), reason);
    })
}

module.exports = { captureRuntimeErrors };
