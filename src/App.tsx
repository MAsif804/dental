import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/ui/footer";
// import Header from "./components/ui/header";
import LandingPage from "./pages/landing";
import Treatments from "./pages/treatments";
import ServicesDetailPage from "./pages/services-detail";
import ScrollToTop from "./utils/scroll-to-top";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route
            path="/treatments/:slug"
            element={<ServicesDetailPage />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
