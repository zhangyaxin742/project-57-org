import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OurWork from "./pages/OurWork";
import GetInvolved from "./pages/GetInvolved";
import Footer from "./components/Footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import Brief from "./pages/Briefs";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react"; 

const queryClient = new QueryClient();

function HaloCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 5,
        background: `radial-gradient(120px at ${pos.x}px ${pos.y}px, rgba(255,170, 0,0.15), transparent 80%)`,
      }}
    />
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Analytics />
        <ScrollToTop />
        <HaloCursor /> 
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ourwork" element={<OurWork />} />
          <Route path="/curriculum" element={<Navigate to="/ourwork#curriculum" replace />} />
          <Route path="/enterprise" element={<Navigate to="/ourwork#enterprise" replace />} />
          <Route path="/advocacy" element={<Navigate to="/ourwork#advocacy" replace />} />
          <Route path="/about" element={<Navigate to="/ourwork#about" replace />} />
          <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/briefs/:slug" element={<Brief />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
