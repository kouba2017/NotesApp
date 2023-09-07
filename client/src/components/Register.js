import axios from 'axios'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'


const Register = () => {
    const [newUser,setNewUser]=useState({firstName:"",lastName:"", email:"", password:"",confirmPassword:""})
    const [errArr,setErrArr]=useState([])
    const nav=useNavigate()
    const onRegistration=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:7000/api/user/register',newUser,{withCredentials:true})
            .then(res=>{
                console.log(res.data);
                setNewUser({firstName:"",lastName:"", email:"", password:"",confirmPassword:""})
                console.log("successful registration bravooo");
                nav('/notes')
            })
            .catch(err=>{
                console.log(err.response.data.error.errors);
                //const errorsArr=err.response.data.error.errors.message
                //console.log(errorsArr);
                for (let key in err.response.data.error.errors){
                    errArr([...errArr,err.response.data.error.errors[key].message])
                }
                console.log(errArr)
            })
    }
    return (
    <div className='form-style'>
        <h1>Register</h1>
        <form onSubmit={onRegistration} >
                    
                    <p>
                        <label>First Name:</label><br/>
                        <input type="text" name='firstName' onChange={e=>setNewUser({...newUser,firstName:e.target.value})} value={newUser.firstName}  />
                    </p><br/>
                    <p>
                        <label>Last Name:</label><br/>
                        <input type="text" name='lastName' onChange={e=>setNewUser({...newUser,lastName:e.target.value})} value={newUser.lastName}  />
                    </p><br/>
                    <p>
                        <label>Email:</label><br/>
                        <input type="email" name='email' onChange={e=>setNewUser({...newUser,email:e.target.value})} value={newUser.email}  />
                    </p><br/>
                    <p>
                        <label>Password:</label><br/>
                        <input type="password" name='password' onChange={e=>setNewUser({...newUser,password:e.target.value})} value={newUser.password} />
                    </p><br/>
                    <p>
                        <label>Confirm Password:</label><br/>
                        <input type="password" name='confirmPassword' onChange={e=>setNewUser({...newUser,confirmPassword:e.target.value})} value={newUser.confirmPassword}  />
                    </p><br/>
                    {errArr.map(
                    (err,index)=>{
                        return(
                            <p style={{color:'red'}} key={index}>{err}</p>
                        )
                    }
                )}<br/>
                    <button type="submit" style={{
                        backgroundColor: 'rgb(23,162,184)',
                        color: '#ffffff',
                        fontSize: '20px',
                        width: '150px',
                        height: '40px',
                        border:' 3px solid black',
                        boxShadow: '2px 4px rgb(0, 0, 0)',
                        marginLeft: '10px'
                    }} >Register</button>
                </form>
                
    </div>
    )
}

export default Register