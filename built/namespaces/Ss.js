var Ss;
(function (Ss) {
    /*
    * Get an instance of the desired Spreadsheet
    * {param} string [optional] int id of the desired Spreadsheet
    * {param} string [optional] url id of the desired Spreadsheet
    * {return} Sheet
    */
    Ss.init = function (id, url) {
        var ss = (id && !url) ?
            SpreadsheetApp.openById(id) :
            (!id && url) ?
                SpreadsheetApp.openByUrl(url) :
                SpreadsheetApp.getActiveSpreadsheet();
        return ss;
    };
})(Ss || (Ss = {}));
