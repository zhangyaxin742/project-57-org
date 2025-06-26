
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Placeholder routes for future pages */}
          <Route path="/curriculum" element={<div className="pt-16 min-h-screen bg-black text-white flex items-center justify-center"><h1 className="text-4xl">PFin Curriculum - Coming Soon</h1></div>} />
          <Route path="/enterprise" element={<div className="pt-16 min-h-screen bg-black text-white flex items-center justify-center"><h1 className="text-4xl">Youth Enterprise - Coming Soon</h1></div>} />
          <Route path="/advocacy" element={<div className="pt-16 min-h-screen bg-black text-white flex items-center justify-center"><h1 className="text-4xl">Legislative Advocacy - Coming Soon</h1></div>} />
          <Route path="/about" element={<div className="pt-16 min-h-screen bg-black text-white flex items-center justify-center"><h1 className="text-4xl">About - Coming Soon</h1></div>} />
          <Route path="/get-involved" element={<div className="pt-16 min-h-screen bg-black text-white flex items-center justify-center"><h1 className="text-4xl">Get Involved - Coming Soon</h1></div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
