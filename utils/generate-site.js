const fs = require('fs');

const writeFile = fileContent => {
    return new Promise ((resolve, reject) => {
        fs.writeFile('.dist/index.html', fileContent, err => {
            // if there is an error, reject the promise and send the error to the .catch() method
            if (err) {
                reject(err);
                //return out of the function to make sure the promsie doesn't accidentally execute the resolve function
                return;
            }
            
            //if everything went well, resolve the promise and send the data to the .then() method
            resolve ({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise ((resolve, reject)=> {
        fs.copyFile('./src/style.css', './dist/syle.css', err => {
            //if there is an error reject the promise and send the error to .catch() method
            if (err) {
                reject (err);
                //return out of the function ot make sure the promise doesnt run the resolve code
                return
            }
            resolve ({
                ok: true,
                message:  'Stylesheet created!'
            })
        })
    })
}