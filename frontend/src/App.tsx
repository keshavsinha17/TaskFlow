import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import { fetchTeams } from './services/taskService';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => {
  // Add dark mode class to the document
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

// Separate component for routes to access auth context
const AppRoutes = () => {
  const { isSignedIn, isLoaded } = useUser();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Once Clerk has loaded, we can stop our loading state
    if (isLoaded) {
      setIsLoading(false);
    }
  }, [isLoaded]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <>
      <header className="border-b p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">TaskFlow</h1>
        <div>
          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            isSignedIn ? (
              <Index />
            ) : (
              <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] gap-6">
                <h1 className="text-3xl font-bold">Welcome to TaskFlow</h1>
                <p className="text-muted-foreground max-w-md text-center">
                  A collaborative task management application for teams. Sign in to get started.
                </p>
                <SignInButton mode="modal">
                  <button className="bg-primary text-white px-4 py-2 rounded-md">
                    Sign In
                  </button>
                </SignInButton>
              </div>
            )
          }
        />
        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={isSignedIn ? <Index /> : <Navigate to="/" replace />}
        />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;