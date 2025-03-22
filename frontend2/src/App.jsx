import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import Home from '../dummycall'
import Dashboard from './pages/Dashboard'
import Kanban from './pages/Kanban'
export default function App() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      
      </SignedOut>
      <SignedIn>
        <UserButton />
        {/* <Home/> */}
        {/* <Dashboard/> */}
        <Kanban/>

      </SignedIn>
    </header>
  )
}