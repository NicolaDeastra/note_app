const chalk = require('chalk')
const yargs = require('yargs')
const {getNotes, addNote} = require('./notes')


// Create add comment
yargs.command({
     command: 'add',
     describe: 'adding new note',
     builder: {
          title: {
               description: 'Note title',
               demandOption: true,
                type:'string'
          },
          body: {
               description: 'body note',
               demandOption: true,
               type: 'string'
          }
     },   
     handler: function (argv) {
        addNote(argv.title, argv.body)
     }   
})

// Remove comment
yargs.command({
     command: 'remove',
     describe: 'Remove a note',
     handler: () => {
          console.log('remove a note')
     }
})

// List all note comment
yargs.command({
     command: 'list',
     describe: 'list all note',
     handler: () => {
          console.log('all note')
     }
})

// Read note comment
yargs.command({
     command: 'read',
     describe: 'read a note',
     handler: () => {
          console.log('read note');
     }
})

yargs.parse()