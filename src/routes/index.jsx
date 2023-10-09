import { Routes, Route, Navigate } from 'react-router-dom'

import { Home, About, Skills, Projects, Contact } from '../pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/skills" element={<Skills />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/contact" element={<Contact />}></Route>

      <Route path="*" element={<Navigate to="/home" />}></Route>
    </Routes>
  )
}
