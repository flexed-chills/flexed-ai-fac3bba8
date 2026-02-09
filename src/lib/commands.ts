export interface Command {
  name: string;
  description: string;
  category: string;
  permission: string;
  copyable: boolean;
}

export const commands: Command[] = [
  // General
  { name: "/help", description: "Display the bot's full command guide with all available features", category: "General", permission: "Everyone", copyable: true },
  { name: "/ping", description: "Check bot response time and latency status", category: "General", permission: "Everyone", copyable: true },
  { name: "/invite", description: "Get the bot's invite link to add it to your server", category: "General", permission: "Everyone", copyable: true },
  { name: "/whoami", description: "View your Discord profile, strikes, blacklist status, and bot privileges", category: "General", permission: "Everyone", copyable: true },
  { name: "/stats", description: "View bot statistics including uptime, servers, users, and latency", category: "General", permission: "Everyone", copyable: true },
  { name: "/forget", description: "Clear your AI conversation history (6-message memory)", category: "General", permission: "Everyone", copyable: true },
  { name: "/leaderboard", description: "View server or global leaderboards for AI chat, chess, and tic-tac-toe", category: "General", permission: "Everyone", copyable: false },

  // AI & Encoding
  { name: "/encode", description: "Encode text using Level 0 simple encoding (minimal length)", category: "AI & Encoding", permission: "Everyone", copyable: false },
  { name: "/encode-lvl-1", description: "Encode text using Level 1 standard encoding with checksum", category: "AI & Encoding", permission: "Everyone", copyable: false },
  { name: "/encode-lvl-2", description: "Encode text using Level 2 enhanced encoding with noise", category: "AI & Encoding", permission: "Everyone", copyable: false },
  { name: "/encode-lvl-3", description: "Encode text using Level 3 maximum security with salt", category: "AI & Encoding", permission: "Everyone", copyable: false },
  { name: "/decode", description: "Decode a previously encoded message (auto-detects encoding level)", category: "AI & Encoding", permission: "Everyone", copyable: false },

  // Games
  { name: "/chess", description: "Start a chess game vs Stockfish AI or challenge another user", category: "Games", permission: "Everyone", copyable: true },
  { name: "/tic-tac-toe", description: "Play Tic-Tac-Toe against AI (4 difficulty levels) or another player", category: "Games", permission: "Everyone", copyable: true },
  { name: "/tictactoe-stats", description: "View your Tic-Tac-Toe win/loss/draw statistics and win rate", category: "Games", permission: "Everyone", copyable: true },

  // Moderation
  { name: "/report", description: "Report a user for rule violations with proof and reason", category: "Moderation", permission: "Everyone", copyable: false },
  { name: "/suggest", description: "Submit a suggestion with title and description (1-hour cooldown)", category: "Moderation", permission: "Everyone", copyable: false },

  // Server Config
  { name: "/start", description: "Enable auto-response mode — bot responds to all messages in this channel", category: "Server Config", permission: "Admin", copyable: true },
  { name: "/stop", description: "Enable selective-response mode — bot only responds to mentions", category: "Server Config", permission: "Admin", copyable: true },
  { name: "/lang", description: "Set the AI response language for a specific channel (16 languages)", category: "Server Config", permission: "Admin", copyable: false },
  { name: "/prefix", description: "Set a custom prefix keyword to trigger AI responses", category: "Server Config", permission: "Admin", copyable: false },
  { name: "/setupupdates", description: "Configure a channel to receive bot update announcements (required)", category: "Server Config", permission: "Admin", copyable: false },
  { name: "/changeupdates", description: "Change the updates channel to a different one", category: "Server Config", permission: "Admin", copyable: false },
  { name: "/viewupdates", description: "View the currently configured updates channel", category: "Server Config", permission: "Everyone", copyable: true },
  { name: "/togglereactions", description: "Enable or disable AI-powered emoji reactions per channel", category: "Server Config", permission: "Admin", copyable: true },

  // Admin — Blacklist
  { name: "/blacklist", description: "View all currently blacklisted users", category: "Admin", permission: "Bot Admin", copyable: true },
  { name: "/blacklist add", description: "Blacklist a user from using the bot with optional reason", category: "Admin", permission: "Bot Admin", copyable: false },
  { name: "/blacklist remove", description: "Unblacklist a user and restore their bot access", category: "Admin", permission: "Bot Admin", copyable: false },
  { name: "/blacklist-guild", description: "View all blacklisted servers", category: "Admin", permission: "Bot Admin", copyable: true },
  { name: "/blacklist-guild add", description: "Blacklist an entire server from using the bot", category: "Admin", permission: "Bot Admin", copyable: false },
  { name: "/blacklist-guild remove", description: "Remove a server from the blacklist", category: "Admin", permission: "Bot Admin", copyable: false },

  // Admin — Strikes
  { name: "/addstrike", description: "Add strikes to a user (3 strikes = auto-blacklist)", category: "Admin", permission: "Bot Admin", copyable: false },
  { name: "/removestrike", description: "Remove strikes from a user", category: "Admin", permission: "Bot Admin", copyable: false },
  { name: "/clearstrike", description: "Clear all strikes from a user", category: "Admin", permission: "Bot Admin", copyable: false },
  { name: "/strikelist", description: "View all users with active strikes in the server", category: "Admin", permission: "Bot Admin", copyable: true },

  // Admin — Word Filter
  { name: "/bannedword", description: "List all currently banned words", category: "Admin", permission: "Bot Admin", copyable: true },
  { name: "/bannedword add", description: "Add a word to the server's word filter", category: "Admin", permission: "Bot Admin", copyable: false },
  { name: "/bannedword remove", description: "Remove a word from the server's word filter", category: "Admin", permission: "Bot Admin", copyable: false },

  // Admin — Bypass
  { name: "/bypass", description: "List all users with word filter bypass", category: "Admin", permission: "Bot Admin", copyable: true },
  { name: "/bypass add", description: "Grant a user bypass permission for the word filter", category: "Admin", permission: "Bot Admin", copyable: false },
  { name: "/bypass remove", description: "Revoke a user's word filter bypass permission", category: "Admin", permission: "Bot Admin", copyable: false },

  // Admin — Reports
  { name: "/reports", description: "View all reports submitted in the server (filterable by status)", category: "Admin", permission: "Bot Admin", copyable: true },
  { name: "/reportview", description: "View detailed information about a specific report", category: "Admin", permission: "Bot Admin", copyable: false },
  { name: "/reportclear", description: "Clear all reports associated with a user", category: "Admin", permission: "Bot Admin", copyable: false },
  { name: "/reportremove", description: "Permanently delete a specific report", category: "Admin", permission: "Bot Admin", copyable: false },

  // Admin — Utility
  { name: "/announce", description: "Broadcast an announcement to all servers and owners", category: "Admin", permission: "Bot Admin", copyable: false },
  { name: "/logs", description: "View the most recent 15 admin action logs", category: "Admin", permission: "Bot Admin", copyable: true },
  { name: "/clearadminlogs", description: "Clear all admin logs from the database", category: "Admin", permission: "Bot Admin", copyable: true },
  { name: "/searchlogs", description: "Search through interaction logs by keyword", category: "Admin", permission: "Bot Admin", copyable: false },
];

export const categories = ["All", "General", "AI & Encoding", "Games", "Moderation", "Server Config", "Admin"];
