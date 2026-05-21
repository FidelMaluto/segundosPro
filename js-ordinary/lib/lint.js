import { CLIEngine } from 'eslint';

function lintFiles(files) {
    const cli = new CLIEngine({ fix: true }); // Habilitando correção automática
    const report = cli.executeOnFiles(files);
    CLIEngine.outputFixes(report); // Aplicando correções

    return report.results;
}

module.exports = { lintFiles };
