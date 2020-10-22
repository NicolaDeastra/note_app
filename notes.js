const fs = require('fs')

const getNotes = () => {
  return "Odading mang oleh rasanya seperti anda menjadi iron men"
}


const addNote = (title, body) => {
  const notes = loadNote()
  
  const duplicateNotes = notes.filter( note => note.title === title )

  if(duplicateNotes.length === 0) {
    notes.push({title, body})

    saveNote(notes)
    
    console.log('success add note')

  } else{
    console.log('Note title already on notes')
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

module.exports = {getNotes, addNote}