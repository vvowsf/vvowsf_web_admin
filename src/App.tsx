import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import User from './pages/User';
import BlogEdit from './pages/BlogEdit';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<User />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blogEdit' element={<BlogEdit />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
