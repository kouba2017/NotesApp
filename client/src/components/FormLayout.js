import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';


const FormLayout = (props) => {
    const nav=useNavigate()
    const {functionToInclude,note,setNote}=props
    const onSubmitHandler=(e)=>{
        e.preventDefault()
        functionToInclude()
        nav('/notes')
    }
    return (
        <div>
            <Form onSubmit={onSubmitHandler} className='form-style'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title: </Form.Label>
                    <Form.Control type="text" as="input" value={note.title} onChange={e=>setNote({...note,title:e.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Content: </Form.Label>
                    <Form.Control as="textarea" rows={3} value={note.content} onChange={e=>setNote({...note,content:e.target.value})} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Important: </Form.Label>
                    <Form.Check  type={'checkbox'} onChange={()=>setNote({...note,isImportant:!(note.isImportant)})}/>
                </Form.Group>
                <Button type='submit' variant='primary' >Submit</Button>
            </Form>
        </div>
    )
}

export default FormLayout