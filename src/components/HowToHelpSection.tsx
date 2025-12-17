import { Heart, Hand, MessageCircle, Home } from "lucide-react";
import PawIcon from "./PawIcon";

const helpItems = [
  {
    icon: Heart,
    title: "Show Kindness",
    description: "A gentle pet, a soft voice, or even just a smile can make a world of difference to a lonely cat.",
  },
  {
    icon: Hand,
    title: "Don't Chase Me",
    description: "If you'd like me to leave, please guide me out gently. Chasing only scares and confuses me.",
  },
  {
    icon: MessageCircle,
    title: "Spread the Word",
    description: "Tell others about hostel cats like me. Help people understand that we just want to coexist peacefully.",
  },
  {
    icon: Home,
    title: "Small Acts Matter",
    description: "A bowl of water, a safe corner, or shelter during the rain—these small gestures can save lives.",
  },
];

const HowToHelpSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <PawIcon className="w-12 h-12 text-paw mx-auto mb-4 animate-paw-bounce" />
          <h2 className="text-5xl md:text-6xl text-foreground mb-4">
            How You Can Help
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            You don't have to adopt me or take me home. Here are simple ways to make my life a little better.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {helpItems.map((item, index) => (
            <div
              key={item.title}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-body">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToHelpSection;
