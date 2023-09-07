import axios from 'axios'
import React, { useState } from 'react'
import FormLayout from './FormLayout'
import { Link } from 'react-router-dom'
import Logout from './Logout'


const Create = (props) => {
    // const [title,setTitle]=useState('')
    // const [content,setContent]=useState('')
    const [newNote,setNewNote]=useState({title:"",content:"", isImportant:false})
    //const [important,setImportant]=useState(false)
    const {noteList,setNoteList}=props
    const createNote=()=>{
        axios.post('http://localhost:7000/api/note',newNote)
            .then(res=>{
                console.log(res.data);
                setNoteList([...noteList,res.data])
                setNewNote({title:"",content:"", isImportant:false})
            })
            .catch(err=>console.log(err))
    }
    return (
        <div>
            <legend  >
                <div  style={{display:'flex'}}><  Logout  /></div>
                <h3>Notes</h3>
            </legend> 
            <Link  to={'/notes'} >Home </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link  to={'/create'} >Create</Link>
            <br/><br/><br/><br/>
            <FormLayout functionToInclude={createNote} setNote={setNewNote} note={newNote} />
            
        </div>
    )
}

export default Create