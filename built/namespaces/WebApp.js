var WebApp;
(function (WebApp) {
    var doGet = function (request) {
        var title = 'Sourcefli Web Services';
        var sht = Sht.idx(0);
        var allData = sht.getDataRegion().getValues();
        var data = {
            data: allData
        };
        return ContentService.createTextOutput(JSON.stringify(result))
            .setMimeType(ContentService.MimeType.JSON);
    };
})(WebApp || (WebApp = {}));
