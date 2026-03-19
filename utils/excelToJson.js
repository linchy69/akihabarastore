// Utilidad para convertir Excel a JSON
const xlsx = require('xlsx');
const fs = require('fs');

function excelToJson(excelPath, outputPath) {
  const workbook = xlsx.readFile(excelPath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(sheet);
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
}

// Uso: excelToJson('products.xlsx', 'products.json');

module.exports = excelToJson;
