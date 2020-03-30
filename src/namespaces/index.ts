
namespace SS {
    /*
    * Get an instance of the desired Spreadsheet
    * {param} string [optional] int id of the desired Spreadsheet
    * {param} string [optional] url id of the desired Spreadsheet
    * {return} Sheet
    */
    export const init = (id?: string, url?: string) => {
        let ss =
            (id && !url) ?
                SpreadsheetApp.openById(id) :
                (!id && url) ?
                    SpreadsheetApp.openByUrl(url) :
                    SpreadsheetApp.getActiveSpreadsheet()
        return ss
    }
}

namespace SHT {

    /*
    * Get an instance of the desired Sheet
    * {param} string name of the desired sheet
    * {return} Sheet
    */
    export const name = (sheetName?: string) => {
        let sht = sheetName
            ? SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
            : SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName)
        return sht
    }

    /*
    *
    * {param} integer index of the desired Sheet
    * {return} SpreadsheetApp
    */
    const idx = (sheetIndex: number) => {
        let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[sheetIndex]
        return sheet
    }
}






