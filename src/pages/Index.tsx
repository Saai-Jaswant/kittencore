import HeroSection from "@/components/HeroSection";
import LetterSection from "@/components/LetterSection";
import HowToHelpSection from "@/components/HowToHelpSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <LetterSection />
      <HowToHelpSection />
      <Footer />
    </main>
  );
};

export default Index;
