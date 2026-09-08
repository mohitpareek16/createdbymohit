export interface GlossaryTerm {
  slug: string
  term: string
  shortDef: string
  body: GlossarySection[]
  relatedSlugs?: string[]
}

export interface GlossarySection {
  heading?: string
  paragraphs: string[]
}

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    slug: 'what-is-an-ai-agent',
    term: 'AI Agent',
    shortDef: 'An AI agent is software that perceives its environment, makes decisions, and takes actions autonomously to achieve a defined goal — without needing a human to direct each step.',
    body: [
      {
        paragraphs: [
          "An AI agent combines three capabilities that distinguish it from simpler software: perception (reading inputs from the environment — emails, messages, database records, sensor data), reasoning (using an AI model to interpret those inputs and decide what to do), and action (calling APIs, sending messages, updating records, triggering other tools).",
          "The key word is autonomously. Traditional software executes exactly the instructions it was given. An AI agent uses a language model to interpret context and decide which action to take — and can handle situations that weren't explicitly anticipated when it was built.",
        ],
      },
      {
        heading: 'How AI agents work in practice',
        paragraphs: [
          "A simple AI agent for customer support might: receive an incoming WhatsApp message, read the customer's order history from your CRM, use an LLM (like GPT-4 or Claude) to understand the question and draft a relevant response, send that response, and log the interaction — all without human involvement.",
          "More advanced agents can break down complex goals into sub-tasks, use tools (web search, calculator, database queries) to gather information, reason about the results, and take multi-step actions over time.",
        ],
      },
      {
        heading: 'Single agents vs multi-agent systems',
        paragraphs: [
          "A single agent handles one defined job. A multi-agent system coordinates multiple specialised agents — one that handles intake, one that does research, one that drafts responses, one that reviews them — working together on a task that would be too complex for any one agent alone.",
          "Multi-agent architectures are increasingly common in enterprise automation and are the direction the field is moving.",
        ],
      },
      {
        heading: "Why it matters for your business",
        paragraphs: [
          "AI agents replace the need for a human to monitor a process and react. Instead of someone checking for new leads every hour, an agent checks continuously and acts immediately. Instead of a team member reading every support email and routing it manually, an agent reads, classifies, and routes automatically.",
          "The result: faster response times, fewer errors, and your team's attention freed for work that actually requires human judgement.",
        ],
      },
    ],
    relatedSlugs: ['what-is-workflow-automation', 'what-is-no-code-ai-workflow'],
  },
  {
    slug: 'what-is-workflow-automation',
    term: 'Workflow Automation',
    shortDef: 'Workflow automation is the use of software to execute a sequence of connected business tasks automatically — moving data, triggering actions, and notifying people without manual intervention at each step.',
    body: [
      {
        paragraphs: [
          "Every business has workflows — sequences of tasks that have to happen in a particular order to get something done. A sales workflow: lead comes in → qualify → assign to salesperson → follow up → close → onboard. An invoice workflow: service completed → generate invoice → send → chase if unpaid → reconcile when paid.",
          "Workflow automation replaces the humans who would otherwise need to initiate and track each step of these sequences.",
        ],
      },
      {
        heading: 'Trigger → Action logic',
        paragraphs: [
          "Every automated workflow starts with a trigger — the event that kicks it off. A form submission. A new row in a spreadsheet. A payment received. A certain time of day.",
          "The trigger causes one or more actions: send an email, create a record, update a field, call an API, send a WhatsApp message, create a task, notify a Slack channel.",
          "Between trigger and action, conditions can be added: only do this if the order value is above ₹10,000; only notify the manager if it's been 48 hours without a response; only send the upsell message if the customer made a purchase in the last 30 days.",
        ],
      },
      {
        heading: 'Tools used to build workflow automations',
        paragraphs: [
          "No-code tools like n8n, Make (Integromat), and Zapier let non-developers build complex multi-step workflows using visual interfaces. They connect to hundreds of apps via pre-built integrations.",
          "For more complex logic or custom integrations, Python scripts or Node.js functions can be used as steps within a workflow — either hosted independently or embedded within the no-code tools.",
          "When AI capabilities are needed (understanding text, drafting content, classifying inputs), LLM APIs (OpenAI, Anthropic, Google) are added as nodes within these workflows.",
        ],
      },
      {
        heading: 'The difference between workflow automation and AI automation',
        paragraphs: [
          "Standard workflow automation is deterministic — the same input always produces the same output, because every path through the workflow was explicitly defined.",
          "AI automation is probabilistic — an AI model interprets the input and decides what to do, which means it can handle variation and ambiguity that would break a rigid workflow.",
          "Most modern automation projects use both: structured workflow logic to route and move data reliably, with AI models at the decision points where interpretation is needed.",
        ],
      },
    ],
    relatedSlugs: ['what-is-an-ai-agent', 'what-is-business-process-automation'],
  },
  {
    slug: 'what-is-business-process-automation',
    term: 'Business Process Automation (BPA)',
    shortDef: 'Business Process Automation (BPA) is the use of technology to perform recurring business tasks or processes where manual effort can be replaced — reducing cost, errors, and time while improving consistency.',
    body: [
      {
        paragraphs: [
          "BPA is a broad term that covers any technology-enabled automation of business operations — from simple email triggers to complex AI-driven workflows. It's the category that contains workflow automation, RPA, and AI automation as specific techniques.",
          "The goal is always the same: replace a human doing a repetitive, rule-based task with a system that does it faster, more consistently, and at lower cost.",
        ],
      },
      {
        heading: 'What makes a process a good BPA candidate?',
        paragraphs: [
          "High volume: the process runs many times — daily, weekly, across large numbers of customers or transactions. Even a small time saving per instance adds up.",
          "Repetitive pattern: the same steps are followed each time, with predictable inputs and outputs. Exceptions exist but are rare.",
          "Rule-based decisions: the decisions involved can be expressed as rules ('if X, do Y; if not, do Z') rather than requiring experience, intuition, or creativity.",
          "Measurable output: you can tell when the process completed correctly — which means you can verify the automation is working.",
        ],
      },
      {
        heading: 'BPA vs RPA vs AI automation',
        paragraphs: [
          "BPA is the umbrella term. Under it: RPA (Robotic Process Automation) automates by mimicking human actions on software interfaces — clicking, typing, copying — without needing API access. It's useful for legacy systems with no API. AI automation uses machine learning to handle unstructured data and variable inputs. Most modern BPA projects combine structured workflow logic with AI models and API-based integrations.",
        ],
      },
      {
        heading: 'Where Indian businesses start',
        paragraphs: [
          "The most common BPA starting points for Indian SMBs are lead management (capturing, qualifying, and assigning leads without manual effort), payment and invoice workflows, and customer communication (order updates, support responses, appointment reminders).",
          "These have the clearest ROI, the most off-the-shelf tooling, and the shortest time to value — which makes them the right place to build confidence before tackling more complex processes.",
        ],
      },
    ],
    relatedSlugs: ['what-is-workflow-automation', 'what-is-rpa'],
  },
  {
    slug: 'what-is-rpa',
    term: 'RPA (Robotic Process Automation)',
    shortDef: 'RPA is software that mimics human actions on computer interfaces — clicking, typing, copying, and pasting — to automate repetitive tasks without needing access to a system\'s underlying code or API.',
    body: [
      {
        paragraphs: [
          "Robotic Process Automation (RPA) uses software bots that interact with applications the same way a human user would — through the graphical interface. An RPA bot can open a browser, navigate to a website, log in, copy data from a table, paste it into another system, click submit, and repeat this thousands of times without fatigue.",
          "The defining feature: RPA doesn't need the underlying system to have an API. It works at the UI layer, which makes it valuable for automating older enterprise software (SAP, legacy ERPs, government portals) that wasn't built with integration in mind.",
        ],
      },
      {
        heading: 'When RPA is the right choice',
        paragraphs: [
          "Legacy systems with no API: if you need to extract data from a government portal, an old accounting system, or any software that doesn't expose integration points, RPA is often the only practical option.",
          "High-volume, identical transactions: copying hundreds of rows from one system into another, running the same report extraction across many accounts, processing structured forms at scale.",
          "Stable interfaces: RPA works best when the UI it's automating doesn't change frequently. A software update that rearranges a page can break an RPA bot.",
        ],
      },
      {
        heading: "RPA's limitations",
        paragraphs: [
          "Brittleness: RPA bots fail when the interface changes — a button moves, a field is renamed, a pop-up appears unexpectedly. Maintenance is a real ongoing cost.",
          "No intelligence: classic RPA can't understand what it's reading. It copies data without comprehending it, which means any task requiring judgement (classifying an email, interpreting a complaint, handling an exception) requires a human or an AI layer on top.",
          "Modern RPA platforms (UIPath, Automation Anywhere) are adding AI capabilities — document understanding, natural language processing — to address this, creating what's sometimes called 'Intelligent Process Automation' (IPA).",
        ],
      },
      {
        heading: 'RPA vs API-based automation',
        paragraphs: [
          "If a system has a well-documented API, API-based automation (using tools like n8n, Make, or custom code) is almost always preferable to RPA. API integrations are faster, more reliable, and less fragile than UI-based bots.",
          "Reserve RPA for the cases where no API exists or where the build cost of a custom integration significantly outweighs the RPA approach.",
        ],
      },
    ],
    relatedSlugs: ['what-is-business-process-automation', 'what-is-workflow-automation'],
  },
  {
    slug: 'what-is-no-code-ai-workflow',
    term: 'No-Code AI Workflow',
    shortDef: "A no-code AI workflow is an automated process built using visual, drag-and-drop platforms — without writing software code — that incorporates AI models to handle tasks like understanding text, generating content, or making intelligent decisions.",
    body: [
      {
        paragraphs: [
          "No-code AI workflows sit at the intersection of two trends: the democratisation of automation tooling (platforms like n8n, Make, and Zapier that let non-developers build complex integrations) and the accessibility of powerful AI models via API (GPT-4, Claude, Gemini, and others that can now be called from any integration platform).",
          "The result: a business owner or operations manager can build an AI-powered customer follow-up system, a document processing pipeline, or a smart support bot — without writing a single line of code.",
        ],
      },
      {
        heading: 'What "no-code" actually means',
        paragraphs: [
          "No-code doesn't mean no logic — it means that logic is expressed through a visual interface rather than in a programming language. You drag in a trigger node, connect it to a condition node, connect that to an AI model node, connect that to an action node.",
          "The platforms handle the underlying code. You define what happens; they handle how it runs.",
        ],
      },
      {
        heading: 'Popular no-code AI platforms',
        paragraphs: [
          "n8n: open-source, can be self-hosted (important for data privacy), has native AI nodes including LLM connectors, and supports hundreds of app integrations. Popular with technical founders and businesses that want full control.",
          "Make (Integromat): visual, cloud-hosted, strong library of app connectors, good for non-technical users. Pricing based on operations per month.",
          "Zapier: the most accessible but least flexible of the three. Best for simple, two-step automations. AI capabilities are more limited than n8n or Make.",
          "Voiceflow / Botpress: specifically for building conversational AI agents (chatbots, voice assistants) without code.",
        ],
      },
      {
        heading: 'What you can build without code',
        paragraphs: [
          "AI-powered lead qualification: new enquiry arrives via web form → AI reads the message → classifies as high/medium/low priority → routes to the right team member → sends a personalised first response.",
          "Document processing: invoice PDF arrives by email → AI extracts vendor name, amount, line items, due date → creates record in accounting software → notifies finance team.",
          "Content workflows: blog post published → AI generates social media captions for three platforms → schedules posts → sends newsletter summary.",
          "Support automation: customer WhatsApp message received → AI reads and classifies (order issue / billing / general) → fetches relevant account data → drafts response → sends if confidence is high, escalates to human if not.",
        ],
      },
      {
        heading: 'The limits of no-code',
        paragraphs: [
          "No-code works well for automations built on top of well-supported integrations with standard data flows. When you need highly custom logic, proprietary API integrations with complex authentication, real-time high-volume processing, or edge cases the visual builder can't express — code is usually the right answer.",
          "Many mature automation builds start no-code and add code components as specific requirements demand it. The two approaches complement each other.",
        ],
      },
    ],
    relatedSlugs: ['what-is-an-ai-agent', 'what-is-workflow-automation'],
  },
]

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return GLOSSARY_TERMS.find(t => t.slug === slug)
}

export function getAllGlossaryTerms(): GlossaryTerm[] {
  return GLOSSARY_TERMS
}
