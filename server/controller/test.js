const Excel = require('exceljs');
const columns = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8', 'test9', 'test10', 'test11', 'test12'
,'test13', 'test14', 'test15', 'test16', 'test17', 'test18', 'test19', 'test20'];
const fileName = 'test.xlsx';

exports.downloadFiles = (req, res, next) => {
  // 워크시트 생성
  const workbook = new Excel.Workbook();
  const worksheet = workbook.addWorksheet('Sheet1');

  const rows = [];
  //test data 생성
  for (let i = 0; i < 100; i++) {
    const temp = {};
    for (let j =0; j< columns.length; j++) {
      temp[`test${j + 1}`] = `test${j + 1}`;
    }
    rows.push(temp);
  }
  // 컬럼 세팅
  const columnHeaders = [];
  columns.map((row) => {
    columnHeaders.push({header: row, key: row});
  });
  worksheet.columns = columnHeaders;
  // 로우 세팅
  rows.forEach((data, i) => {
    const row = worksheet.getRow(2 + i);
    Object.keys(data).map((col, j) => {
      row.getCell(j + 1).value = data[col];
    });
  });
  workbook.xlsx.writeFile(`./public/${fileName}`).then(() => {
    res.send(fileName);
  }).catch((err) => {
    console.error(err);
    res.send(err);
  });
};