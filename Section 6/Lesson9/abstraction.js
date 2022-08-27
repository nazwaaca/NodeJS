const request = require('request')
const cat = (callback) => {
const url = 'https://catfact.ninja/breeds'
request({ url: url, json: true }, (error, response) => {
    if (error) {
    callback('Unable to connect to services!')
    } else if (response.body.data.length === 0) {
    callback('Unable to find location. Try another search.')
    } else {
        callback({
        breed: response.body.data[1].breed,
        country: response.body.data[1].country,
        habitat: response.body.data[1].origin
        })
    }
})
}
module.exports = cat;