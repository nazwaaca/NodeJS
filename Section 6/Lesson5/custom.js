const request = require('request');
const url = 'https://jsonplaceholder.typicode.com/todos/1';
request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    if (data.complete === false){
        data.complete = 'Unfinished';
    }
    else{
        data.complete = 'finish';
    }
    console.log(data.id + '. \tUser Id : ' + data.userId + '\n\tName of Current book : ' + data.title + '\n\tStatus : ' + data.complete)
})