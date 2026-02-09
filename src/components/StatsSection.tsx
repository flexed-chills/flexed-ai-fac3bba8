import { motion } from "framer-motion";
import { Globe, Brain, Lock, Clock } from "lucide-react";

const stats = [
  { icon: Globe, value: "16+", label: "Languages Supported" },
  { icon: Brain, value: "4", label: "AI Difficulty Levels" },
  { icon: Lock, value: "4-Level", label: "Encryption System" },
  { icon: Clock, value: "24/7", label: "Uptime" },
];

const StatsSection = () => {
  return (
    <section id="stats" className="py-20 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="text-center"
          >
            <s.icon className="mx-auto mb-3 text-primary" size={28} />
            <div className="text-3xl md:text-4xl font-bold glow-text mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {s.value}
            </div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
