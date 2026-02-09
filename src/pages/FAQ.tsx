import { motion } from "framer-motion";
import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Scene3D = lazy(() => import("@/components/Scene3D"));

const faqs = [
  {
    category: "Getting Started",
    items: [
      {
        q: "How do I add flexedAI to my server?",
        a: "Click the 'Add to Discord' button on the homepage or use the /invite command. After adding, you must run /setupupdates #channel to configure an updates channel — the bot won't function without it."
      },
      {
        q: "What's the first thing I need to do after adding the bot?",
        a: "Run /setupupdates #channel in your server. This is required for the bot to function properly. Then use /start to enable auto-responses or /lang to set your preferred language."
      },
      {
        q: "What languages does flexedAI support?",
        a: "flexedAI supports 16+ languages including English, Hindi, Hinglish, Spanish, French, German, Portuguese, Italian, Japanese, Korean, Chinese, Russian, Arabic, Turkish, Dutch, and Marathi. Use /lang to set per-channel."
      },
    ]
  },
  {
    category: "AI Chat",
    items: [
      {
        q: "How does the AI conversation memory work?",
        a: "The bot remembers your last 6 messages per channel conversation. Use /forget to clear your history and start fresh."
      },
      {
        q: "Why doesn't the bot respond sometimes?",
        a: "The bot has a 1-second cooldown between responses to prevent API rate limiting. In 'stop' mode, it only responds to mentions, keywords, or DMs. Use /start to enable responses to all messages."
      },
      {
        q: "What's the difference between /start and /stop modes?",
        a: "In /start mode, the bot responds to every message in the channel. In /stop mode (default), it only responds when mentioned, when the bot name is said, or via DMs."
      },
    ]
  },
  {
    category: "Encoding & Decoding",
    items: [
      {
        q: "What are the encoding levels?",
        a: "Level 0 is simple encoding with minimal overhead. Level 1 adds a checksum for verification. Level 2 adds noise for enhanced security. Level 3 uses salt and SHA-256 checksums for maximum security."
      },
      {
        q: "Can anyone decode my encoded messages?",
        a: "Yes, anyone with access to the /decode command can decode messages. The encoding levels add complexity but use the same algorithm. Remove backticks before decoding."
      },
      {
        q: "What happens if a decoded message contains banned words?",
        a: "If the decoded text contains banned words, you'll receive a strike. Users with word filter bypass are exempt from this check."
      },
    ]
  },
  {
    category: "Games",
    items: [
      {
        q: "How does Tic-Tac-Toe difficulty work?",
        a: "There are 4 difficulty levels: Easy (AI plays optimally 30% of the time), Middle (50%), Hard (70%), and Insane (85%). The AI uses the minimax algorithm for optimal moves."
      },
      {
        q: "Can I play games against other users?",
        a: "Yes! Both /chess and /tic-tac-toe support PvP. Leave the opponent parameter empty to play against AI, or mention a user to challenge them."
      },
      {
        q: "How do leaderboards work?",
        a: "Use /leaderboard to view rankings for AI Chat (messages sent), Chess (wins vs Stockfish), and Tic-Tac-Toe (wins per difficulty). Available as server-specific or global leaderboards."
      },
    ]
  },
  {
    category: "Moderation",
    items: [
      {
        q: "How does the strike system work?",
        a: "Users receive strikes for rule violations. At 3 strikes, you're automatically blacklisted from using the bot. Admins can add/remove strikes and clear them entirely."
      },
      {
        q: "What is the word filter?",
        a: "Admins can add banned words that get auto-deleted when used. Users with bypass permission (/bypass add) are exempt. Bypass users and bot admins can use banned words freely."
      },
      {
        q: "How do I report a user?",
        a: "Use /report @user [proof] [reason] to report someone. Reports have a 1-hour cooldown. Bot admins can view, claim, and act on reports including issuing strikes or blacklists."
      },
      {
        q: "Can I blacklist an entire server?",
        a: "Yes, bot admins can use /blacklist-guild add to blacklist a server. The bot will not function in blacklisted servers."
      },
    ]
  },
  {
    category: "Suggestions & Updates",
    items: [
      {
        q: "How do suggestions work?",
        a: "Use /suggest to submit a suggestion with a title and description. Suggestions go to a forum channel where admins can accept, consider, or deny them. You'll receive a DM notification when your suggestion is reviewed. There's a 1-hour cooldown between submissions."
      },
      {
        q: "What is the updates channel?",
        a: "The updates channel receives bot announcements and important updates. It's required for the bot to function. Use /setupupdates to configure it, /changeupdates to change it, or /viewupdates to check the current config."
      },
    ]
  },
  {
    category: "Smart Reactions",
    items: [
      {
        q: "What are smart reactions?",
        a: "The bot has a 10% chance of adding AI-generated emoji reactions to messages it responds to. The AI analyzes the conversation context to pick appropriate emojis."
      },
      {
        q: "Can I disable reactions?",
        a: "Yes, server admins can use /togglereactions to enable or disable AI-powered emoji reactions on a per-channel basis."
      },
    ]
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative select-none">
      <Suspense fallback={null}>
        <Scene3D className="fixed inset-0 z-0" />
      </Suspense>

      <div className="relative z-10">
        <Navbar />

        <section className="pt-28 pb-24 px-4 max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h1
              className="text-4xl md:text-5xl font-bold mb-4 glow-text"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Everything you need to know about flexedAI.
            </p>
          </motion.div>

          {faqs.map((section, si) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: si * 0.08, duration: 0.4 }}
              className="mb-8"
            >
              <h2
                className="text-xl font-semibold mb-3 text-primary"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {section.category}
              </h2>
              <div className="glass-card rounded-xl overflow-hidden">
                <Accordion type="single" collapsible>
                  {section.items.map((item, i) => (
                    <AccordionItem
                      key={i}
                      value={`${si}-${i}`}
                      className="border-border/30 px-5"
                    >
                      <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </motion.div>
          ))}
        </section>

        <FooterSection />
      </div>
    </div>
  );
};

export default FAQ;
