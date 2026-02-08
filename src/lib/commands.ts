export interface Command {
  name: string;
  description: string;
  category: string;
  permission: string;
}

export const commands: Command[] = [
  // General
  { name: "/help", description: "Shows the bot's help menu with all available commands", category: "General", permission: "Everyone" },
  { name: "/ping", description: "Check bot latency and response time", category: "General", permission: "Everyone" },
  { name: "/invite", description: "Get the bot's invite link to add it to your server", category: "General", permission: "Everyone" },
  { name: "/whoami", description: "View your user info including strikes and blacklist status", category: "General", permission: "Everyone" },
  { name: "/stats", description: "View bot statistics including uptime, servers, and users", category: "General", permission: "Everyone" },
  { name: "/forget", description: "Clear your AI conversation history with the bot", category: "General", permission: "Everyone" },

  // AI & Encoding
  { name: "/encode0", description: "Encode text using Level 0 basic encoding", category: "AI & Encoding", permission: "Everyone" },
  { name: "/encode1", description: "Encode text using Level 1 encoding with substitution", category: "AI & Encoding", permission: "Everyone" },
  { name: "/encode2", description: "Encode text using Level 2 encoding with checksum", category: "AI & Encoding", permission: "Everyone" },
  { name: "/encode3", description: "Encode text using Level 3 encoding with salt and checksum", category: "AI & Encoding", permission: "Everyone" },
  { name: "/decode", description: "Decode a previously encoded message (auto-detects level)", category: "AI & Encoding", permission: "Everyone" },

  // Games
  { name: "/chess", description: "Start a chess game vs Stockfish AI or challenge another user", category: "Games", permission: "Everyone" },
  { name: "/tictactoe", description: "Play Tic-Tac-Toe with 4 difficulty levels (Easy to Insane)", category: "Games", permission: "Everyone" },
  { name: "/tictactoe-stats", description: "View your Tic-Tac-Toe win/loss statistics", category: "Games", permission: "Everyone" },

  // Moderation
  { name: "/report", description: "Report a user for rule violations to server staff", category: "Moderation", permission: "Everyone" },
  { name: "/suggest", description: "Submit a suggestion with title and description", category: "Moderation", permission: "Everyone" },

  // Server Config
  { name: "/start", description: "Enable the bot's AI responses in the current channel", category: "Server Config", permission: "Admin" },
  { name: "/stop", description: "Disable the bot's AI responses in the current channel", category: "Server Config", permission: "Admin" },
  { name: "/lang", description: "Set the AI response language for a specific channel", category: "Server Config", permission: "Admin" },
  { name: "/prefix", description: "Set a custom prefix keyword to trigger AI responses", category: "Server Config", permission: "Admin" },
  { name: "/setupupdates", description: "Configure a channel to receive bot update announcements", category: "Server Config", permission: "Admin" },
  { name: "/changeupdates", description: "Change the updates channel to a different one", category: "Server Config", permission: "Admin" },
  { name: "/viewupdates", description: "View the currently configured updates channel", category: "Server Config", permission: "Admin" },
  { name: "/togglereactions", description: "Enable or disable AI-powered emoji reactions per channel", category: "Server Config", permission: "Admin" },

  // Admin
  { name: "/blacklist", description: "Blacklist or unblacklist a user from using the bot", category: "Admin", permission: "Admin" },
  { name: "/addstrike", description: "Add a strike to a user (3 strikes = auto-blacklist)", category: "Admin", permission: "Admin" },
  { name: "/removestrike", description: "Remove a strike from a user", category: "Admin", permission: "Admin" },
  { name: "/clearstrike", description: "Clear all strikes from a user", category: "Admin", permission: "Admin" },
  { name: "/strikelist", description: "View all users with strikes in the server", category: "Admin", permission: "Admin" },
  { name: "/bannedword", description: "Add or remove words from the server's word filter", category: "Admin", permission: "Admin" },
  { name: "/bypass", description: "Grant a user bypass permission for the word filter", category: "Admin", permission: "Admin" },
  { name: "/reports", description: "View all pending reports submitted in the server", category: "Admin", permission: "Admin" },
];

export const categories = ["All", "General", "AI & Encoding", "Games", "Moderation", "Server Config", "Admin"];
