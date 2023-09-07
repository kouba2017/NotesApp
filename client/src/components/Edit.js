import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FormLayout from './FormLayout'
import { useNavigate, useParams ,Link} from 'react-router-dom'
import Logout from './Logout'



const Edit = (props) => {
    const {id}=useParams()
    const nav=useNavigate()
    const [newNote,setNewNote]=useState({title:"",content:"", isImportant:false})
    useEffect(()=>{
        axios.get(`http://localhost:7000/api/note/${id}`)
            .then(res=>{
                setNewNote({title:res.data.title,content:res.data.content,isImportant:res.data.isImportant})
                console.log(res.data);
            })
            .catch(err=>console.log(err))
    },[id])
    const editNote=()=>{
        axios.put(`http://localhost:7000/api/note/${id}`,newNote)
            .then(res=>{
                console.log(res.data);
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
            <FormLayout functionToInclude={editNote} note={newNote} setNote={setNewNote} />
        </div>
    )
}

export default Edit