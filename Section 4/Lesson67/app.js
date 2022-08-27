const yargs = require('yargs');
const notes = require('./app2.js');

//add
yargs.command({
    command : 'add',
    describe: "Adding a Note",
    builder: {
        title : {
            describe: 'Note Title',
            demandOption: true,
            type : 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type : 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body);		
    }
})

//Remove
yargs.command({
    command : 'remove',
    describe: "Removing a Note",
    builder: {
        title : {
            describe: 'Note Title',
            demandOption: true,
            type : 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title);        
    }
})

yargs.parse();

