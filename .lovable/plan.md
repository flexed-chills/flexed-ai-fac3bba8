

# flexedAI — Discord Bot Landing Page

## Overview
A sleek, modern dark-themed landing page showcasing flexedAI's features, commands, and inviting users to add the bot to their server.

---

## Page Sections

### 1. Hero Section
- Large bot icon (the uploaded anime avatar) with a glowing ring effect matching the image
- Bot name "flexedAI" in bold with a tagline like "Your AI-Powered Discord Companion"
- Two prominent CTA buttons: **"Add to Discord"** (invite link placeholder) and **"Support on Patreon"** (Patreon link placeholder)
- Animated gradient background in dark tones

### 2. Features Section
Highlight cards for the key features extracted from the code:

- **🤖 AI Chat** — AI-powered conversations with context memory (6-message history), powered by Groq. Responds to mentions, keywords, or all messages.
- **🌐 Multi-Language** — Support for 16+ languages including English, Hindi, Hinglish, Spanish, French, Japanese, Korean, and more. Set per-channel.
- **🎮 Games** — Play Chess (vs Stockfish or friends) and Tic-Tac-Toe (with 4 difficulty levels: Easy, Middle, Hard, Insane) directly in Discord.
- **🗳️ Voting & Rewards** — Top.gg voting integration with automatic voter role assignment, vote reminders, and role expiration tracking.
- **🔐 Encode/Decode** — 4-level text encryption system (Level 0–3) with increasing security, checksums, and salt.
- **🛡️ Moderation** — Strike system (3 strikes = auto-blacklist), word filter with bypass system, user/server blacklisting, and report system.
- **💡 Suggestions** — Users can submit suggestions with title and description, tracked in a forum channel with accept/consider/deny workflow.
- **🎭 Smart Reactions** — AI-powered emoji reactions on messages with configurable per-channel toggle.

### 3. Commands Table
A searchable, filterable table of all public and server-admin commands (excluding owner-only privacy commands like `/messages`, `/allinteractions`, `/clearlogs`, `/data`, `/server-list`, `/allinteractions`):

**Columns:** Command Name | Description | Category | Required Permission

**Categories for filtering:**
- General (help, ping, invite, whoami, stats, forget)
- AI & Encoding (encode levels 0–3, decode)
- Games (chess, tic-tac-toe, tictactoe-stats)
- Moderation (report, suggest)
- Server Config (start, stop, lang, prefix, setupupdates, changeupdates, viewupdates, togglereactions)
- Admin (blacklist, addstrike, removestrike, clearstrike, strikelist, bannedword, bypass, reports, etc.)

Search will filter by command name or description. Category tabs/chips for quick filtering.

### 4. Stats/Social Proof Section
- Animated counters or highlights: "16+ Languages", "4 AI Difficulty Levels", "Multi-Level Encryption", "24/7 Uptime"

### 5. Footer
- Links: Invite Bot | Patreon | Support Server
- "Made with ❤️" branding

---

## Design
- **Dark theme** with deep blacks/grays matching the bot's avatar aesthetic
- Accent color: soft white/blue glow to match the circular ring in the bot icon
- Smooth scroll animations and subtle hover effects on cards
- Fully responsive (mobile-friendly)
- Single-page layout with smooth anchor scrolling

