var Http;
(function (Http) {
    Http.config = function (url, params) {
        if (params === void 0) { params = {}; }
        var paramString = Object.keys(params)
            .map(function (key) { return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]); })
            .join('&');
        return url + (url.indexOf('?') >= 0 ? '&' : '?') + paramString;
    };
    Http.get = function (apiUrl, params, accessToken) {
        var url = Http.config(apiUrl, params);
        var response = UrlFetchApp.fetch(url, {
            headers: {
                Authorization: "Bearer " + accessToken
            },
            muteHttpExceptions: true
        });
        return JSON.parse(response);
    };
})(Http || (Http = {}));
