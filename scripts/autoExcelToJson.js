// Script para automatizar la conversión de Excel a JSON
const chokidar = require('chokidar');
const path = require('path');
const excelToJson = require('../utils/excelToJson');

const excelPath = path.join(__dirname, '../products.xlsx');
const jsonPath = path.join(__dirname, '../products.json');

function convert() {
  try {
    excelToJson(excelPath, jsonPath);
    console.log('products.json actualizado automáticamente.');
  } catch (err) {
    console.error('Error al convertir Excel:', err);
  }
}

// Vigila cambios en el Excel
chokidar.watch(excelPath).on('change', convert);

// Ejecuta la conversión al iniciar
convert();
