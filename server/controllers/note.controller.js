const Note=require('../models/note.model')





    // READ ALL
    module.exports.readAllNotes= (req, res) => {
            Note.find({})
                .then(allNotes=>{
                    res.json(allNotes);
                })
                .catch(err=>console.log(err))
    }
    
    // CREATE
    module.exports.createNote= (req, res) => {
            console.log(req.body);
            Note.create(req.body)
                .then(newNote => {
                    console.log("CREATED SUCCESSFULLY")
                    res.json(newNote)
                })
                .catch(err => {
                    console.log("SERVER ERROR")
                    res.json(err)
                })
    }
        // READ ONE
    module.exports.readOneNote= (req, res) => {
            Note.findById({_id:req.params.id})
                .then(oneNote => res.json(oneNote))
                .catch(err => res.json(err))
    }
    
        // UPDATE
    module.exports.updateNote= (req, res) => {
            Note.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
                .then(updatedNote => res.json(updatedNote))
                .catch(err => res.json(err))
    }
        
        // DELETE
    module.exports.deleteNote=(req, res) => {
            Note.findByIdAndDelete({_id:req.params.id})
                .then(result => {
                    res.json(result)
                    console.log("deleted Successfully");
                })
                .catch(err => res.json(err))
    }
