import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Cases from "./pages/Cases";
import Events from "./pages/Events";
import OPD from "./pages/OPD";
import Admin from "./pages/Admin";
import Hosting from "./pages/Hosting";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import UsersAdmin from "./pages/UsersAdmin";
import Departments from "./pages/Departments.tsx"
import Separation from "./pages/Separation.tsx"
import OpdAdmin from "./pages/OpdAdmin.tsx"
import OpdPoolPage from "./pages/OpdPoolPage.tsx"

const queryClient = new QueryClient();

export default function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<Projects />} />
              <Route path="/cases" element={<Cases />} />
              <Route path="/cases/:id" element={<Cases />} />
              <Route path="/events" element={<Events />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/opd" element={<OPD />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/hosting" element={<Hosting />} />
              <Route path="/admin/users" element={<UsersAdmin />} />
              <Route path="/admin/departments" element={<Departments />} />
              <Route path="/admin/separation" element={<Separation />} />
              <Route path="/admin/Opd" element={<OpdAdmin />} />
              <Route path="/admin/opd/:id" element={<OpdPoolPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
