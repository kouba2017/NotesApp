import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login_Register from './views/Login_Register';
import DisplayAll from './views/DisplayAll';
import Create from './components/Create';
import React,{useState} from 'react';
import Edit from './components/Edit';
import DisplayOne from './views/DisplayOne';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [noteList,setNoteList]=useState([])
  return (
    <div className="App">
      <Routes>
        <Route  element={<Login_Register/>} path='/' />
        <Route element={<DisplayAll/>} path='/notes' />
        <Route element={<Create noteList={noteList} setNoteList={setNoteList}/>} path='/create' />
        <Route element={<Edit noteList={noteList} setNoteList={setNoteList}/>} path='/edit/:id' />
        <Route element={<DisplayOne />} path='/note/:id' />


      </Routes>
    </div>
  );
}

export default App;
