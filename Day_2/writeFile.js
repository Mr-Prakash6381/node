const fs = require('fs');
const path = require('path')


const dirpath = path.join(__dirname, 'TextFolder');
const filepath = path.join(dirpath, 'sample.txt');

fs.mkdir(dirpath, (err) => {
    if (err) throw err;

    fs.writeFile(filepath, "Welcome to Day of SecondDay", (err) => {
        if (err) throw err;

        console.log("Write Successfully")
    })
})


