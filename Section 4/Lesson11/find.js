const users = [{
    name: 'Andrew Mead',
    age: 27
},{
    name: 'George Hudson',
    age: 72
},{
    name: 'Clay Klay',
    age: 45
}]

const user = users.find((user) => user.name === 'George Hudson')
// const user = users.find((user) => user.name === 'Taylor Swift')

if (user === undefined){
    console.log("username is not found");
}
else{
    console.log(user) 
}
