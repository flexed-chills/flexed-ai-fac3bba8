import { motion } from "framer-motion";
import { Bot, Globe, Gamepad2, Vote, Lock, Shield, Lightbulb, Sparkles } from "lucide-react";

const features = [
  { icon: Bot, emoji: "🤖", title: "AI Chat", description: "AI-powered conversations with 6-message context memory, powered by Groq. Responds to mentions, keywords, or all messages." },
  { icon: Globe, emoji: "🌐", title: "Multi-Language", description: "Support for 16+ languages including English, Hindi, Hinglish, Spanish, French, Japanese, Korean, and more." },
  { icon: Gamepad2, emoji: "🎮", title: "Games", description: "Play Chess vs Stockfish or friends, and Tic-Tac-Toe with 4 difficulty levels — directly in Discord." },
  { icon: Vote, emoji: "🗳️", title: "Voting & Rewards", description: "Top.gg voting integration with automatic voter role assignment, vote reminders, and role expiration tracking." },
  { icon: Lock, emoji: "🔐", title: "Encode / Decode", description: "4-level text encryption system (Level 0–3) with increasing security, checksums, and salted encoding." },
  { icon: Shield, emoji: "🛡️", title: "Moderation", description: "Strike system (3 strikes = auto-blacklist), word filter with bypass, user/server blacklisting, and reports." },
  { icon: Lightbulb, emoji: "💡", title: "Suggestions", description: "Submit suggestions with title and description, tracked in a forum channel with accept/consider/deny workflow." },
  { icon: Sparkles, emoji: "🎭", title: "Smart Reactions", description: "AI-powered emoji reactions on messages with configurable per-channel toggle." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Packed with <span className="text-primary">Features</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">Everything you need to supercharge your Discord server.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
            className="glass-card rounded-xl p-5 hover:border-primary/40 transition-colors group"
          >
            <div className="text-3xl mb-3">{f.emoji}</div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
