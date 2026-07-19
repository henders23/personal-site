# Site plan — Paul Hendrie, learning designer

A working plan for an animated personal site showcasing expertise in learning
design, English for Academic Purposes (in-sessional EAP), and — primarily —
the use of AI to design learning experiences.

Brief, in the client's words: *wow people, surprise them and make them
curious, yet be understated and humble. Avoid tropes — dark mode, cool
Tron-2010 vibes.*

---

## 1. The concept: the site teaches the way you do

The tension in the brief ("wow" vs "humble") dissolves if animation carries
meaning instead of decoration. Your raw material is **language on a page**,
and your craft is **designing how people move through it**. So:

> **The site is a piece of learning design about you.**
> Every animation enacts a pedagogic idea. Nothing moves for effect.

Three motifs, drawn directly from your practice:

### Motif A — Redrafting
Academic writing development is visible revision. The hero is a single
sentence that quietly **redrafts itself** in front of the visitor — a
wordy, hedge-heavy draft tightening into a clear one, with strikethroughs
and insertions animating like tracked changes done by hand. It loops slowly,
each pass a different sentence about you. First impression: *this person
works in language, and works carefully.*

### Motif B — Marginalia
The whole site reads like a beautifully set manuscript that has been
**annotated by a generous reader**. As you scroll, short notes appear in the
margin in a second voice — context, asides, honesty ("this project half
worked; here's what I changed"). Marginalia is where the humility lives: the
main text makes the claim, the margin qualifies it.

### Motif C — Fading scaffolds
Scaffolding-then-fading is *the* move of in-sessional EAP. Enact it
literally: sections begin with light supports — a gloss on a term, a
highlighted key phrase, a guiding question — that **gently dissolve once
the reader has engaged** (scrolled past, hovered, answered). Attentive
visitors notice the site withdrawing support as they get oriented. That's
the "make them curious" moment: it rewards noticing, which is itself an
EAP concept you can name in the footer for those who catch it.

### How AI shows up (without robots)
No sparkle emoji, no chat bubbles, no glowing neural nets. AI expertise is
demonstrated through **process made visible**: case studies that show the
actual design conversations, prompt architectures, and iteration loops
behind real learning experiences — and one small, genuinely useful
interactive demo (see §6). The message: AI is an instrument in a designer's
hands, and here is the hand.

---

## 2. The anti-brief (tropes we refuse)

Named explicitly so every later decision can be checked against it:

- **No dark mode default.** The site is paper: warm light ground, ink text.
  (We still honor `prefers-color-scheme` with a dignified "ink on grey
  paper" dark variant — accessibility, not aesthetics.)
- **No Tron/cyber:** no neon, no glow, no grids receding to a vanishing
  point, no scanlines, no monospace-everything.
- **No AI clichés:** no particle brains, no matrix rain, no typing-cursor
  "chatbot" hero, no purple-to-blue gradients, no sparkles.
- **No agency-site clichés:** no full-screen preloader, no horizontal
  scroll-jacking, no cursor-replacement blob, no "we craft digital
  experiences" voice, no 3D blobs, no glassmorphism.
- **No adjectives doing the work of evidence.** "Passionate," "innovative,"
  and "cutting-edge" are banned from copy. Specifics or nothing.

---

## 3. Visual language

### Palette — paper, ink, pencil
- **Ground:** warm off-white (`#FAF7F2`-ish), not clinical white.
- **Text:** soft near-black ink (`#1A1815`-ish), never pure `#000`.
- **Accent — "the marker":** one annotation color used *only* for the
  reader's-pencil layer (marginalia, underlines, redraft insertions).
  Recommended: a red-ochre / pencil-red (`#C24D2C` territory) — reads as
  a teacher's pen without the harshness of pure red. Alternative: a real
  highlighter yellow used as background wash on `<mark>` elements.
- **Support tint:** one pale tint (paper-blue or sage) for scaffold
  elements, so supports are visibly a *layer* that can fade away.

That's it. Four values. Restraint is the aesthetic.

### Typography — the site IS the typography
- **Text face:** a serif built for reading, with academic warmth.
  First choice **Literata** (designed for long-form reading, variable,
  free); alternatives: Newsreader, Source Serif 4, Spectral.
- **Second voice (marginalia):** the same serif in italic at smaller
  optical size, or a humanist sans like **General Sans / Public Sans** —
  the margin should feel like a different *hand*, not a different brand.
- **Variable-font animation:** Literata and Newsreader have optical-size
  and weight axes. Animating `font-variation-settings` subtly (a heading
  settling from light to text weight as it enters) is the most understated
  "wow" available on the web — most visitors feel it without being able to
  say what happened.
- Generous sizes (18–21px body), long-form measure (~65ch), real
  typographic care: hanging punctuation where supported, `text-wrap:
  pretty`, proper quotes and dashes. In this field, sloppy typesetting
  would undermine the entire claim.

### Layout — manuscript grid
- A central text column with a **true margin column** (roughly 2:1) that
  exists on every page — marginalia needs a home, and the asymmetry gives
  the site its look without any graphic elements.
- On narrow screens the margin collapses: notes become tappable
  superscript marks that unfold inline (footnote behavior — also
  on-theme).
- Whitespace is the primary layout tool. Sections separated by space and
  a hairline rule, not by background-color bands.

---

## 4. Motion design

### Principles
1. **Every animation enacts a meaning** (revision, annotation, scaffold,
   noticing). If we can't name the pedagogic idea, it doesn't ship.
2. **Slow and few.** Signature moments are rare (one per screen at most);
   everything else is near-instant. Durations lean long (600–900ms) and
   eased gently — handwriting speed, not app speed.
3. **Earned, not ambient.** Motion responds to the reader (scroll,
   hover, dwell) rather than looping for attention. The hero redraft is
   the single exception, and it rests between passes.
4. **`prefers-reduced-motion` is a first-class design**, not a kill
   switch: the redraft becomes a static before/after with visible marks;
   scaffolds still fade but via opacity only; marginalia simply appears.
5. **Performance is humility.** Text-node animation is cheap; the site
   should score ~100 on Lighthouse and feel instant on a phone. A "wow"
   site that stutters reads as vanity.

### Signature moments (the full list — deliberately short)
| Moment | Where | What happens |
|---|---|---|
| The redraft | Hero | A sentence revises itself with hand-drawn strikethrough and inserted phrases in the marker color |
| Marginalia | Everywhere | Margin notes fade/slide in ~1ch as their anchor line crosses mid-viewport; a hand-drawn underline connects note to text |
| Fading scaffolds | Section intros | Glosses/highlights/guiding questions dissolve after engagement |
| Settling headings | Section heads | Variable-font weight/optical-size settles as heading enters |
| The marked link | All links | Underline is a slightly imperfect hand-drawn SVG stroke that redraws on hover |
| Process reveal | AI case studies | Design-conversation excerpts unfold step-by-step under reader control (click/scroll-advance), like turning over cards |

Hand-drawn strokes: 2–3 subtly wobbly SVG underline/circle paths, animated
via `stroke-dashoffset`. This single detail carries the "human hand +
machine precision" theme sitewide.

---

## 5. Tech stack

Chosen for the same values as the design: fast, mostly-static, no
framework theater.

| Layer | Choice | Why |
|---|---|---|
| Framework | **Astro** | Content-first, ships ~zero JS by default, islands for the interactive bits, MD/MDX content collections for case studies, first-class Vercel/Netlify deploys |
| Animation | **GSAP** (ScrollTrigger + SplitText — all free as of 2025) | The best tool in existence for text choreography; SplitText handles per-word/char animation accessibly (it can preserve screen-reader text) |
| Scroll | **Native scroll** | No Lenis/smooth-scroll library — scroll-jacking is on the trope list. ScrollTrigger works fine with native scroll |
| Interactive islands | **Svelte** (or Preact) islands | Only for the demo (§6) and any stateful widget; tiny payloads |
| Fonts | **Literata variable** + one companion, self-hosted, subsetted | Privacy, speed, `font-display: swap` |
| Styling | Vanilla CSS with custom properties (or Tailwind v4 if preferred) | Four colors and two fonts don't need a design system |
| Content | Astro content collections (Markdown + frontmatter) | Case studies as documents, which is what they are |
| Hosting | **Vercel** | Already connected to this workspace; preview deploys per branch |

Explicitly not used: Three.js / WebGL (nothing to 3D), Lottie (no mascot
animations), heavy React app shell (it's a document, not an app).

### Accessibility commitments
Semantic HTML throughout; marginalia as `<aside>`/footnote pattern;
SplitText configured to keep readable text in the DOM; all scaffold
content available to assistive tech even after visual fade; WCAG AA
contrast on paper tones (check the accent at small sizes); full keyboard
operability of the demo.

---

## 6. Site map & page-by-page

Five pages. Small is credible.

```
/            Home — the redraft, positioning, three doors
/work        Case studies index + 3–4 deep case studies (/work/slug)
/approach    How you think about learning design (the essay)
/notice      One small interactive EAP activity (the surprise)
/about       Bio, background, contact
```

### Home
- **Hero:** name set quietly (not huge), role line, then the redrafting
  sentence as the centerpiece. Example pass:
  - Draft: ~~"I am passionate about leveraging innovative AI-driven
    solutions to facilitate transformative learning outcomes."~~
  - Redrafts to: "I design learning experiences. Lately, with AI."
  - The joke lands the whole brief in one move: the site *deletes the
    trope language in front of you.* Wow, surprise, humility — same
    gesture.
- **Three doors:** three quiet cards → Work / Approach / Notice, each with
  one marginal note instead of marketing copy.
- **Now strip:** one line on current role/projects (freshness signal).
- Footer: contact, colophon ("Set in Literata. Built with Astro & GSAP.
  The marginal notes are the pedagogy of *noticing* — glad you did.")

### Work (the core)
3–4 case studies, each structured **as a learning design document** —
the format itself demonstrates the discipline:

1. **Context** — institution, learners, constraints (anonymized as needed)
2. **The problem, precisely** — one paragraph, no adjectives
3. **Design decisions** — the heart; each decision as claim + rationale
   + margin note on trade-offs/doubts
4. **Where AI fit** — the process reveal: actual prompt architecture,
   iteration excerpts, what the model got wrong and how the design
   absorbed that
5. **What happened** — evidence: uptake, feedback, artifacts; honest
   about what's unmeasured
6. **What I'd change** — standing section in every case study; this is
   the humility made structural

Suggested spread (adjust to real portfolio): one AI-centered flagship
(e.g., an AI-assisted feedback or writing-development tool/course), one
in-sessional EAP program design, one discipline-embedded collaboration
(EAP + a department), optionally one small experiment that failed
usefully.

### Approach
A single well-set essay (800–1200 words) on how you design learning:
your stance on scaffolding, noticing, academic literacies vs. deficit
models, and AI as design instrument vs. content vending machine. This
page carries the richest marginalia — the margin argues gently with the
text. It's the page other learning designers will send each other.

### Notice (the surprise)
A 60–90 second interactive activity — a real, tiny piece of EAP
pedagogy, e.g.: three sentence pairs from authentic academic writing;
the visitor taps what changed between draft and revision; the site
responds to *their noticing* with a margin note explaining the move
(hedging, nominalization, stance). At the end, one line: "That's
in-sessional EAP in one minute. Designing that experience — at course
scale, with AI in the loop — is what I do."
Demonstrates learning design, EAP, interaction craft, and restraint in
one artifact. This page is the one people will remember and share.

### About
Short bio (career arc in ~3 paragraphs), a human photo (not a LinkedIn
headshot — a desk, a whiteboard, marked-up drafts), credentials list set
small, contact as a plain mailto and links. No contact form.

---

## 7. Content & voice

- **Voice:** first person, plain, specific, lightly warm. Sentence-level
  care is the portfolio — every sentence on this site is a work sample.
- **Two registers by design:** main text = considered, complete
  sentences; marginalia = looser, candid, present-tense. The contrast
  does the "human" work most sites fake with emoji.
- **Evidence over adjectives** (see anti-brief). Where outcomes weren't
  measured, say so; the honesty is more persuasive than a number.
- **Writing to prepare before build:** the redraft sentence pairs (3–5),
  the Approach essay, case study drafts (even rough), ~30 marginal notes
  (they're harder to write than they look), the Notice activity's
  sentence pairs and explanations.

---

## 8. Build phases

**Phase 1 — Foundation (static but finished-feeling)**
Astro scaffold; type/palette/grid system; all five pages with real or
near-real content; marginalia as a working layout pattern (unanimated);
deploy to Vercel. *The site should be publishable at the end of this
phase with zero animation — that's the understatement test.*

**Phase 2 — Signature motion**
Hero redraft; marginalia entrances; hand-drawn underlines; settling
headings; `prefers-reduced-motion` variants built alongside, not after.

**Phase 3 — Scaffolds & the demo**
Fading-scaffold system; the Notice activity as a Svelte island; process
reveals in case studies.

**Phase 4 — Polish**
Performance audit (Lighthouse ~100), a11y pass with screen reader,
OG images (a marked-up-draft motif), colophon, dark "grey paper"
variant, cross-device motion tuning.

---

## 9. Open questions for Paul

1. **Case study material:** which 3–4 projects can be shown, and what
   can/can't be named (institutions, tools, data)? This gates Phase 1
   content.
2. **The redraft sentences:** want to co-write these? They're the most
   important 40 words on the site.
3. **Domain & deployment:** is there a domain (paulhendrie.com?), and is
   Vercel acceptable for hosting?
4. **The Notice activity:** happy with a sentence-revision noticing task,
   or is there a different micro-activity closer to your teaching?
5. **Accent color:** pencil red-ochre or highlighter yellow? (Both
   mocked up in Phase 1.)
6. **Tailwind or vanilla CSS:** any preference if you'll maintain this
   yourself later?
