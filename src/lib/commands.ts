export interface Command {
  name: string;
  description: string;
  category: string;
  permission: string;
  copyable: boolean; // true if command has no required args or only optional ones
}

export const commands: Command[] = [
  // General
  { name: "/help", description: "Shows the bot's help menu with all available commands", category: "General", permission: "Everyone", copyable: true },
  { name: "/ping", description: "Check bot latency and response time", category: "General", permission: "Everyone", copyable: true },
  { name: "/invite", description: "Get the bot's invite link to add it to your server", category: "General", permission: "Everyone", copyable: true },
  { name: "/whoami", description: "View your user info including strikes and blacklist status", category: "General", permission: "Everyone", copyable: true },
  { name: "/stats", description: "View bot statistics including uptime, servers, and users", category: "General", permission: "Everyone", copyable: true },
  { name: "/forget", description: "Clear your AI conversation history with the bot", category: "General", permission: "Everyone", copyable: true },

  // AI & Encoding
  { name: "/encode0", description: "Encode text using Level 0 basic encoding", category: "AI & Encoding", permission: "Everyone", copyable: false },
  { name: "/encode1", description: "Encode text using Level 1 encoding with substitution", category: "AI & Encoding", permission: "Everyone", copyable: false },
  { name: "/encode2", description: "Encode text using Level 2 encoding with checksum", category: "AI & Encoding", permission: "Everyone", copyable: false },
  { name: "/encode3", description: "Encode text using Level 3 encoding with salt and checksum", category: "AI & Encoding", permission: "Everyone", copyable: false },
  { name: "/decode", description: "Decode a previously encoded message (auto-detects level)", category: "AI & Encoding", permission: "Everyone", copyable: false },

  // Games
  { name: "/chess", description: "Start a chess game vs Stockfish AI or challenge another user", category: "Games", permission: "Everyone", copyable: true },
  { name: "/tictactoe", description: "Play Tic-Tac-Toe with 4 difficulty levels (Easy to Insane)", category: "Games", permission: "Everyone", copyable: true },
  { name: "/tictactoe-stats", description: "View your Tic-Tac-Toe win/loss statistics", category: "Games", permission: "Everyone", copyable: true },

  // Moderation
  { name: "/report", description: "Report a user for rule violations to server staff", category: "Moderation", permission: "Everyone", copyable: false },
  { name: "/suggest", description: "Submit a suggestion with title and description", category: "Moderation", permission: "Everyone", copyable: false },

  // Server Config
  { name: "/start", description: "Enable the bot's AI responses in the current channel", category: "Server Config", permission: "Admin", copyable: true },
  { name: "/stop", description: "Disable the bot's AI responses in the current channel", category: "Server Config", permission: "Admin", copyable: true },
  { name: "/lang", description: "Set the AI response language for a specific channel", category: "Server Config", permission: "Admin", copyable: false },
  { name: "/prefix", description: "Set a custom prefix keyword to trigger AI responses", category: "Server Config", permission: "Admin", copyable: false },
  { name: "/setupupdates", description: "Configure a channel to receive bot update announcements", category: "Server Config", permission: "Admin", copyable: false },
  { name: "/changeupdates", description: "Change the updates channel to a different one", category: "Server Config", permission: "Admin", copyable: false },
  { name: "/viewupdates", description: "View the currently configured updates channel", category: "Server Config", permission: "Admin", copyable: true },
  { name: "/togglereactions", description: "Enable or disable AI-powered emoji reactions per channel", category: "Server Config", permission: "Admin", copyable: true },

  // Admin
  { name: "/blacklist", description: "Blacklist or unblacklist a user from using the bot", category: "Admin", permission: "Admin", copyable: false },
  { name: "/addstrike", description: "Add a strike to a user (3 strikes = auto-blacklist)", category: "Admin", permission: "Admin", copyable: false },
  { name: "/removestrike", description: "Remove a strike from a user", category: "Admin", permission: "Admin", copyable: false },
  { name: "/clearstrike", description: "Clear all strikes from a user", category: "Admin", permission: "Admin", copyable: false },
  { name: "/strikelist", description: "View all users with strikes in the server", category: "Admin", permission: "Admin", copyable: true },
  { name: "/bannedword", description: "Add or remove words from the server's word filter", category: "Admin", permission: "Admin", copyable: false },
  { name: "/bypass", description: "Grant a user bypass permission for the word filter", category: "Admin", permission: "Admin", copyable: false },
  { name: "/reports", description: "View all pending reports submitted in the server", category: "Admin", permission: "Admin", copyable: true },
];

export const categories = ["All", "General", "AI & Encoding", "Games", "Moderation", "Server Config", "Admin"];
