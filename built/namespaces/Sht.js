var Sht;
(function (Sht) {
    /*
    * Get an instance of the desired Sheet
    * {param} string name of the desired sheet
    * {return} Sheet
    */
    Sht.name = function (sheetName) {
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
})(Sht || (Sht = {}));
