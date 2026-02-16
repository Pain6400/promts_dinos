const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const filePath = "c:\\Users\\Kevin Mejia\\Documents\\GitHub\\promts_dinos\\plantilla_dinosaurios_100.xlsx";
try {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0]; // Just take first sheet if "carrusel" fails, but let's try to be safe
    // The previous script used 'carrusel', so let's try that or fallback
    const worksheet = workbook.Sheets['carrusel'] || workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(worksheet);

    fs.writeFileSync("temp_ideas.json", JSON.stringify(data, null, 2));
    console.log("Done writing temp_ideas.json");
} catch (e) {
    console.error(e);
}
