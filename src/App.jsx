import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'

function App() {

  const [updateInfo, setUpdateInfo] = useState()

  const [isCloseForm, setIsCloseForm] = useState(true)

  

  const baseUrl = 'https://user-crud-abac.onrender.com/api/v1'


  const [
  users,
  getAllUser,
  createNewUser,
  deleteUserById,
  updatedUserById
  ] = useFetch(baseUrl)

  

  useEffect(() => {
    getAllUser('/users')
    
  }, [])

  const handleOpenForm = () => {
    setIsCloseForm(false)

  }
  
  

  return (
    <div className='container'>
      <h1>Users</h1>
      <button className='button' onClick={handleOpenForm} >
        <h2>
          ➕Create New User
        </h2>
        </button> 
      <div className={`form_container ${isCloseForm && 'form_close'}`}>
        <FormUsers
      createNewUser={createNewUser}
      updateInfo={updateInfo}
      updatedUserById={updatedUserById}
      setUpdateInfo={setUpdateInfo}
      setIsCloseForm={setIsCloseForm}
      
      />
      </div>

      <div>
        {
          users?.map(user => (
              <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              setIsCloseForm={setIsCloseForm}
              />
          ))
        }
      </div>

      
    </div>
  )
}

export default App
