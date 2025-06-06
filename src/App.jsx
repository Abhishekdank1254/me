import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Services from './pages/Services'; // Import the new Services page
import Experience from './pages/Experience'; // Import the new Experience page
import Testimonials from './pages/Testimonials'; // Import the new Testimonials page
import NotFound from './pages/NotFound';
import Sabhi from './pages/Sabhi';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>Abhishek Adhikari | UI/UX Designer & Product Strategist</title>
          <meta name="description" content="Innovative UI/UX Designer, Product Strategist, and Agri-Tech specialist with 22+ years of experience. Crafting user-centric digital experiences and driving product innovation." />
          <link rel="canonical" href="https://abhishekadhikari.com" />
          {/* Open Graph / Facebook Meta Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://abhishekadhikari.com" />
          <meta property="og:title" content="Abhishek Adhikari | UI/UX Designer & Product Strategist" />
          <meta property="og:description" content="Innovative UI/UX Designer, Product Strategist, and Agri-Tech specialist with 22+ years of experience. Crafting user-centric digital experiences and driving product innovation." />
          <meta property="og:image" content="https://abhishekadhikari.com/og-image.jpg" /> {/* Update with actual image path */}

          {/* Twitter Card Meta Tags */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://abhishekadhikari.com" />
          <meta property="twitter:title" content="Abhishek Adhikari | UI/UX Designer & Product Strategist" />
          <meta property="twitter:description" content="Innovative UI/UX Designer, Product Strategist, and Agri-Tech specialist with 22+ years of experience. Crafting user-centric digital experiences and driving product innovation." />
          <meta property="twitter:image" content="https://abhishekadhikari.com/twitter-image.jpg" /> {/* Update with actual image path */}
        </Helmet>
        
        <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
          {/* Subtle Gradient Background */}
          <div className="absolute inset-0 z-0 opacity-50">
            <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>
          </div>
          
          <main className="relative z-10">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/sabhi" element={<Sabhi />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App;

// Add this component for dynamic meta tags
const DynamicHelmet = () => {
  const location = useLocation();
  const path = location.pathname;

  const getMetaData = () => {
    const baseTitle = "Abhishek Adhikari";
    switch(path) {
      case "/":
        return {
          title: `${baseTitle} | UI/UX Designer & Product Strategist in Nepal`,
          description: "Award-winning UI/UX designer and product strategist from Nepal with 22+ years of experience in digital innovation and agricultural technology.",
          keywords: "Abhishek Adhikari, UI/UX Designer Nepal, Product Strategy, Agricultural Technology"
        };
      case "/about":
        return {
          title: `About ${baseTitle} | UI/UX Expert & Agri-Tech Specialist`,
          description: "Learn about Abhishek Adhikari's 22+ years journey in UI/UX design, product strategy, and agricultural innovation in Nepal.",
          keywords: "Abhishek Adhikari about, UI/UX portfolio, Manahari designer, Nepal tech expert"
        };
      // Add cases for other routes
    }
  };

  const metaData = getMetaData();
  return (
    <Helmet>
      <title>{metaData.title}</title>
      <meta name="description" content={metaData.description} />
      <meta name="keywords" content={metaData.keywords} />
      <link rel="canonical" href={`https://abhishekadhikari.com${path}`} />
    </Helmet>
  );
};