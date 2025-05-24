const fs = require('fs');
const path = require('path');
// const path = require('path')

const fsPromises = require('fs').promises

const fileOps = async () => {

    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'TextFolder', 'sample.txt'))

        console.log(data.toString())
    }
    catch (err) {
        console.error(err)
    }
}

fileOps()

// fs.readFile(path.join(__dirname, 'TextFolder', 'sample.txt'), (reject, resolve) => {

//     if (reject) throw rejct;

//     console.log(resolve.toString())

// })