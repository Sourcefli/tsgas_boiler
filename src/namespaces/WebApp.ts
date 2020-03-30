namespace WebApp {

    export const allData = () => {
        const title = 'Sourcefli Web Services';
        //@ts-ignore
        const sht = Sht.name('IncomingData')
        const allData = sht.getDataRange().getValues()
        let data = {
            data: allData
        };
        return ContentService.createTextOutput(JSON.stringify(data))
            .setMimeType(ContentService.MimeType.JSON);
    };

    // const test_changeEvent = () => {

    // }
}