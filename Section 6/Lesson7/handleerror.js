const request = require('request')
const url = 'https://catfact.ninja/breeds'
request({ url: url, json: true }, (error, response) => {
    if (error) {
    console.log('Unable to connect !')
    } else if (response.body.data === 0) {
    console.log('Unable to find the breed. Try another search.')
    } else {
        console.log('Breed of cat : ' + response.body.data[1].breed)
        console.log('Country of cat : '+ response.body.data[1].country)
        console.log('Habitat of cat : '+ response.body.data[1].origin)
        console.log('The Fur of cat : '+ response.body.data[1].coat)
    }
})