import { motion } from "framer-motion";
import { ExternalLink, Heart } from "lucide-react";
import botAvatar from "@/assets/bot-avatar.png";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 w-36 h-36 md:w-44 md:h-44 rounded-full glow-ring overflow-hidden border-2 border-primary/30"
        >
          <img src={botAvatar} alt="flexedAI bot avatar" className="w-full h-full object-cover" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4 glow-text"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          flexed<span className="text-primary">AI</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg mx-auto"
        >
          Your AI-Powered Discord Companion — smart conversations, games, encryption, and moderation in one bot.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="gap-2 text-base px-8 rounded-full" asChild>
            <a href="https://discord.com/oauth2/authorize?client_id=1379152032358858762&permissions=4503874505665600&integration_type=0&scope=bot" target="_blank" rel="noopener noreferrer">
              <ExternalLink size={18} /> Add to Discord
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2 text-base px-8 rounded-full border-primary/30 hover:bg-primary/10" asChild>
            <a href="https://patreon.com/flexedai" target="_blank" rel="noopener noreferrer">
              <Heart size={18} /> Support on Patreon
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
