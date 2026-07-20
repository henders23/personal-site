---
title: The Learning Gallery
strapline: A walkable museum of ninety-three learning theories
order: 1
context: Self-initiated · open source · built with AI in the loop
---

## Context

Learning theory is usually taught as a list. Behaviourism, then cognitivism,
then constructivism, a nod to connectivism, next slide. The list format
flattens the thing it describes: it hides which theories answer which
questions, which quietly contradict each other, and which are popular myths
wearing academic clothes.

<aside class="note">The gallery runs in the browser — plain Three.js, no
build step, no login. You walk with WASD, the way you'd walk anywhere.</aside>

The Learning Gallery is my attempt at a different container: a first-person,
walkable museum. A circular rotunda with eight labelled doorways opens onto
eight themed wings — instructional design, cognitive architecture, memory,
motivation, and so on. Ninety-three theories hang on the walls as pictures.
You choose a door, wander, and read what catches you.

## The problem, precisely

Survey knowledge of learning theory doesn't survive contact with a design
decision. Practitioners can name theories but not *place* them — they don't
know a theory's neighbours, its rivals, or its known failure modes. I wanted
a format where the **organisation itself carries the argument**: where
hanging spaced practice near retrieval practice, and learning styles in a
"contested ideas" room, teaches something before a single label is read.

## Design decisions

**Space is the syllabus.** The hub-and-spoke floor plan is the taxonomy.
Adjacency is commentary: what hangs beside what, and which wing a theory
earns, is a claim you absorb by walking. This is an old idea — the method
of loci — pointed at professional knowledge.

**Every artwork is honest about its subject.** Each theory's picture is
generated procedurally from a seeded random function of its own name, in a
style matched to its cluster. No stock imagery, no decoration pretending to
be meaning.

<aside class="note">My favourite structural decision: every theory's panel
has a <em>pitfalls</em> field. McCrea's nine principles come with a warning
about treating them as nine independent slogans. The museum disagrees with
its own exhibits, politely.</aside>

**The label does the teaching.** Clicking a picture opens a panel with a
plain-language summary, a longer reading, key points, the evidence base —
and, for every theory, its known pitfalls and its relevance to designing
with AI. Contested ideas (learning styles, digital natives) are exhibited,
not hidden, in a room whose guide text tells you to approach with care.

**A notebook, not a quiz.** Visitors keep notes as they walk; the gallery
never tests them. The design bet is that curiosity plus spatial memory beats
compliance plus a score.

## Where AI fit

The gallery was built in sustained conversation with AI — but the division
of labour was deliberate. I owned the curation (which ninety-three, which
rooms, what hangs where), the pedagogic stance of every summary, and the
pitfalls fields, which are exactly the kind of judgement a model will not
volunteer. AI drafted at volume — panel text to be edited, the procedural
art generators, the Three.js plumbing — and every claim about evidence was
checked against the literature before it went on a wall.

The honest summary: AI made a one-person museum feasible. It did not decide
what the museum believes.

## What happened

The gallery is open source and public. It has become the flagship example in
my courses on AI for higher education: not as a demo of what AI can produce,
but of what a designer can produce *with* AI when the pedagogy leads.

## What I'd change

The wings are still more corridor than conversation — theories face the
visitor, not each other. The next iteration puts disagreements literally
face to face: cognitive load theory hung opposite discovery learning, with
the guide text asking whose side the room's layout takes.
