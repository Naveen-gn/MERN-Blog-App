import React from 'react'
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import  Home from './Pages/Home'
import  About from './Pages/About'
import  Dashboard from './Pages/Dashboard'
import  Project from './Pages/Projects'
import  Signin from './Pages/Signin'
import  Signup from './Pages/Signup'
import Header from './Components/Header';
import Footer from './Components/Footer'
import PrivateRoute from './Components/PrivateRoute'
import OnlyAdminPrivateRoute from './Components/OnlyAdminPrivateRoute'
import CreatePost from './Pages/CreatePost'
import UpdatePost from './Pages/UpdatePost'
import PostPage from './Pages/PostPage'
import Search from './Pages/Search'
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route element={<PrivateRoute/>} >
      <Route path="/dashboard" element={<Dashboard/>} />
      </Route>
      <Route element={<OnlyAdminPrivateRoute/>} >
      <Route path="/create-post" element={<CreatePost/>} />
      <Route path="/update-post/:postId" element={<UpdatePost/>} />
      </Route>
      <Route path="/search" element={<Search/>} />
      <Route path="/projects" element={<Project/>} />
      <Route path="/post/:postSlug" element={<PostPage/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}
