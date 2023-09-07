import React, { useState } from 'react'
import AllNotes from '../components/AllNotes'
import { Link } from 'react-router-dom'
import Logout from '../components/Logout'



const DisplayAll = () => {
    const [noteList,setNoteList]=useState([])

    return (
        <div>
        <legend  >
            
            <div  style={{display:'flex'}}><  Logout  /></div>
            <h3>Notes</h3>
        </legend>    
        <Link  to={'/notes'} >Home </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link  to={'/create'} >Create</Link>
        <br/><br/><br/><br/>
        <fieldset style={{display:'flex',justifyContent:'center'}}>
            <AllNotes noteList={noteList} setNoteList={setNoteList} />
        </fieldset>
            
        </div>
    )
}

export default DisplayAll