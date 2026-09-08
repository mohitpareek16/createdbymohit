export interface BlogPost {
  slug: string
  title: string
  subtitle: string
  category: string
  readTime: string
  date: string
  cover: string
  body: string
  published: boolean
}

export const POSTS: BlogPost[] = [
  {
    slug: 'why-your-portfolio-isnt-working',
    title: "Why Your Portfolio Isn't Getting You Work",
    subtitle: 'The real reason clients pass — and how to fix it before your next pitch.',
    category: 'Career',
    readTime: '5 min read',
    date: 'July 2026',
    cover: '/blog/portfolio.jpg',
    published: true,
    body: `Most designers think their portfolio isn't working because the work isn't good enough. That's almost never the reason.

The real problem is narrative. Clients don't hire process — they hire outcomes. When they open your portfolio, they're asking one question: "Can this person solve a problem like mine?" If the answer isn't obvious in the first 30 seconds, you've already lost them.

## The three failure modes

**Too much work, not enough story.** Showing 20 projects signals that you're a generalist who'll take anything. It also means your best work gets buried. Pick 3–5 projects. Make each one a complete argument.

**Beautiful screens, no context.** A gorgeous UI mockup sitting alone on a white background tells me nothing. What was the problem? What did you try? What failed? The case study is the differentiator, not the final screen.

**Positioning for everyone.** If your portfolio could belong to any designer anywhere, it belongs to no one. Pick a lane — startup product, fintech, SaaS — and let your work reflect that choice. Generalists are hired for budget work. Specialists are hired for real money.

## What to do instead

Start from the outcome and write backwards. Lead every case study with a one-line result: "Redesigned onboarding. Activation went from 31% to 67% in 6 weeks." Then explain how you got there.

Write the context first. Before any screenshots, answer: What was the product? What was breaking? Why did it matter? Who was I designing for? This gives the work meaning.

Then show your thinking. Not every wireframe — the key decisions. The moment you chose one direction over another. What you learned when users told you you were wrong.

Then the outcome. What changed in the metrics. What shipped. What you'd do differently.

That's a case study. Everything else is just screenshots.

## The positioning fix

Look at your last five inquiries. What did they have in common? That's the market that already wants you. Lean into it. Reframe your hero headline around that specific audience.

"UI/UX Designer" means nothing. "Product designer for early-stage B2B SaaS" means something. It will turn off some people — that's the point. The ones it attracts will pay more and argue less.

Your portfolio isn't a resume. It's a pitch. Make it for one specific person with one specific problem.`,
  },
  {
    slug: 'the-one-thing-startups-get-wrong',
    title: 'The One Thing Startups Get Wrong About Design',
    subtitle: "They hire a designer to make things beautiful. They should be hiring one to make decisions fast.",
    category: 'Product',
    readTime: '4 min read',
    date: 'June 2026',
    cover: '/blog/startups.jpg',
    published: true,
    body: `When a startup finally decides to "invest in design," the brief is usually some version of: make this look better, fix the UI, make us look like a real company.

That's the wrong job.

Design's real leverage at an early startup isn't polish — it's speed of decision-making. A good designer doesn't make things pretty. They stop arguments. They make the thing concrete so everyone can react to it instead of talking past each other.

## Why early design investments fail

The hire is wrong. A UI designer who's great at visual craft will make your app look better. They will not fix your onboarding problem, help you find product-market fit, or tell you that the feature you just spent three months building solves a problem nobody has.

You need a product designer. Someone who thinks in systems. Who asks "why" before they open Figma. Who is comfortable saying "I don't think we should build this at all."

The process is backwards. Most startups build, then design. That means the designer's job is to decorate finished decisions. The real value is in the front half — in the decisions themselves.

Design thinking applied to a bad idea still produces a bad idea, just with rounder corners.

## What actually works

Bring design into the room earlier. Not to produce deliverables — to ask the questions that reveal assumptions. "What does success look like for this user?" "How does this work if they're on a phone with bad internet?" "What happens when the data is empty?"

Use design to make your thinking visible. A wireframe in a product meeting is worth an hour of verbal description. It forces specificity. People will immediately point to things that are wrong, which means you've found the problems before you've written any code.

Hire for judgment, not output. The portfolio question isn't "did they make beautiful things?" It's "can I tell how they think?" A designer who can explain why they made three different choices — and which one they picked and why — is worth ten designers who can just execute.

## The metric that matters

Early-stage design success isn't measured in Dribbble shots or pixel perfection. It's measured in: how fast does the team align after a design review? How often do we ship something and immediately know it's wrong?

Great design at an early startup means fewer bad bets. That's it.`,
  },
  {
    slug: 'pricing-yourself-as-a-freelance-designer',
    title: 'Pricing Yourself as a Freelance Designer',
    subtitle: "You're probably charging 40% less than you should. Here's how to change that.",
    category: 'Business',
    readTime: '7 min read',
    date: 'May 2026',
    cover: '/blog/pricing.jpg',
    published: true,
    body: `The conversation every freelance designer dreads: the client asks for your rate. You say a number. They say nothing. The silence feels like judgment. You immediately want to say "but I'm flexible."

Stop.

The number you're afraid to say is probably the right number. The silence isn't discomfort — it's evaluation. And the instinct to lower your price before they even respond is the most expensive mistake you'll make this year.

## Why you're undercharging

You're pricing based on your hours, not your value. An hour of your time plus access to your Figma license plus your experience plus the risk you're absorbing plus the outcome you're creating — that's what you're selling. Not an hour.

You're comparing yourself to the wrong market. If your reference point is what someone on Fiverr charges, you've already lost. You're not competing there. Don't price as if you are.

You're scared of the no. Every designer I've coached who raised their rates dramatically got some no's — and also got more yes's that paid more, moved faster, and valued the work more. The clients you lose when you raise your rates are almost always the clients you should lose.

## How to figure out your actual rate

Start with your cost of living plus the tax, equipment, software, insurance, and time overhead. Divide that by 20 billable days a month. That's your floor — the rate at which you'd be working full-time to barely survive. Never quote this. It's not a rate; it's a wake-up call.

Then work backwards from outcomes. If a redesign of a client's onboarding flow increases activation by 20%, and that's worth ₹10L in additional annual revenue for them, what's 10% of that? That's a reasonable project fee for 4 weeks of work. Not an hourly rate — an outcome-based price.

## The rate increase script

"My rate for this kind of project is ₹X. That covers [specific deliverables] over [timeline]. Does that work for your budget?"

No apology. No hedge. No "I usually charge less but." State it as fact. Then stop talking.

If they push back, the answer is: "I understand. What budget were you working with?" Now you have information. You can scope differently, phase the work, or simply say it's not a fit — which is also fine.

The clients who argue hardest about price before you've started are the ones who will argue hardest about scope, feedback, revisions, and payment. Price is a filter. Use it.

## What to actually charge

Design audit: ₹25,000–50,000 for a thorough review with a written report.

UI/UX project: ₹50,000–1,50,000+ per month, depending on scope.

Full product design (0→1): ₹2,00,000–5,00,000+ for a complete engagement.

Design system: ₹80,000–2,00,000+ depending on complexity.

These aren't maximums. They're starting points for a designer with 3+ years of real product experience.

Raise your prices every year whether you feel ready or not. The market moves up. Your experience compounds. Your instincts are worth more today than they were last year. Price accordingly.`,
  },
  {
    slug: 'design-systems-for-startups',
    title:"Design Systems for Startups That Think They Don't Need One",
    subtitle: "You don't need a design system. Until you do. Then you needed it two years ago.",
    category: 'Design',
    readTime: '6 min read',
    date: 'April 2026',
    cover: '/blog/systems.jpg',
    published: true,
    body: `"We're moving too fast to think about a design system right now."

I've heard this at every company that later called me in to fix a product that had become unmaintainable. The button variants that multiply like weeds. The spacing that's 8px here and 12px there and nobody can remember why. The five different shades of blue that are all supposed to be "the" blue.

This is what moving fast without a system looks like in year two.

## What a design system actually is

Not a 200-component library with three weeks of documentation. Not a multi-month design project. Not something only Google and Airbnb have.

At its simplest, a design system is an agreed set of decisions so that each person doesn't have to remake the same choices independently.

Color: these are the colors we use, and only these.
Type: these are the sizes and weights, in this hierarchy.
Spacing: we use multiples of 8.
Components: here's how a button works.

That's it. You can document this in two days and Figma components in a week.

## Why to build one early

The cost of inconsistency compounds. A button with slightly wrong padding shipped this sprint takes 2 minutes to fix now. After 6 months of copy-paste development across 40 screens, it's a sprint of cleanup.

Onboarding new designers and developers is 5× faster when there's a system. "What border radius do we use?" stops being a question.

Design and engineering alignment gets dramatically easier. The design system is the shared language. Developers stop guessing at specs. Designers stop producing one-off components.

## The startup-sized version

You don't need to boil the ocean. Start with:

**Color tokens.** Name them semantically, not by value. Not "#2563EB" but "color-primary". Not "#6B7280" but "color-muted". Now when your brand changes, you change one value.

**Type scale.** Pick 5 sizes. H1, H2, H3, body, caption. Set the weights. Done. You can add to it, but never from below.

**Spacing system.** 4px grid, multiples of 4 or 8. Teach it to everyone who touches the product. Enforce it in code review.

**4–6 key components.** Button, input, card, badge, modal, toast. Build them once. Document the variants. Refer to them everywhere.

**One source of truth.** Figma library connected to a token file, or tokens in code that the designers also use. Choose one; it doesn't matter which.

## When to revisit it

When two designers are working in parallel. When handoff documentation is taking longer than design. When you're shipping a new marketing page and copying components from a product screen because that's the only place they live.

Don't wait for the pain to be unbearable. The best time to build a system is when you have exactly one designer and two developers and a product that works.

That's the moment everything is still small enough to fix properly.`,
  },
  {
    slug: 'giving-design-feedback',
    title: 'How to Give Design Feedback That Actually Helps',
    subtitle: "Most feedback kills momentum. This is what good feedback looks like — and how to get it from clients.",
    category: 'Process',
    readTime: '5 min read',
    date: 'March 2026',
    cover: '/blog/feedback.jpg',
    published: true,
    body: `Design feedback is one of the most expensive things a team does badly. A single poorly run feedback session can send a designer down a week-long rabbit hole, produce a worse outcome than before, and damage the trust between design and the rest of the business.

I've been on both sides of this for six years. Here's what actually works.

## The feedback that doesn't help

"I don't like this."

Unusable. No direction. A designer who hears this can only guess what to change and why, and the guess will often be wrong.

"Can we make it pop more?"

A request disguised as feedback. "Pop" means different things to everyone who says it. The designer will interpret it one way. You'll receive what they made. You'll say it still doesn't pop. Repeat until everyone is exhausted.

"What if we tried [specific thing]?" too early.

Solution-framing before problem-framing. If you jump to "what if the button was red?" before explaining why the current button isn't working, you've taken over the designer's job. The designer will now build the red button — and the problem will still be there.

## What works instead

Start with what's working. This is not politeness. It gives the designer information about what to protect. If you don't say it, they can't know.

State the problem you're solving. Not the solution — the problem. "Users are dropping off before they hit this button. I think visibility might be part of it." Now the designer can address visibility, or offer you three other ways the problem might be solved that you hadn't considered.

Ask questions before you suggest solutions. "What were you trying to communicate with this layout?" "Is there a reason this is below the fold?" You'll often find there was a reason, and it's a good one.

Be specific about context, not aesthetics. "This feels too busy" is aesthetic. "I'm worried a first-time user will be overwhelmed before they understand the value" is context. One is fixable. The other is a vibe.

## Getting better feedback from clients

The feedback you receive reflects the brief you gave. If clients are saying things like "make the logo bigger" and "I don't know, it just doesn't feel right," the presentation structure is the problem.

Before you show anything, frame the goal: "We're looking at three approaches to the onboarding flow. Each solves the activation problem differently. I'll walk you through the thinking behind each one, then I'd love your reaction to how well each one would land with [specific user type]."

You've now told them: there's a goal, there are options, there's a rationale, and the question to answer is a specific one about a specific person. Now the feedback you get will be more useful.

## The one question that fixes most feedback sessions

"What would need to be true for this to work for you?"

It moves the conversation from subjective reaction to stated requirements. It gives the designer something to respond to. And it usually surfaces the real concern — which is almost never about the design itself.`,
  },
]

export function getPost(slug: string) {
  return POSTS.find(p => p.slug === slug && p.published)
}

export function getAllPosts() {
  return POSTS.filter(p => p.published)
}

export function getNextPost(currentSlug: string): BlogPost | undefined {
  const all = getAllPosts()
  const idx = all.findIndex(p => p.slug === currentSlug)
  return all[(idx + 1) % all.length]
}
