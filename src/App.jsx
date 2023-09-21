import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Shared/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Blog from "./Components/Blog"
import Contact from "./Components/Contact"
import Sidebar from "./Components/Shared/Sidebar"
import { useState } from "react"

function App() {
  const [sidebarOpen, setSidebarOpen] = useState('scale-x-0');

  console.log(sidebarOpen);
  return (
    <>
      <div className="w-full">
        <Navbar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen}>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/blog' element={<Blog />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
        </Sidebar>
      </div>
    </>
  )
}

export default App
