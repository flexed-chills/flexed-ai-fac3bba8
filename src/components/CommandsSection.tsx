import { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { Search, Copy, Check } from "lucide-react";
import { commands, categories } from "@/lib/commands";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableHeader, TableHead, TableRow, TableBody, TableCell } from "@/components/ui/table";
import { toast } from "sonner";

const CommandsSection = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return commands.filter((cmd) => {
      const matchesCategory = activeCategory === "All" || cmd.category === activeCategory;
      const matchesSearch = !search || cmd.name.toLowerCase().includes(search.toLowerCase()) || cmd.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const handleCopy = useCallback((name: string) => {
    navigator.clipboard.writeText(name);
    setCopiedCmd(name);
    toast.success(`Copied ${name} to clipboard`);
    setTimeout(() => setCopiedCmd(null), 2000);
  }, []);

  return (
    <section id="commands" className="py-24 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          All <span className="text-primary">Commands</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">Browse and search through every available command.</p>
      </motion.div>

      {/* Search */}
      <div className="relative max-w-md mx-auto mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
        <Input
          placeholder="Search commands..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9 bg-card border-border/50 rounded-full"
        />
      </div>

      {/* Category chips */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors border ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="glass-card rounded-xl overflow-hidden"
      >
        <Table>
          <TableHeader>
            <TableRow className="border-border/30 hover:bg-transparent">
              <TableHead className="text-foreground font-semibold">Command</TableHead>
              <TableHead className="text-foreground font-semibold">Description</TableHead>
              <TableHead className="text-foreground font-semibold hidden sm:table-cell">Category</TableHead>
              <TableHead className="text-foreground font-semibold text-right">Permission</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((cmd) => (
              <TableRow key={cmd.name} className="border-border/20 hover:bg-secondary/30">
                <TableCell className="font-mono text-primary text-sm">
                  {cmd.copyable ? (
                    <button
                      onClick={() => handleCopy(cmd.name)}
                      className="flex items-center gap-1.5 hover:text-foreground transition-colors group cursor-pointer"
                      title="Click to copy"
                    >
                      {cmd.name}
                      {copiedCmd === cmd.name ? (
                        <Check size={13} className="text-green-400" />
                      ) : (
                        <Copy size={13} className="opacity-0 group-hover:opacity-60 transition-opacity" />
                      )}
                    </button>
                  ) : (
                    cmd.name
                  )}
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">{cmd.description}</TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge variant="secondary" className="text-xs">{cmd.category}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Badge variant={cmd.permission === "Admin" ? "default" : "outline"} className="text-xs">
                    {cmd.permission}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
            {filtered.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">No commands found.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </motion.div>
    </section>
  );
};

export default CommandsSection;
