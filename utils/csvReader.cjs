const Excel = require('exceljs');
const path = require('path');

// let filePath = "../Big Data Test1.csv";
let filePath = path.join(__dirname, "../Big Data Test1.csv");

const wb = new Excel.Workbook();

 const readFile = async (filePath) => {
    // wb.csv.readFile(filePath).then(worksheet => {
    const countryData = []
    const worksheet = await wb.csv.readFile(filePath);

    const rowCount = worksheet.actualRowCount;

    for (let i = 1; i <= rowCount; i++) {
        const col = worksheet.getRow(i);

        if (i >= 4) {
            const data = {
                countryName: col.getCell(1).value,
                countryCode: col.getCell(2).value,
                expectancy: [],
                minAge: 1000, // 1000 assuming no age is greater than 1000
                maxAge: 0
            }
            for (let j = 4; j <= col.actualCellCount; j++) {
                const val = col.getCell(j).value;
                if (val < data.minAge) data.minAge = val;
                if (val > data.maxAge) data.maxAge = val;
                data.expectancy.push(col.getCell(j).value)
            }

            countryData.push(data);
        }
    }
    return countryData
}

const getDataFromCsvFile = async () => {
    const countryData = await readFile(filePath);

    console.log('Country Data == ', countryData);
    return countryData;
}

module.exports = { getDataFromCsvFile  }



