import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ExplorePage from './pages/ExplorePage'
import ReelPage from './pages/ReelPage'
import MessagePage from './pages/MessagePage'
import ProfilePage from './pages/ProfilePage'
import SignupPage from './pages/SignupPage'
import CreateBar from './components/CreateBar'

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/explore', element: <ExplorePage /> },
      { path: 'reels', element: <ReelPage /> },
      { path: '/inbox', element: <MessagePage /> },
      { path: '/profile', element: <ProfilePage /> },
      {path: '/create', element: <CreateBar />}
    ]
  },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignupPage /> },

])

function App() {

  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  )
}

export default App
