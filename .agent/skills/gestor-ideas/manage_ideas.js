const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const action = args[0];
const filePath = args[1];
const ideaText = args[2]; // Only for 'add'
const dinosText = args[3]; // Optional, only for 'add'

if (!action || !filePath) {
    console.error("Usage: node manage_ideas.js <action> <file_path> [idea] [dinos]");
    process.exit(1);
}

// Ensure absolute path
const absolutePath = path.resolve(filePath);

if (!fs.existsSync(absolutePath)) {
    console.error(`File not found: ${absolutePath}`);
    process.exit(1);
}

const workbook = XLSX.readFile(absolutePath);
const sheetName = 'carrusel';

// Check if sheet exists
if (!workbook.Sheets[sheetName]) {
    // Create sheet
    const headers = [['ID', 'Idea', 'Estado', 'Fecha', 'Dinosaurios']];
    const newWorksheet = XLSX.utils.aoa_to_sheet(headers);
    XLSX.utils.book_append_sheet(workbook, newWorksheet, sheetName);
    XLSX.writeFile(workbook, absolutePath);
    console.log(`Created sheet '${sheetName}' in ${absolutePath}`);
}

const worksheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(worksheet);

if (action === 'list') {
    console.log(JSON.stringify(data, null, 2));
} else if (action === 'add') {
    if (!ideaText) {
        console.error("Missing idea text");
        process.exit(1);
    }
    
    // Check if idea already exists (simple string match)
    const exists = data.some(row => row.Idea && row.Idea.toLowerCase() === ideaText.toLowerCase());
    if (exists) {
        console.log(JSON.stringify({ status: 'exists', message: 'Idea already exists' }));
    } else {
        const newId = data.length + 1;
        const newRow = {
            ID: newId,
            Idea: ideaText,
            Estado: 'Pendiente',
            Fecha: new Date().toISOString().split('T')[0],
            Dinosaurios: dinosText || ''
        };
        
        XLSX.utils.sheet_add_json(worksheet, [newRow], { header: ['ID', 'Idea', 'Estado', 'Fecha', 'Dinosaurios'], skipHeader: true, origin: -1 });
        XLSX.writeFile(workbook, absolutePath);
        console.log(JSON.stringify({ status: 'success', message: 'Idea added', data: newRow }));
    }
} else {
    console.error("Unknown action");
    process.exit(1);
}
