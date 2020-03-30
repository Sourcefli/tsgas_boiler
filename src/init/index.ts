


const ss = (id?: string) => {
    let ss = id
        ? SpreadsheetApp.getActiveSpreadsheet()
        : SpreadsheetApp.openById(id)
    return ss
}


const sheet = (sheetName?: string) => {
    let sht = sheetName
        ? SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
        : SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName)
    return sht
}

/*
*
* {param} integer index of the desired sheet
* {return} SpreadsheetApp
*/
const shtIdx = (sheetIndex: number) => {
    let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[sheetIndex]
    return sheet
}


