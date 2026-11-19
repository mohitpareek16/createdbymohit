import type { BlogPost } from './blog'

const I = '/blog/agent-skills'

export const AGENT_SKILLS_POST: BlogPost = {
  slug: 'ten-skills-that-teach-your-ai-agent-taste',
  title: 'Ten Skills That Teach Your AI Agent Taste',
  subtitle: 'Free, mostly one-line installs that stop Claude Code, Codex and Cursor from shipping the same generic interface every time.',
  category: 'Design & Digital Products',
  readTime: '9 min read',
  date: 'November 2026',
  cover: `${I}/cover.webp`,
  published: true,
  body: `Ask an AI coding agent for a landing page and you can usually guess the result before it loads: a purple gradient, a centred headline, three rounded cards with icons, and a beige section that looks like every other beige section on the internet. People have started calling it AI slop.

The model isn't the problem. It has no taste because nobody gave it any. It doesn't know your brand, your typography rules or which patterns to avoid, so it falls back to the average of everything it has seen.

**Skills** fix that. A skill is a folder of instructions, references and scripts that an agent loads when a task needs it. Install a design skill once and every interface your agent builds starts from real design decisions instead of defaults.

Here are ten worth knowing. All of them are free, and most install with a single line.

## Start with direction

### 1. Frontend Design, by Anthropic

![The anthropics/skills repository on GitHub](${I}/frontend-design.webp)
Anthropic's public skills repository, which includes the Frontend Design skill.

Anthropic's own skill is the simplest idea on this list and maybe the most important: **pick a clear aesthetic direction before writing any code.** Instead of jumping straight into components, the agent commits to a tone (editorial, brutalist, refined, playful), a type pairing and a palette, then builds everything to match.

That one step is the difference between an interface with a point of view and one that looks assembled from spare parts.

**Use it when:** you're starting anything new and want the agent to think like a designer first.
**Where:** [github.com/anthropics/skills](https://github.com/anthropics/skills)

### 2. Impeccable

![Impeccable's website: the missing design vocabulary for agents](${I}/impeccable.webp)
Impeccable shows a before-and-after of the patterns it removes, such as the "AI beige" background and the italic-serif kicker.

Impeccable calls itself "the missing design vocabulary for agents". It covers the whole lifecycle in one skill: **shape, critique, polish and animate.** Commands like \`/polish\`, \`/distill\` and \`/clarify\` let you point the agent at an existing screen and improve it, not just generate new ones.

Its best feature is that it names the clichés it removes, so the agent learns *why* something looks generic.

**Use it when:** you already have an interface and it feels almost right.
**Where:** [impeccable.style](https://impeccable.style)

### 3. Taste Skill

![Taste Skill: the anti-slop frontend framework for AI agents](${I}/taste-skill.webp)
Taste Skill's site, with example interfaces built using it.

Taste Skill gives you **dials for variance, motion and density**, so you decide how adventurous, animated and packed an interface should be instead of leaving it to chance. Before the agent ships, it runs a **pre-flight check** against common slop patterns.

\`\`\`
npx skills add Leonxlnx/taste-skill
\`\`\`

**Use it when:** you want control over the *feel* of a design, not just its layout.
**Where:** [tasteskill.dev](https://tasteskill.dev)

## Systems you can borrow

### 4. Hallmark

![Hallmark: the design skill that ends AI slop](${I}/hallmark.webp)
Hallmark's site, showing designs across web and mobile built with its themes.

Hallmark ships **21 themes, ready-made page structures and 58 quality checks.** It's the fastest way to get an agent from blank page to something composed, and the checks catch the small mistakes that make AI work look unfinished. It works in Claude Code, Codex and OpenCode.

\`\`\`
npx skills add nutlope/hallmark -g
\`\`\`

**Use it when:** you need a strong starting point quickly.
**Where:** [usehallmark.com](https://usehallmark.com)

### 5. UI UX Pro Max

![UI UX Pro Max: design intelligence](${I}/ui-ux-pro-max.webp)
UI UX Pro Max's site, with its library of styles, palettes and patterns.

Think of UI UX Pro Max as a design reference library your agent can search. It covers **UI styles, colour palettes, font pairings, chart types, landing-page patterns and UX guidelines**, so recommendations come from a curated source instead of whatever the model remembers. It supports Claude Code, Cursor, Windsurf, GitHub Copilot, Codex and more.

**Use it when:** you want the agent to justify its choices against established patterns.
**Where:** [uupm.cc](https://uupm.cc)

## Make it yours

### 6. Hue

![Hue: no more generic UI with Claude or Codex](${I}/hue.webp)
Hue turns a URL or screenshot into a reusable design language.

Hue is open source and does something clever: **drop in a URL or a screenshot of any brand and it captures that brand as a design system**, then turns it into a skill. From then on, every component your agent builds matches that brand.

**Use it when:** you're building for an existing brand and consistency matters more than novelty.
**Where:** [hueapp.io](https://hueapp.io)

### 7. Extract DESIGN.md, from Google Stitch

![Google Stitch: design at the speed of AI](${I}/stitch-design-md.webp)
Google Stitch, whose skill extracts a DESIGN.md from an existing codebase.

This one works in the other direction. Google Stitch's skill **reads an existing codebase and extracts its design tokens and patterns into a \`DESIGN.md\` file**: colours, type, spacing and components. That file then becomes the source of truth for anyone, or any agent, working on the product next.

**Use it when:** you're inheriting a product and need to understand its design system before changing it.
**Where:** [stitch.withgoogle.com](https://stitch.withgoogle.com)

### 8. Interface Design

![Interface Design, a Claude Code plugin](${I}/interface-design.webp)
Interface Design saves design decisions so they survive between conversations.

Claude forgets your design decisions between conversations. This Claude Code plugin fixes that by **saving decisions to \`.interface-design/system.md\` and loading them automatically** every time. It's especially good at the interfaces agents usually get wrong: **dashboards and admin panels with real hierarchy.**

\`\`\`
/plugin marketplace add Dammyjay93/interface-design
\`\`\`

Then run \`/plugin menu\` to install it, and restart Claude Code.

**Use it when:** you're building internal tools or anything data-heavy over many sessions.
**Where:** [interface-design.dev](https://interface-design.dev)

## The finishing details

### 9. Better Typography, from Jakub Krehel's skills

![Jakub Krehel's collection of agent skills](${I}/better-typography.webp)
Jakub Krehel's skills collection covers animation, polish, accessibility and product writing.

Typography is where AI interfaces most often give themselves away. This collection includes skills for **type scale, line height, measure and font loading by role**, plus animation, UI polish, accessibility and product writing.

\`\`\`
npx skills add jakubkrehel/skills
\`\`\`

**Use it when:** the layout is right but the page still doesn't read well.
**Where:** [jakub.kr/skills](https://jakub.kr/skills)

### 10. shadcn/ui

![The shadcn/ui skills documentation](${I}/shadcn-ui.webp)
The official shadcn/ui skill reads your project's components.json before writing code.

If your project uses shadcn/ui, install the official skill. It **reads your \`components.json\`**, so the agent knows your framework, aliases, installed components and icon library, and **adds or updates components the shadcn way** on the first try instead of inventing its own.

\`\`\`
pnpm dlx skills add shadcn/ui
\`\`\`

**Use it when:** your stack is built on shadcn/ui.
**Where:** [ui.shadcn.com/docs/skills](https://ui.shadcn.com/docs/skills)

## How I'd combine them

You don't need all ten. They overlap, and stacking too many gives the agent conflicting instructions. A sensible setup looks like this:

- **One for direction:** Frontend Design or Taste Skill, so every project starts with a point of view.
- **One for your system:** Hue for an existing brand, Extract DESIGN.md for an existing codebase, or Interface Design to remember decisions as you go.
- **One for your stack:** shadcn/ui if you use it.
- **One for polish:** Impeccable or Better Typography for the final pass.

## Skills don't replace judgement

These tools raise the floor. They stop an agent from making the obvious mistakes, and they're a real step up from prompting alone. But they don't know your users, your business or the problem the interface is meant to solve. That part is still design work: deciding what the product should do before deciding how it should look.

Use skills to get the agent to a good draft quickly. Then spend your time on the decisions only a person who understands the problem can make.

If you're building a product and want help with that part, [tell us what you're working on](/#contact).`,
}
