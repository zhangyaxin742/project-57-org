
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OurWork from "./pages/OurWork";
import About from "./pages/About";
import GetInvolved from "./pages/GetInvolved";
import Footer from "./components/Footer";
import ScrollToTop from "@/components/ui/scroll-to-top";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <Analytics />
        <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ourwork" element={<OurWork />} />
          <Route path="/curriculum" 
          element={<Navigate to="/ourwork#curriculum" replace />} />
          <Route path="/enterprise" 
          element={<Navigate to="/ourwork#enterprise" replace />} />
          <Route path="/advocacy" 
          element={<Navigate to="/ourwork#advocacy" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
