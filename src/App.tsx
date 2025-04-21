import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Biochar from "./pages/Biochar";
import Biocoal from "./pages/Biocoal";
import Technology from "./pages/Technology";
import CarbonCredits from "./pages/CarbonCredits";
import AboutUs from "./pages/AboutUs";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/biochar" element={<Biochar />} />
            <Route path="/biocoal" element={<Biocoal />} />
            <Route path="/carbon-credits" element={<CarbonCredits />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
