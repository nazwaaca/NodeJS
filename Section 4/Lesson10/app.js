const yargs = require('yargs');
const notes = require('./app2.js');

//List
yargs.command({
    command : 'list',
    describe: "Listing a Note",
    handler: function(argv){
        notes.listNotes();		
    }
})


yargs.parse();

