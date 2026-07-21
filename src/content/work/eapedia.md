---
title: EAPedia
strapline: An academic writing course, 217 lessons deep, organised the way students actually search
order: 2
context: React SPA · 8 genre modules · 29 language workshops
---

## Context

Students arrive at academic writing through problems, not syllabi. *My
supervisor says my literature review is too descriptive* is the real
query; "criticality, week 7" is where the answer was filed. EAPedia is a
full EAP course built to be entered from the problem end: an
encyclopedia's addressability with a course's teaching.

<aside class="note">Current scale: 217 lesson files across eight genre
modules — literature review, academic essay, reflective writing, case
study, research article, thesis introduction, thesis discussion, thesis
chapters — plus twenty-nine language workshops, from hedging and
metadiscourse to reporting verbs and reader engagement.</aside>

## The problem, precisely

Genre and language cut across each other: a student writing a case study
needs hedging *now*, but hedging isn't a case-study topic — it's a
language feature that surfaces in every genre. Most courses pick one
axis and lose the other. EAPedia's architecture is the answer to exactly
this: genre modules down one axis, language workshops down the other,
and every lesson cross-linked so either entry point reaches the same
teaching.

## Design decisions

**Two shells, one deliberate contrast.** Navigation lives in a dark
shell; lessons open as paper — near-white, ink text, book typography.
The switch is a designed signal: browsing is exploration, but a lesson
is *reading*, and reading gets reading conditions. (The site you're on
inverted the same trick.)

**Genres are doors, language is plumbing.** Eight genre modules mirror
the assignments students are actually set. Under them, the language
workshops carry the transferable load — stance calibration, source
integration, given-new structure, passive voice, critical AI writing.
A lesson on hedging in the literature review knows it's both.

<aside class="note">There's even a content-integrity script in the
build: every lesson referenced by a door must resolve, no orphan
lessons, no dead cross-links. Course coherence, enforced by CI.</aside>

**Each lesson is its own payload.** Technically, every lesson is a
separately loaded chunk — open one lesson, fetch one lesson. That's a
performance decision that doubles as a pedagogic one: the course never
downloads its own syllabus onto a student who came with a single
question.

## Where AI fit

Nobody writes 217 coherent lessons alone. AI drafted at course scale
inside a strict lesson schema — task types, staging, cross-link
structure — while the genre analysis, the sequencing, and an editorial
pass on every lesson stayed human. The schema is the pedagogy: the model
filled a form I designed, and lessons that didn't survive editing were
rewritten or cut.

## What happened

All eight genre modules are fully populated and the course is deployed
and in use. The cross-link architecture is doing what it was designed
for: the language workshops are the most-entered pages — students really
do arrive problem-first.

## What I'd change

The course still assumes a student who reads. The next layer is
diagnostic: paste your paragraph, and EAPedia routes you to the three
lessons your draft is asking for — the encyclopedia learning to read its
reader.
