import { useState } from 'react'
import './App.css'

const BACKEND_URL = 'http://localhost:8000';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit() {
    let res = await fetch(BACKEND_URL + '/api/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
  }

  async function handleDeletion() {
    let res = await fetch(BACKEND_URL + '/api/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
  }

  return (
    <>
      <h1>Home</h1>
      <h2>Create</h2>

      <div>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type='text' />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' />

        <button type='submit' onClick={handleSubmit}>Submit</button>
      </div>

      <div>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type='text' />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' />
        <button type='deletion' onClick={handleDeletion}>Delete</button>
      </div>

      <h2>Data</h2>
      <p>Username: {username}</p>
      <p>Password: {password}</p>
    </>
  )
}

export default App
