import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustPartners from './components/TrustPartners';
import CourseOverview from './components/CourseOverview';
import LearningOutcomes from './components/LearningOutcomes';
import SectionCTA from './components/SectionCTA';
import PracticalTraining from './components/PracticalTraining';
import Curriculum from './components/Curriculum';
import Day13Highlight from './components/Day13Highlight';
import BOQSection from './components/BOQSection';
import Certification from './components/Certification';
import Eligibility from './components/Eligibility';
import Venue from './components/Venue';
import SeatAvailability from './components/SeatAvailability';
import RegistrationForm from './components/RegistrationForm';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustPartners />
      <CourseOverview />
      <LearningOutcomes />
      <SectionCTA />
      <PracticalTraining />
      <Curriculum />
      <Day13Highlight />
      <BOQSection />
      <Certification />
      <SectionCTA />
      <Eligibility />
      <Venue />
      <SeatAvailability />
      <RegistrationForm />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
