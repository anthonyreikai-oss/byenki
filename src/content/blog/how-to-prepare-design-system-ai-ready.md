---
titulo: "How to prepare your design system for the AI era"
fecha: 2026-06-01
lang: en
autor: By Enki
categoria: Design & Technology
etiquetas:
  - design system
  - artificial intelligence
  - Figma
  - design tokens
  - AI-ready
  - prototyping
  - digital agencies
  - web design
meta_descripcion: "Practical guide to prepare your design system for AI: spec files, token layer, automated audits, and real examples from Atlassian, IBM Carbon, and Nordhealth. Adapted for design teams in Latin America."
palabras_clave: "AI-ready design system, prepare design system for AI, Figma AI, design tokens, spec files, AI prototyping, web design Dominican Republic"
tiempo_lectura: 9 min read
schema_type: FAQ
---

# How to prepare your design system for the AI era

**Direct answer:** AI-generated prototypes fail not because of a lack of intelligence, but because of a lack of **structured context**. The solution isn't better prompting — it's transforming your design system into something an AI can **read, interpret, and reuse**. This is achieved with three layers: (1) specification files (spec files) in Markdown that document every design decision, (2) a token layer that lists all the variables the AI can use, and (3) audit scripts that detect what the AI got wrong. Hardik Pandya, a systems designer at Atlassian, documented this approach, and the results are striking: teams that structure their design systems for AI consumption drastically reduce inconsistencies in generated prototypes. Companies like Atlassian, IBM (Carbon), and Nordhealth already publish their design systems in formats that AIs can read directly.

---

## The problem: why AI produces inconsistent prototypes

Vitaly Friedman, editor of Smashing Magazine and UX expert, identified the pattern in June 2026: AI-generated prototypes don't deliver consistent results because design systems are full of **small inconsistencies** that a human overlooks but a machine amplifies:

- Design decisions made but never documented
- Hard-coded values that were never cleaned up
- Excessive reliance on the AI "deciphering" mockups or visual flows on its own
- Lack of context about how and why certain decisions were made

The result: prototypes that look good but violate the system's rules, components with invented spacing, colors that don't exist in the palette, and missing interactive states.

---

## The mindset shift: design decisions are infrastructure

The fundamental principle Pandya proposes from Atlassian is simple but transformative: **treat every design decision as infrastructure**.

This means that every time you make a decision — not just about design, but even about how to prioritize work or how decisions are made on your team — that decision must **exist in a specification file that the AI can consume**.

It's not enough for it to be in the lead designer's head. It's not enough for it to be in a Slack message. It's not enough for it to be implicit in Figma. It has to be **documented in structured text** that feeds the AI.

---

## The three layers of an AI-Ready design system

Based on the work of Hardik Pandya (Atlassian) documented in Smashing Magazine, a design system prepared for AI is built on three layers:

### Layer 1: Specification files (Spec Files)

These are structured Markdown files that contain:
- Spacing and composition rules
- Color decisions (when to use each token, not just the list)
- Component usage guidelines (not just which component exists, but **when and why to use it**)
- Design priorities and principles
- Examples of what TO do and what NOT to do (do's and don'ts)
- Context about how decisions are made on the team

**Why Markdown and not Figma:** text files are cheaper for an AI to process and much more precise. When the AI reads a spec file, it receives explicit instructions. When the AI tries to decode a Figma mockup, it's guessing.

**Example spec file structure** (inspired by Atlassian):

```
design-system/
├── principles.md          # Principles and priorities
├── spacing.md             # Spacing rules
├── color.md               # Color tokens and when to use them
├── typography.md          # Typographic scales
├── components/
│   ├── button.md          # Button component usage guide
│   ├── card.md            # Card component usage guide
│   └── form.md            # Form patterns
├── accessibility.md       # Accessibility requirements
└── decision-log.md        # Decision log and their context
```

---

### Layer 2: Token layer

Lists and keeps updated **all tokens** used in the design system. The AI always chooses from a closed set of named variables instead of inventing plausible values on the fly.

What this layer should include:
- Color tokens (primary, secondary, semantic)
- Spacing tokens (fixed scale, never arbitrary values)
- Typographic tokens (families, sizes, weights, line-heights)
- Shadow, border, and radius tokens
- Breakpoint tokens

**The principle:** if a value doesn't have a name, the AI will invent it. And it will invent it badly.

---

### Layer 3: Audit scripts (Audit Layer)

A script — which can be traditional software, not necessarily AI — scans the generated prototype and detects:
- Hard-coded values (colors, spacing, fonts that don't come from tokens)
- Detached instances from the system
- Missing interactive states (hover, focus, active, disabled)
- Accessibility violations
- Inconsistencies with the rules defined in the spec files

The ideal flow is: **the AI generates → the script audits → the AI receives the feedback and corrects → audits again**. It's an automated continuous improvement cycle.

Additionally, when the design system receives updates, a **sync routine** flags which spec files need to be updated. The goal: ensure the AI always reads current specifications, not documents written against an obsolete version.

---

## Key tool: FigmaLint

TJ Pitre created [FigmaLint](https://www.figma.com/community/plugin/1521241390290871981/figmalint), a free Figma plugin that automates much of a design system's audit:

- Audits tokens, states, and accessibility
- Links tokens to components
- Renames layers automatically
- Detects detached instances
- Identifies missing interactive states
- Finds hard-coded values
- Prepares design documentation

For teams working with **external vendors or third-party agencies** that deliver their own design systems and component libraries, FigmaLint is invaluable: it lets you validate the quality of what you receive before integrating it.

---

## Context Engineering: the 5 levels you need to know

Matthew Alverson, referenced by Addy Osmani (Google), proposes a model of **five levels of context engineering** for working with AI. The more structured context you give the model, the better results you'll get:

| Level | What it includes | Example |
|-------|-----------------|---------|
| 1. Basic prompt | Simple instruction | "Design a button" |
| 2. Prompt + examples | Instruction with references | "Design a button like Atlassian's" |
| 3. Prompt + rules | Instruction with constraints | "Design a button using only system tokens" |
| 4. Prompt + spec files | Instruction with complete documentation | The AI reads spacing.md + color.md + button.md before generating |
| 5. Prompt + spec + audit | Full cycle with feedback | The AI generates, the script audits, the AI corrects |

Most teams operate at level 1 or 2. AI-ready design systems operate at level 4 or 5.

---

## Real examples of AI-Ready design systems

Several organizations already publish their design systems in AI-readable formats. These are the cases documented by Vitaly Friedman in Smashing Magazine:

| Organization | System | AI-ready spec URL |
|---------------|--------|-------------------|
| Atlassian | Atlassian Design System | [atlassian.design/llms.txt](https://atlassian.design/llms.txt) |
| IBM | Carbon Design System | [carbondesignsystem.com/llms.txt](https://carbondesignsystem.com/llms.txt) |
| CMS (U.S.) | CMS Design System | [design.cms.gov/llms.txt](https://design.cms.gov/llms.txt) |
| Nordhealth | Nordhealth Design | [nordhealth.design/ai/](https://nordhealth.design/ai/) |

The common pattern: they all use `/llms.txt` or `/ai/` as an entry point so any AI can consume the system.

---

## What does this mean for agencies and design studios in Latin America?

In markets like the Dominican Republic, where agencies and design studios operate with small teams and multiple simultaneous projects, the temptation is to think "this is for enterprises like Atlassian, not for us." That's a mistake.

The reality is that small teams are the ones that **benefit the most** from having an AI-ready design system:

1. **Less time fixing AI-generated prototypes.** If your team uses tools like Relume, V0, Galileo AI, or Wix's generator, having structured spec files drastically reduces rework.
2. **Faster onboarding.** A new designer (or freelancer) can consult the spec files instead of asking the senior designer every 10 minutes.
3. **Consistency across projects.** If you handle 5 clients simultaneously, spec files prevent each project from drifting into inconsistent decisions.
4. **Competitive advantage in pitching.** Being able to say "our design system is AI-ready" differentiates you from 95% of agencies in Santo Domingo that don't even have a documented design system.
5. **Preparation for GEO.** The same structuring techniques that make your design system readable for AI (Markdown, tokens, explicit rules) are the ones that make your web content readable for ChatGPT, Perplexity, and Google AI Overviews.

---

## Action plan: From 0 to AI-Ready in 60 days

### Weeks 1-2: Initial audit
- Install [FigmaLint](https://www.figma.com/community/plugin/1521241390290871981/figmalint) and run a complete audit of your current design system
- Identify hard-coded values, inconsistent tokens, and missing states
- Document the "current state" to establish a baseline

### Weeks 3-4: Foundational spec files
- Create `principles.md` with your team's design principles
- Create `color.md` and `spacing.md` with the tokens and usage rules
- Create `accessibility.md` with minimum requirements (contrast, focus, labels)

### Weeks 5-6: Components and context
- Document the 5 most used components in individual Markdown files
- Include in each: purpose, when to use it, when NOT to use it, variants, states
- Add do's and don'ts examples

### Weeks 7-8: Audit and synchronization
- Set up a script (it can be a manual checklist initially) to audit AI-generated prototypes
- Establish a routine: every time the design system changes, update the corresponding spec files
- Publish your `/llms.txt` or `/ai/` as an entry point

---

## Conclusion

AI won't magically solve technical debt or design debt without the right guidance. It depends on clear decisions, established priorities, and well-defined principles.

The more deliberate and precise we are in guiding the AI, the better the results will be. This requires not only cleaning up and improving design systems, but also maintaining them over time: every decision must be translated into a Markdown file the AI can consume.

It's not a one-week project. But every spec file you write today is an hour of rework you save tomorrow.

---

## Frequently Asked Questions

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an AI-ready design system?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An AI-ready design system is one whose decisions, rules, tokens, and usage guidelines are documented in structured text files (usually Markdown) that an artificial intelligence can read, interpret, and reuse to generate consistent prototypes, code, or documentation. Unlike a traditional design system — which exists mainly in Figma or in the team's head — an AI-ready system is 'machine-readable.' Hardik Pandya (Atlassian) and Vitaly Friedman (Smashing Magazine) documented this approach in 2026, and companies like Atlassian, IBM Carbon, and Nordhealth already publish their systems in /llms.txt format."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need an AI-ready design system if my team is small?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. In fact, small teams benefit the most. Having documented spec files reduces dependence on the senior designer for every decision, speeds up onboarding of new members or freelancers, and prevents inconsistencies when you manage multiple projects simultaneously. Additionally, if your team uses AI tools to generate prototypes (Relume, V0, Galileo AI, Wix AI, etc.), spec files drastically reduce subsequent rework. You don't need Atlassian's level of complexity; starting with 3-5 Markdown files for color, spacing, and main components already makes a difference."
      }
    },
    {
      "@type": "Question",
      "name": "What tool do I use to audit my current design system?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FigmaLint is a free Figma plugin created by TJ Pitre that automates design system audits. It detects inconsistent tokens, hard-coded values, missing interactive states (hover, focus, active, disabled), detached instances from the system, and accessibility issues. It's especially useful when you work with design systems received from third parties or external vendors and need to validate their quality before integrating them into your workflows."
      }
    },
    {
      "@type": "Question",
      "name": "How do I connect my AI-ready design system with my SEO and AI visibility strategy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The connection lies in the structuring principles. The same techniques that make your design system readable for a generative AI — documenting decisions in Markdown, using tokens instead of arbitrary values, maintaining explicit rules, auditing the output — apply to preparing your website for GEO (Generative Engine Optimization). A website with Schema Markup, structured content in labeled fields, and internal links that tell a coherent story follows exactly the same logic as an AI-ready design system: reduce ambiguity, provide context, and ensure the machine doesn't have to guess."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to prepare a design system for AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A functional MVP (spec files for color, spacing, typography, and 3-5 main components) takes approximately 4-6 weeks with partial dedication. The initial audit with FigmaLint is done in hours. The real time investment is in documenting the design decisions that were previously implicit. The return is measured in less rework of AI-generated prototypes and less friction on the team. Atlassian and Nordhealth started with scoped deliverables and expanded progressively; you don't need to have everything perfect before you start."
      }
    }
  ]
}
</script>

---

*At **By Enki** we combine strategy, design, and artificial intelligence to help businesses in Santo Domingo and across the Dominican Republic build design systems and digital presence prepared for the future. Let's talk about your project? [Get a quote here](/en/quote/) and receive a proposal within 24 hours.*
