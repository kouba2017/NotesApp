import axios from 'axios'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';


const Logout = () => {
    const nav=useNavigate()
    // useEffect(()=>{
    //     axios.get('http://localhost:7000/api/user/logout')
    //         .then(()=>{
    //             nav('/')
    //             console.log("successfully logged out");
    //         })
    //         .catch(err=>console.log(err))
    // })
    const logout=()=>{
        localStorage.removeItem('userToken')
        nav('/')
    }

    return (
        <div>
            {/* <Link to={'/'} onClick={logout} ><Button  variant="secondary">Log out</Button></Link> */}
            <Button onClick={logout} variant='secondary'>Log Out</Button>
        </div>
    )
}

export default Logout