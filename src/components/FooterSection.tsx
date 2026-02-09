import { ExternalLink, Heart, MessageCircle, Github } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="border-t border-border/30 py-10 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex gap-6 text-sm">
          <a href="https://discord.com/oauth2/authorize?client_id=1379152032358858762&permissions=4503874505665600&integration_type=0&scope=bot" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
            <ExternalLink size={14} /> Invite Bot
          </a>
          <a href="https://patreon.com/flexedai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
            <Heart size={14} /> Patreon
          </a>
          <a href="https://discord.com/invite/XMvPq7W5N4" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
            <MessageCircle size={14} /> Support Server
          </a>
          <a href="https://github.com/flexed-commits/flexedai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
            <Github size={14} /> GitHub
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          Made with love <span className="text-red-400">❤️</span> by Ψ.1nOnly.Ψ
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
