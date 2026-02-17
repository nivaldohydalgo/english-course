const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// ===============================
// CONFIGURAÇÕES
// ===============================

const INPUT_FILE = 'input.xlsx';
const OUTPUT_DIR = 'output';
const QT_DAYS = 100;

const SELECTED_COLUMNS = [
    'id', 
    'day', 
    'word', 
    'traduction', 
    'level', 
    'class', 
    'observation', 
    'example', 
    'sound'
]; 

// ===============================

function ensureOutputDirectory() {
    const dirPath = path.join(__dirname, OUTPUT_DIR);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }
}

function filterColumns(data, selectedColumns) {
    if (!selectedColumns || selectedColumns.length === 0) {
        return data;
    }

    return data.map(row => {
        const filteredRow = {};
        selectedColumns.forEach(col => {
            filteredRow[col] = row[col] ?? null;
        });
        return filteredRow;
    });
}

function splitIntoChunks(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < QT_DAYS; i += 1) {
        chunks.push(array.filter(row => row.day == (i + 1)));
    }
    return chunks;
}

function main() {
    try {
        console.log('📖 Lendo planilha...');

        const workbook = XLSX.readFile(path.join(__dirname, INPUT_FILE));
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        const jsonData = XLSX.utils.sheet_to_json(worksheet, {
            defval: null
        });

        console.log(`✅ Total de linhas lidas: ${jsonData.length}`);

        // Filtrar colunas
        const filteredData = filterColumns(jsonData, SELECTED_COLUMNS);

        // Dividir por dias
        const chunks = splitIntoChunks(filteredData);

        ensureOutputDirectory();

        // Gerar arquivos
        chunks.forEach((chunk, index) => {

            const fileNumber = String(index + 1);
            const outputFilePath = path.join(
                __dirname,
                OUTPUT_DIR,
                `day_${fileNumber}.json`
            );

            fs.writeFileSync(
                outputFilePath,
                JSON.stringify(chunk, null, 2),
                'utf8'
            );

            console.log(`📄 Gerado: output_${fileNumber}.json`);
        });

        console.log('\n🎉 Processo concluído com sucesso!');
        console.log(`📦 Total de arquivos gerados: ${chunks.length}`);

    } catch (error) {
        console.error('❌ Erro:', error.message);
    }
}

main();
