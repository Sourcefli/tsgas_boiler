namespace WebApp {
    const doGet = (request) => {
        const title = 'Sourcefli Web Services';
        const sht = Sht.idx(0)
        const allData = sht.getDataRegion().getValues()
        let data = {
            data: allData
        };
        return ContentService.createTextOutput(JSON.stringify(result))
            .setMimeType(ContentService.MimeType.JSON);
    };
}