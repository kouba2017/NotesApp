// import mongoose to build a model
const mongoose = require("mongoose")

// the schema - the rules the entries in the DB must follow
const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title must be present"],
        minlength: [3, "title must be at least 3 chars long"]
    },
    content: {
        type: String,
        required: [true, "content must be present"],
    },
    isImportant :{
        type: Boolean,
        default: false
    }
    
}, {timestamps: true})


module.exports = mongoose.model("Note", NoteSchema)

