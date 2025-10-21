import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/ui/footer";
// import Header from "./components/ui/header";
import LandingPage from "./pages/landing";
import Services from "./pages/services";
import Company from "./pages/company";
import ResourcesPage from "./pages/resources";
import Contact from "./pages/contact";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/company" element={<Company />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
