import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import format from 'date-fns/format'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'
import DisplayOne from '../views/DisplayOne'

const AllNotes = (props) => {
    const {noteList,setNoteList}=props

    useEffect(()=>{
        axios.get('http://localhost:7000/api/notes')
            .then(res=>{
                console.log(res.data);
                setNoteList(res.data)
            })
            .catch(err=>console.log(err))
    },[])
    const removeFromDom=(id)=>{
        setNoteList(noteList.filter(note=>note._id !== id))}
    const deleteNote=(id)=>{
        axios.delete(`http://localhost:7000/api/note/${id}`)
            .then((res)=>{
                removeFromDom(id)
            })
            .catch(err=>console.log(err))

    }

    return (
        <div>
            
            {
                noteList.map((note,index)=>{
                    const date=note.createdAt
                    return(
                    <Card  style={{ margin:'20px',padding:'10px',backgroundColor:"rgb(213,193,128)",alignItems:'center',borderStyle:'solid',borderColor:'rgb(217,212,211)'}} key={index}>
                        <Card.Body>
                            <Card.Title><Link style={{textDecorationLine:'none',fontSize:'larger',fontWeight:'bold'}} to={`/note/${note._id}`}  >{note.isImportant ? "📌" : ""}{note.title}</Link></Card.Title>
                            <Card.Text>
                                {note.content}
                            </Card.Text>
                            <Card.Footer className="mb-2 text-muted">{format(new Date(date),'dd/MM/yyyy')}</Card.Footer>
                            <Card.Link href={`/edit/${note._id}`} style={{textDecorationLine:'none'}} > <Button  variant='primary' >Edit</Button> </Card.Link>&nbsp;&nbsp;<br/><br/>
                            <Card.Link  style={{textDecorationLine:'none'}} > <Button variant='danger' onClick={()=>deleteNote(note._id)} >Delete</Button> </Card.Link>
                        </Card.Body>
                    </Card>)
                })
            }
        </div>
    )
}

export default AllNotes