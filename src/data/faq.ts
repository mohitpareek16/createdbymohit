export interface FaqItem {
  slug: string
  question: string
  shortAnswer: string
  body: FaqSection[]
  relatedSlugs?: string[]
}

export interface FaqSection {
  heading?: string
  paragraphs: string[]
  bullets?: string[]
}

export const FAQS: FaqItem[] = [
  {
    slug: 'ai-automation-cost-india',
    question: 'How much does AI automation cost for a small business in India?',
    shortAnswer: 'Most small business AI automation projects in India range from ₹25,000 to ₹3,00,000 depending on complexity — with ongoing retainer costs of ₹10,000–₹50,000 per month.',
    body: [
      {
        paragraphs: [
          "AI automation pricing in India varies significantly based on what you're automating, how many systems need to connect, and whether you need custom AI models or can use off-the-shelf tools like n8n, Make (Integromat), or Zapier.",
          "Here's an honest breakdown of what most small businesses in India actually spend:",
        ],
      },
      {
        heading: 'Simple automations (₹25,000 – ₹75,000)',
        paragraphs: [
          "This covers single-workflow automations with no-code tools: automatically sending WhatsApp follow-ups when a lead fills a form, routing enquiries to the right team member, or syncing data between two apps (like Shopify orders into a Google Sheet or Zoho CRM).",
          "These can often be set up in 1–2 weeks and run with minimal maintenance.",
        ],
      },
      {
        heading: 'Mid-complexity automations (₹75,000 – ₹1,50,000)',
        paragraphs: [
          "Multi-step workflows that touch 3–5 different tools, involve conditional logic (if this customer spent X, do Y; if not, do Z), or include AI components like GPT-powered email drafting, document parsing, or auto-classifying support tickets.",
          "A common example: a real estate agency's lead pipeline — capture from web form, verify via WhatsApp chatbot, auto-assign to agent based on area, create follow-up sequence, log to CRM, and alert manager on high-value leads. This is a 3–4 week project.",
        ],
      },
      {
        heading: 'Complex / enterprise automations (₹1,50,000 – ₹3,00,000+)',
        paragraphs: [
          "Custom AI agents, deeply integrated multi-department workflows, or automations that connect with proprietary software (custom ERPs, legacy systems) fall in this range.",
          "These projects typically involve multiple integration points, error handling, monitoring dashboards, and team training.",
        ],
      },
      {
        heading: 'Ongoing maintenance',
        paragraphs: [
          "Most automations need some level of monitoring — tools update their APIs, business processes change, volumes scale. Budget ₹10,000–₹50,000/month for retainer support depending on complexity.",
          "The ROI calculation is straightforward: if an automation saves your team 40 hours/month of manual work at ₹500/hour, that's ₹20,000 in saved labour every month — most projects pay for themselves within 3–6 months.",
        ],
      },
    ],
    relatedSlugs: ['what-can-be-automated-with-ai', 'how-long-to-build-ai-workflow'],
  },
  {
    slug: 'what-can-be-automated-with-ai',
    question: 'What business processes can actually be automated with AI?',
    shortAnswer: 'Lead capture, customer support, invoicing, inventory alerts, social media scheduling, document processing, and employee onboarding are among the most common and high-ROI processes businesses automate first.',
    body: [
      {
        paragraphs: [
          "The honest answer: almost any process that follows a repeatable pattern and doesn't require genuine human judgement can be automated. The question is whether the time saved justifies the setup cost — which depends on how often the task runs and how much labour it currently consumes.",
          "Here are the categories where businesses in India see the clearest wins:",
        ],
      },
      {
        heading: 'Lead capture and follow-up',
        paragraphs: [
          "This is the single most common starting point. A lead comes in from your website, Instagram, or IndiaMART — and instead of a salesperson manually responding hours later, the AI system immediately sends a WhatsApp message, qualifies the lead with a few questions, assigns it to the right salesperson, and creates a task in your CRM.",
          "Response time drops from hours to seconds. Conversion typically improves 20–40% just from faster response.",
        ],
      },
      {
        heading: 'Customer support and FAQ handling',
        paragraphs: [
          "An AI chatbot trained on your product documentation, pricing, and policy can handle 60–80% of inbound support queries without human involvement — freeing your team for genuinely complex issues.",
          "For WhatsApp-heavy businesses (which is most of India's SMB market), WhatsApp Business API bots handle order status, return requests, and basic troubleshooting around the clock.",
        ],
      },
      {
        heading: 'Invoicing and payment follow-up',
        paragraphs: [
          "Trigger invoice generation automatically when a project is marked complete. Send payment reminders at 7, 14, and 30 days overdue. Flag outstanding invoices to the finance team. None of this needs a human to initiate it.",
        ],
      },
      {
        heading: 'Social media and content distribution',
        paragraphs: [
          "Schedule posts across platforms from a single content calendar. Auto-clip long-form videos into shorts. Repurpose blog posts into LinkedIn updates. Distribute newsletters automatically when a new post is published.",
        ],
      },
      {
        heading: 'Document processing and data extraction',
        paragraphs: [
          "AI can read supplier invoices, extract line items, and enter them into your accounting software. It can parse resumes, extract key info, and populate an HR spreadsheet. It can read signed contracts and pull out key dates, clauses, and party names.",
          "Anything where a human currently reads a document and types its contents somewhere else is a candidate.",
        ],
      },
      {
        heading: 'Inventory and operations alerts',
        paragraphs: [
          "When stock of a product drops below a threshold, auto-create a purchase order and notify the procurement team. When a delivery is delayed, auto-notify the customer. When a machine sensor reading is abnormal, alert the maintenance team before a breakdown happens.",
        ],
      },
    ],
    relatedSlugs: ['ai-automation-cost-india', 'ai-automation-whatsapp-zoho-shopify'],
  },
  {
    slug: 'ai-automation-vs-rpa',
    question: 'AI automation vs traditional RPA — what is the difference?',
    shortAnswer: 'RPA uses software robots to mimic human clicks on fixed interfaces — it breaks when anything changes. AI automation uses intelligent models that understand context, adapt to variation, and handle unstructured data like emails, documents, and conversations.',
    body: [
      {
        paragraphs: [
          "Both RPA (Robotic Process Automation) and AI automation aim to eliminate manual work — but they do it in fundamentally different ways, and the distinction matters when you're deciding which to invest in.",
        ],
      },
      {
        heading: 'What is RPA?',
        paragraphs: [
          "RPA tools (UIPath, Automation Anywhere, Blue Prism) work by recording the steps a human takes on a computer — clicking this button, copying this field, pasting it there — and replaying those steps automatically.",
          "RPA is powerful for highly structured, repetitive tasks on stable software interfaces: copying data from one system into another, generating standard reports, or running the same sequence of clicks across dozens of records.",
          "The weakness: it's brittle. Change the layout of the webpage it was trained on, update the software, or encounter a field it wasn't expecting — and the bot fails and needs to be reconfigured. RPA also can't understand unstructured input: it can't read a paragraph of text and extract meaning.",
        ],
      },
      {
        heading: 'What is AI automation?',
        paragraphs: [
          "AI automation uses machine learning models — particularly large language models (LLMs) like GPT-4, Claude, or Gemini — to understand context, extract information from unstructured sources (emails, PDFs, voice notes), make decisions based on rules you define in plain language, and take actions across connected systems.",
          "An AI automation can read an incoming email from a client, understand that it's a complaint about a delayed order, pull the order details from your e-commerce system, draft a personalised response, flag it for human review if the order value is above ₹5,000, and create a refund request — without any of this being hard-coded into a decision tree.",
        ],
      },
      {
        heading: 'Which should you choose?',
        paragraphs: [
          "For structured data on stable systems with massive volume (thousands of identical transactions per day): RPA is mature and cost-effective.",
          "For anything involving natural language, variable inputs, customer communication, document understanding, or decision-making: AI automation is the right tool.",
          "Most modern businesses benefit from a hybrid — AI for intelligence and interpretation, with structured integrations (via APIs, not screen-scraping) to move data between systems reliably.",
        ],
      },
    ],
    relatedSlugs: ['what-can-be-automated-with-ai', 'ai-automation-cost-india'],
  },
  {
    slug: 'how-long-to-build-ai-workflow',
    question: 'How long does it take to build a custom AI workflow?',
    shortAnswer: 'Simple single-step automations take 1–2 weeks. Multi-system workflows with AI components take 3–6 weeks. Complex, organisation-wide systems can take 2–4 months. The biggest time factor is usually data access and stakeholder alignment, not the build itself.',
    body: [
      {
        paragraphs: [
          "Timeline is the most common question clients ask — and the most variable. Here's how to think about it honestly.",
        ],
      },
      {
        heading: 'Discovery and scoping (1–2 weeks)',
        paragraphs: [
          "Before anything is built, the process you want to automate needs to be mapped clearly: what triggers it, what decisions get made, what data moves where, and what edge cases exist.",
          "Most businesses underestimate how much variation exists in their 'standard' processes. A good automation partner will surface these before building, not after.",
        ],
      },
      {
        heading: 'Simple automations (1–2 weeks)',
        paragraphs: [
          "A single-trigger, single-action workflow with one or two tool integrations — form submission to WhatsApp alert to CRM entry — can be live in a week or two.",
          "This assumes clean API access to all the tools involved. If tools don't have APIs (or have poor ones), timelines extend.",
        ],
      },
      {
        heading: 'Mid-complexity automations (3–6 weeks)',
        paragraphs: [
          "A workflow spanning 4–6 tools, with conditional logic, AI processing (document reading, response drafting, classification), error handling, and a monitoring setup takes 3–6 weeks.",
          "The first 2 weeks are usually the core build. The next 2 are testing with real data — this is where edge cases appear. The final week is handover, documentation, and team training.",
        ],
      },
      {
        heading: 'Complex systems (2–4 months)',
        paragraphs: [
          "Multi-department workflows, custom AI model training on your proprietary data, or deeply integrated enterprise systems take significantly longer.",
          "The bottleneck here is rarely the technical build — it's data access, IT security approvals, and getting sign-off from multiple stakeholders. Budget for this delay explicitly.",
        ],
      },
      {
        heading: 'The fastest path to value',
        paragraphs: [
          "Start with the process that takes the most of your team's time today and follows the most predictable pattern. Build that first, prove the ROI, then expand.",
          "The worst thing is over-engineering the first automation. Get one workflow live, learn from it in production, then improve.",
        ],
      },
    ],
    relatedSlugs: ['ai-automation-cost-india', 'what-can-be-automated-with-ai'],
  },
  {
    slug: 'ai-automation-whatsapp-zoho-shopify',
    question: 'Can AI automation work with WhatsApp, Zoho, or Shopify?',
    shortAnswer: 'Yes — WhatsApp via the Business API, Zoho via its REST API, and Shopify via webhooks and its admin API are all well-supported integration targets. Most AI automation stacks connect them in days, not weeks.',
    body: [
      {
        paragraphs: [
          "These are three of the most common integration requests for Indian businesses, and all three are well-supported. Here's how each works in practice:",
        ],
      },
      {
        heading: 'WhatsApp',
        paragraphs: [
          "WhatsApp automation requires the WhatsApp Business API — either through Meta's direct access (for larger businesses) or through a BSP (Business Service Provider) like Interakt, Wati, Gupshup, or 360dialog.",
          "Through the API, you can: send automated messages triggered by events in other systems, receive and parse incoming messages, run conversational flows (chatbots), and handle media (documents, images, voice notes).",
          "Common use cases: lead qualification bots, order confirmation and delivery updates, payment reminders, customer support bots, and appointment booking.",
          "Cost: BSP plans in India start around ₹2,000–₹5,000/month plus Meta's per-conversation charges (roughly ₹0.30–₹0.55 per conversation for service messages).",
        ],
      },
      {
        heading: 'Zoho',
        paragraphs: [
          "Zoho has one of the most comprehensive API suites of any business software stack — every product (CRM, Books, Inventory, Desk, Projects, People) has a well-documented REST API.",
          "This means any automation tool — n8n, Make, Zapier, or custom code — can read from and write to Zoho reliably. Triggers like 'new lead added to CRM' or 'invoice status changed to paid' can kick off downstream workflows in other systems.",
          "Zoho also has its own automation tool (Zoho Flow) which can be useful for Zoho-to-Zoho workflows, though n8n or Make gives more flexibility for cross-platform automations.",
        ],
      },
      {
        heading: 'Shopify',
        paragraphs: [
          "Shopify is built for integrations. It exposes webhooks for every major event (order created, order fulfilled, payment received, refund issued, product updated, cart abandoned) and a full admin GraphQL API for reading and writing any store data.",
          "Common Shopify automations: abandoned cart WhatsApp messages, automatic low-stock alerts to the procurement team, post-purchase review request sequences, loyalty point calculations, order routing to fulfilment centres, and syncing orders into accounting software.",
          "Shopify also has a native automation tool (Shopify Flow, available on higher plans) for store-level automations, but for cross-system workflows an external tool like n8n or Make gives more control.",
        ],
      },
      {
        heading: 'The tools that connect them',
        paragraphs: [
          "n8n, Make (formerly Integromat), and Zapier are the most common orchestration layers for connecting these platforms. n8n is particularly popular for Indian businesses that want self-hosted control over their automation infrastructure.",
          "AI capabilities (reading content, drafting responses, classifying data) are added by connecting LLM APIs (OpenAI, Anthropic, Google Gemini) as nodes within these workflows.",
        ],
      },
    ],
    relatedSlugs: ['what-can-be-automated-with-ai', 'how-long-to-build-ai-workflow'],
  },
]

export function getFaq(slug: string): FaqItem | undefined {
  return FAQS.find(f => f.slug === slug)
}

export function getAllFaqs(): FaqItem[] {
  return FAQS
}
