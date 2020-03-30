namespace Http {
    export const config = (url: string, params: Object = {}) => {
        const paramString: string = Object.keys(params)
            .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
            .join('&');
        return url + (url.indexOf('?') >= 0 ? '&' : '?') + paramString;
    };

    export const get = (apiUrl: string, params: Object, accessToken: string) => {
        const url: string = config(apiUrl, params);
        const response: any = UrlFetchApp.fetch(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            muteHttpExceptions: true,
        });
        return JSON.parse(response);
    };
}