import AboutMeSection from '../components/organisms/about-me-section';
import TechStackSection from '../components/organisms/tech-stack-section';
import ContactSection from '../components/organisms/contact-section';
import Header from '../components/organisms/header';

export default function Homepage() {
    return (
        <div className="space-y-16 pt-12 sm:pt-16 lg:space-y-24">
            <Header />

            <main className="space-y-24 lg:space-y-32">
                <AboutMeSection />
                <TechStackSection />
                <ContactSection />
            </main>
        </div>
    );
}
