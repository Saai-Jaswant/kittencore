import heroCat from "@/assets/hero-cat.jpg";
import PawIcon from "./PawIcon";
import { playKittenMeow } from "@/lib/soundUtils";
import { Heart } from "lucide-react";

const HeroSection = () => {
  const handleKittenClick = () => {
    playKittenMeow();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background decorative paws and hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <PawIcon className="absolute top-20 left-10 w-16 h-16 text-paw/10 animate-float" />
        <Heart className="absolute top-32 right-16 w-8 h-8 text-primary/20 animate-float delay-150 fill-current" />
        <PawIcon className="absolute top-40 right-20 w-12 h-12 text-paw/10 animate-float delay-200" />
        <Heart className="absolute bottom-52 left-16 w-6 h-6 text-accent/20 animate-float delay-250 fill-current" />
        <PawIcon className="absolute bottom-40 left-20 w-20 h-20 text-paw/10 animate-float delay-300" />
        <PawIcon className="absolute bottom-20 right-10 w-14 h-14 text-paw/10 animate-float delay-100" />
      </div>

      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Cat Image */}
          <div className="relative order-2 lg:order-1 animate-fade-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3 scale-105" />

              <img
                src={heroCat}
                alt="A friendly orange tabby cat with warm amber eyes"
                onClick={handleKittenClick}
                className="relative rounded-3xl shadow-warm-lg w-full object-cover aspect-square transition-transform duration-300 cursor-pointer hover:scale-[1.02]"
              />
              <PawIcon className="absolute -bottom-4 -right-4 w-16 h-16 text-paw animate-paw-bounce" />
              <Heart className="absolute -top-2 -left-2 w-10 h-10 text-primary fill-current opacity-70" />
            </div>
          </div>

          {/* Message */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-6xl md:text-7xl lg:text-8xl text-foreground mb-6 animate-fade-up">
              Hello, humans…
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed animate-fade-up delay-200">
              A small, lost soul has something to share with you.
            </p>
            <div className="mt-8 animate-fade-up delay-300">
              <a
                href="#letter"
                onClick={handleKittenClick}
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-2xl text-lg font-semibold shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:scale-105"
              >
                <span>Read My Letter</span>
                <PawIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
