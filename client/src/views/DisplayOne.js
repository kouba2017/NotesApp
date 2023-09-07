import React, { useState ,useEffect} from 'react'
import format from 'date-fns/format'
import Card from 'react-bootstrap/Card'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const DisplayOne = (props) => {
    const {id}=useParams()
    const [note,setNote]=useState({})
    useEffect(()=>{
        axios.get(`http://localhost:7000/api/note/${id}`)
            .then(res=>{
                console.log(res.data);
                setNote(res.data)
            })
            .catch(err=>console.log(err))
    },[id])
    const date=note.createdAt


    return (
        <div >
            <legend >
                <br/><br/>
                <Link  to={'/notes'} >Home </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link  to={'/create'} >Create</Link>
                <br/><br/><br/><br/>
            </legend>
            <div style={{display:'flex',justifyContent:'center'}}> 
            <Card style={{ margin:'20px',padding:'10px',backgroundColor:"rgb(213,193,128)",alignItems:'center',borderStyle:'solid',borderColor:'rgb(217,212,211)'}} >
                <Card.Body>
                    <Card.Title> {note.isImportant ? "📌" : ""}{note.title} </Card.Title>
                    <Card.Text>
                        {note.content}
                    </Card.Text>
                    <Card.Footer className="mb-2 text-muted">{format(new Date(date),'dd/MM/yyyy')}</Card.Footer>
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default DisplayOne