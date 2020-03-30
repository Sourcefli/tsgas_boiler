var SS;
(function (SS) {
    /*
    * Get an instance of the desired Spreadsheet
    * {param} string [optional] int id of the desired Spreadsheet
    * {param} string [optional] url id of the desired Spreadsheet
    * {return} Sheet
    */
    SS.init = function (id, url) {
        var ss = (id && !url) ?
            SpreadsheetApp.openById(id) :
            (!id && url) ?
                SpreadsheetApp.openByUrl(url) :
                SpreadsheetApp.getActiveSpreadsheet();
        return ss;
    };
})(SS || (SS = {}));
var SHT;
(function (SHT) {
    /*
    * Get an instance of the desired Sheet
    * {param} string name of the desired sheet
    * {return} Sheet
    */
    SHT.name = function (sheetName) {
        var sht = sheetName
            ? SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
            : SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
        return sht;
    };
    /*
    *
    * {param} integer index of the desired Sheet
    * {return} SpreadsheetApp
    */
    var idx = function (sheetIndex) {
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[sheetIndex];
        return sheet;
    };
})(SHT || (SHT = {}));
