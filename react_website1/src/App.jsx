import './App.css'
import AboutSection from './components/About'
import FactsSection from './components/Facts'
import FeatureSection from './components/Feature'
import HomeSection from './components/Home'
import NavSection from './components/Nav'
import ProjectsSection from './components/Projects'
import ServicesSection from './components/Services'

function App() {

    return (
        <>
            <NavSection />
            <HomeSection />
            <FactsSection />
            <AboutSection />
            <ServicesSection />
            <FeatureSection />
            <ProjectsSection />
        </>
    )
}

export default App
