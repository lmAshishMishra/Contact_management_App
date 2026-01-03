// import React from 'react'
// import './App.css'
// import Add from './pages/Add/Add'
// import List from './pages/List/list' // Ensure the 'L' matches your filename
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import Navbar from './components/Navbar/Navbar'
// import { Routes, Route } from 'react-router-dom'

// function App() {
//   return (
//     <div className='app-container'>
//       <ToastContainer />
//       <Navbar />
//       <hr />
//       <div className='content-area'>
//         <Routes>
//           <Route path="/" element={<List />} />
//           <Route path="/add" element={<Add />} />
//         </Routes>
//       </div>
//     </div>
//   )
// }

// export default App;
import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Add from './pages/Add/Add'
import List from './pages/List/list'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className='app'>
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar />
      
      <div className='main-container'>
        <Routes>
          {/* Main Dashboard: Splits the screen into two halves */}
          <Route path="/" element={
            <div className='dashboard-grid'>
              <div className='form-container'>
                <Add />
              </div>
              <div className='list-container'>
                <List />
              </div>
            </div>
          } />
          
          {/* Fallback routes for specific navigation */}
          <Route path="/add" element={<div className='single-view'><Add /></div>} />
          <Route path="/list" element={<div className='single-view'><List /></div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App;