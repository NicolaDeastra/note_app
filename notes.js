const fs = require('fs')
const consola = require('consola')

const getNotes = () => {
  return "Odading mang oleh rasanya seperti anda menjadi iron men"
}


const addNote = (title, body) => {
  const notes = loadNote()
  
  const duplicateNotes = notes.filter( note => note.title === title )

  if(duplicateNotes.length === 0) {
    notes.push({title, body})

    saveNote(notes)
    
    consola.success('success add note')

  } else{
    consola.info('Note title already on notes')
  }

}


const saveNote = (notes) => {
  const notesJSON = JSON.stringify(notes)

  fs.writeFileSync('note.json', notesJSON)
}

const loadNote = () => {
  try{
    const dataBuffer = fs.readFileSync('note.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)

  } catch(e){
    return []
  }
}

const removeNote = (title) => {
  const notes = loadNote()

  const deleteNote = notes.filter( note => note.title !== title )

  if(notes.length === deleteNote.length){
   
    consola.info('note already delete or note note found')

  }else{
    saveNote(deleteNote)
    consola.success('note success to delete')
  }
} 

module.exports = { getNotes, addNote, removeNote}