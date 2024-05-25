/* eslint-disable no-mixed-spaces-and-tabs */
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MovieList from './components/MovieList'
import SideBar from './components/SideBar'
import { MovieContext, ThemeContext } from './context'

function App() {
const [cartValue, setcartValue] = useState([]);
const [darkMode, setDarkMode]= useState(false);
  return (
    <>
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
    <MovieContext.Provider value={{cartValue,setcartValue}}>
    
      <div className={`h-full w-full ${darkMode?"dark":""}`}>
      <Header/>
      <main>
		      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <SideBar/>
            <MovieList/>
            
          </div>
      </main>
      <ToastContainer/>
      <Footer/>
      </div>
      
      </MovieContext.Provider>
      </ThemeContext.Provider>
      
    </>
  )
}

export default App
