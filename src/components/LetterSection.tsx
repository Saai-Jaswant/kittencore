import PawIcon from "./PawIcon";
import { playKittenMeow } from "@/lib/soundUtils";

const LetterSection = () => {
  const handleLetterClick = () => {
    playKittenMeow();
  };

  return (
    <section id="letter" className="py-20 px-4" onClick={handleLetterClick}>
      <div className="container max-w-4xl mx-auto">
        <div className="relative bg-card rounded-3xl shadow-warm-lg p-8 md:p-12 lg:p-16">
          {/* Decorative corner paws */}
          <PawIcon className="absolute top-4 left-4 w-8 h-8 text-paw/20" />
          <PawIcon className="absolute top-4 right-4 w-8 h-8 text-paw/20 -scale-x-100" />
          <PawIcon className="absolute bottom-4 left-4 w-8 h-8 text-paw/20" />
          <PawIcon className="absolute bottom-4 right-4 w-8 h-8 text-paw/20 -scale-x-100" />

          <div className="prose prose-lg max-w-none">
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 mb-6">
              I don't know a life outside these hostel walls. I was born here. I grew up here.
              <span className="text-primary font-semibold"> This is the only home I've ever known.</span>
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
              I don't understand why some of you don't want me here anymore. I don't take up much space.
              I don't ask for much—just a warm spot, a kind voice, and maybe a little food now and then.
              But sometimes, doors slam in my face, voices get loud, and I get chased away.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6 italic border-l-4 border-accent pl-6 bg-accent/10 py-4 rounded-r-lg">
              Lately, I hear whispers… "Keep him out." "He doesn't belong here."
              And I wonder—if this isn't my home, then where do I go?
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
              I never mean to bother you. If I wander into your room, it's not to invade your space—I'm just curious,
              a little lost, and sometimes lonely. I don't know which doors are safe to enter.
              <span className="text-foreground font-medium"> I only know where I feel loved.</span>
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
              Some of you might worry that I carry diseases, but honestly, my risk of rabies is very low.
              There aren't many stray animals around, and I'm not aggressive at all.
              <span className="text-primary font-semibold"> I just want to exist peacefully.</span>
            </p>

            <div className="bg-secondary rounded-2xl p-6 md:p-8 mt-8">
              <p className="text-xl md:text-2xl leading-relaxed text-foreground mb-4">
                So please… <span className="text-accent font-bold">if you don't like me, that's okay.</span> Just don't hurt me.
                And if you do like me, maybe let me stay a while?
              </p>
            </div>

            <div className="mt-10 text-center">
              <p className="text-2xl md:text-3xl text-foreground font-display">
                — A Small, Lost Soul 🐾
              </p>
            </div>

            <div className="mt-8 p-4 bg-muted rounded-xl">
              <p className="text-muted-foreground text-center italic">
                (P.S. If you'd rather I stay out, just gently guide me away or ask one of the friendly cat moms.
                I understand kindness better than fear.)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetterSection;
