//Test 123

const testing = () => {

    let sht = sheet('IncomingData')

    let headers = sht.getRange('A1:N1').getValues()[0]

    let allData = sht.getDataRange().getValues()

    Logger.log(headers)
    Logger.log(allData)
}

// Other compiler options
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
