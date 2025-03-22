import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import Home from '../dummycall'
import Dashboard from './pages/Dashboard'
export default function App() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      
      </SignedOut>
      <SignedIn>
        <UserButton />
        {/* <Home/> */}
        <Dashboard/>

      </SignedIn>
    </header>
  )
}