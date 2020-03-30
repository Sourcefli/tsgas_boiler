const fs = require('fs');
const path = require('path');

const directory = 'built';

fs.readdirSync(directory, (err, files) => {
    if (err) throw err;

    for (const file of files) {
        fs.unlink(path.join(directory, file), err => {
            if (err) throw err;
        });
    }
});