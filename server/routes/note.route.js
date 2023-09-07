const NoteController=require('../controllers/note.controller')

module.exports=app=>{
    app.get('/api/notes',NoteController.readAllNotes)
    app.post('/api/note',NoteController.createNote)
    app.get('/api/note/:id',NoteController.readOneNote)
    app.put('/api/note/:id',NoteController.updateNote)
    app.delete('/api/note/:id',NoteController.deleteNote)
}