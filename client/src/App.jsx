import React from 'react'
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import  Home from './pages/Home'
import  About from './pages/About'
import  Dashboard from './pages/Dashboard'
import  Project from './pages/Project'
import  Signin from './pages/Signin'
import  Signup from './pages/Signup'
import Header from './Components/Header';
import Footer from './Components/Footer'
import PrivateRoute from './Components/PrivateRoute'
import OnlyAdminPrivateRoute from './Components/OnlyAdminPrivateRoute'
import CreatePost from './Pages/CreatePost'
import UpdatePost from './Pages/UpdatePost'
import PostPage from './Pages/PostPage'
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

      <Route path="/project" element={<Project/>} />
      <Route path="/post/:postSlug" element={<PostPage/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}
