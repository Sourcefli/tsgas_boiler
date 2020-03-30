namespace Sht {

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
    export const idx = (sheetIndex: number) => {
        let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[sheetIndex]
        return sheet
    }
}