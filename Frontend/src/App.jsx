import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Add from'./pages/Add/Add'
import List from './pages/List/list'
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar/Navbar'
import { Routes, Route, Link } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
<div className='app'>
<ToastContainer />
<Navbar/>
<hr />
<Routes>
  <Route path="/" element={<List />} />
  <Route path="/add" element={<Add />} />
</Routes>

</div>


  )
};

export default App
