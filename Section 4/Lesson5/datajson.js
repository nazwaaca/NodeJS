const fs = require ('fs')

const dataBuffer = fs.readFileSync('datajson.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

//Mengubah isi file datajson.json
user.name = 'Abdul'
user.age = 27
user.planet = 'Bumi'

const userJson = JSON.stringify(user)
fs.writeFileSync('datajson.json', userJson)
