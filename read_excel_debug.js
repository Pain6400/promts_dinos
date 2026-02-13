const XLSX = require('./.agent/skills/gestor-ideas/node_modules/xlsx');
const fs = require('fs');
const path = require('path');

try {
    const filePath = "c:\\Users\\Kevin Mejia\\Documents\\GitHub\\promts_dinos\\plantilla_dinosaurios_100.xlsx";
    const workbook = XLSX.readFile(filePath);
    const sheetName = 'carrusel'; // Use 'carrusel' specifically as per manage_ideas.js
    const worksheet = workbook.Sheets[sheetName];
    if (!worksheet) {
        console.error("Sheet 'carrusel' not found!");
        process.exit(1);
    }
    const data = XLSX.utils.sheet_to_json(worksheet);

    fs.writeFileSync('debug_ideas.json', JSON.stringify(data, null, 2));
    console.log('Done writing to debug_ideas.json');
} catch (error) {
    console.error("Error:", error);
}
