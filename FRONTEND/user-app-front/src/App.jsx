import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AllUsers } from './Components/all-users'
import { CreateUser } from './Components/create-users';
import { getUsersPayload } from './Redux/Features/users-slice';
import { SingleUser } from './Components/single-user';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css'

function App() {
  const users = useSelector((state) => state.users);
  const [singleUser, setSingleUser] = useState({});
  const [updateUI, setUpdateUI] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersPayload())
    setUpdateUI((prevState) => !prevState)
  },[dispatch, updateUI]);

  const clickHandler = async (id) => {
    const res = await axios.get(`http://localhost:3005/api/users/${id}`);
    setSingleUser(res.data)
  } 

  return (
    <div className="app">
      <h1>Create Users Upp</h1>
      <hr />
      <div className='app-row'>
        <Routes>
          <Route path="/" element={<AllUsers users={users} clickHandler={clickHandler} />} />
          <Route path="/:id" element={<SingleUser singleUser={singleUser} />} />
        </Routes>
      <CreateUser />
      </div>
    </div>
  )
}

export default App
