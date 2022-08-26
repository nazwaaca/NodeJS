const { demandOption } = require('yargs')
const yargs = require('yargs')
const notes = require('./AddingNote.js')
yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, 
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handle: function (argv){
        notes.addNote(argv.title, argv.body)
    }
}
)
console.log(yargs.argv)