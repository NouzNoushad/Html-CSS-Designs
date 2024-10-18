import './App.css'
import AboutSection from './components/About'
import FactsSection from './components/Facts'
import FeatureSection from './components/Feature'
import FooterSection from './components/Footer'
import HomeSection from './components/Home'
import NavSection from './components/Nav'
import ProjectsSection from './components/Projects'
import QuoteSection from './components/Quote'
import ServicesSection from './components/Services'
import TeamSection from './components/Team'
import TestimonialsSection from './components/Testimonials'

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
            <QuoteSection />
            <TeamSection/>
            <TestimonialsSection/>
            <FooterSection/>
        </>
    )
}

export default App
