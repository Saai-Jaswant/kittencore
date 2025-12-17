import PawIcon from "./PawIcon";
import catLogo from "@/assets/cat-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-foreground/5">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <img src={catLogo} alt="Hostel Cat logo" className="w-12 h-12" />
          <span className="text-2xl font-display text-foreground">Hostel Cat</span>
        </div>
        <p className="text-muted-foreground mb-6">
          Made with love for all the hostel cats looking for a warm corner and kind hearts.
        </p>
        <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
          <span>Remember:</span>
          <span className="text-primary font-semibold">Kindness costs nothing</span>
          <PawIcon className="w-4 h-4 text-paw" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
