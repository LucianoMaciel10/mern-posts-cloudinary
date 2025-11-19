import './App.css'
import { Home, NotFound, PostForm } from './pages'
import { Routes, Route } from 'react-router-dom'
import { PostProvider } from './context/PostContext'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <div className="bg-neutral-900 min-h-screen flex items-center justify-center">
      <div className="px-10 container">
        <PostProvider >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/posts/:id' element={<PostForm />} />
            <Route path='/new' element={<PostForm />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Toaster />
        </PostProvider>
      </div>
    </div>
  )
}

export default App
