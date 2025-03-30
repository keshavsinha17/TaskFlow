import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { useAuth } from '@clerk/clerk-react';
import axios from 'axios';
const queryClient = new QueryClient();

const App = () => {
  // Add dark mode class to the document
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const { getToken } = useAuth();
  const [teams, setTeams] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const token = getToken();
        if (!token) {
          throw new Error('No authentication token found');
        }

        const response = await axios.get('http://localhost:3000/api/teams', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.data) {
          const contentType = response.headers['content-type'];
          let errorMessage = 'Failed to fetch teams';
          
          if (contentType && contentType.includes('application/json')) {
            const error = await response.data;
            errorMessage = error.message || errorMessage;
          } else {
            errorMessage = 'Server returned an unexpected response';
          }
          
          throw new Error(errorMessage);
        }

        const data = response.data;
        setTeams(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching teams:', err);
      }
    };

    fetchTeams();
  }, [getToken]);
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;