var ss = function (id) {
    var ss = id
        ? SpreadsheetApp.getActiveSpreadsheet()
        : SpreadsheetApp.openById(id);
    return ss;
};
var sheet = function (sheetName) {
    var sht = sheetName
        ? SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
        : SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
    return sht;
};
/*
*
* {param} integer index of the desired sheet
* {return} SpreadsheetApp
*/
var shtIdx = function (sheetIndex) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[sheetIndex];
    return sheet;
};
