import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import SpaceBackground from './components/SpaceBackground';

function App() {
  return (
    <>
      <SpaceBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-color)', position: 'relative', zIndex: 10 }}>
        <p>&copy; {new Date().getFullYear()} Abir Hachlafi. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
