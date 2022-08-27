const fs = require('fs');
const chalk = require('chalk')

const loadNotes = function() {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e){
        return []
    }
}

//List
const listNotes = function(){
    const notes = loadNotes()
    
    console.log(chalk.blue.inverse(" List Notes "));

    notes.forEach((note) => {
        console.log("Title : " + chalk.red(note.title) + " Body : " + chalk.blue(note.body))
    });
}

module.exports = {
    listNotes : listNotes
}