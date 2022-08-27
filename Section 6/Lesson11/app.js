const cat = require('./abstraction.js')

const printCat = () => {
    cat((data) => {
        // console.log('Error', error)
        console.log(data);
        })
}

module.exports = printCat;
