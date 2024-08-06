import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import HomePage from '../src/Pages/HomePage';
import MainLayout from '../src/Layouts/MainLayout';
import GalleryPage from '../src/Pages/GalleryPage';
import AboutPage from '../src/Pages/AboutPage';
import ServicesPage from '../src/Pages/ServicesPage'
import ContactPage from './Pages/ContactPage';
import ComingSoonPage from './Pages/ComingSoonPage';


const router = createBrowserRouter (
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
    <Route index element={<HomePage/>}/>
    <Route path='/gallery' element={<GalleryPage/>}/>
    <Route path='/services' element={<ServicesPage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/contact' element={<ContactPage/>}/>
    <Route path='*' element={<ComingSoonPage/>}/>
  </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
