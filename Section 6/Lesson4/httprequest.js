//Referensi :Geeksforgeeks

// const https = require('https');
// const url = 'https://jsonplaceholder.typicode.com/todos/1';
  
// const request = https.request(url, (response) => {
//     let data = '';
//     response.on('data', (chunk) => {
//         data = data + chunk.toString();
//     });
  
//     response.on('end', () => {
//         const body = JSON.parse(data);
//         console.log(body);
//     });
// })
  
// request.on('error', (error) => {
//     console.log('An error', error);
// });
  
// request.end() 

// Dikarenakan url sebelumnya tidak dapat di akses, jadi ganti url
const request = require('request')
const url = 'https://jsonplaceholder.typicode.com/todos/1';
request({ url: url }, (error, response) => {
// Parse the response body from JSON string into JavaScript object
const data = JSON.parse(response.body)
// Will print the current temperature to the console
console.log(data)
})
