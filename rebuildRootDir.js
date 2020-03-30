const fs = require('fs-extra')

//Empties the 'built' folder on each deployment and replaces it with new compilation
//(if 'built' folder doesnt exist, fs.emptyDir() will create it)
async function rebuildBuiltFolder() {
    try {
        await fs.emptyDir('./built')
        console.log('successfuly deleted all contents from "built" folder')
        await fs.copy('./appsscript.json', 'built/appsscript.json')
        console.log('successfuly added appsscript.json to "built" folder')
    } catch (err) {
        console.error('Error building "built" folder ==>" ' + err)
    }
}

rebuildBuiltFolder()
