import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Profile from './pages/Profile/Profile.tsx'
import Contacts from './pages/Contacts/Contacts.tsx'
import { Provider } from 'react-redux'
import { store, fetchUsers } from './store/store.ts'

store.dispatch(fetchUsers())

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/account",
    element: <Profile />
  },
  {
    path: "/contacts",
    element: <Contacts />
  },

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
      </RouterProvider>
    </Provider>
  </StrictMode>,
)
