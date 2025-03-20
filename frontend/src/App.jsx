import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import Home from '../dummycall'

export default function App() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
        <Home/>
      </SignedIn>
    </header>
  )
}