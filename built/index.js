//Test 123
var testing = function () {
    var sht = sheet('IncomingData');
    var headers = sht.getRange('A1:N1').getValues()[0];
    var allData = sht.getDataRange().getValues();
    Logger.log(headers);
    Logger.log(allData);
};
// {
//     "compilerOptions": {
//         "outDir": "./built",
//         "noImplicitAny": true,
//         "strictNullChecks": true,
//         "noImplicitThis": true,
//         "noEmitOnError": true,
//         "target": "ES3",
//         "lib": [
//             "ES2016",
//             "esnext"
//         ],
//         "experimentalDecorators": true
//     },
//     "include": [
//         "./src/**/*"
//     ]
// }
