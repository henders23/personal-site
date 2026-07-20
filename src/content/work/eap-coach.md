---
title: A Personal EAP Coach
strapline: In-sessional support that fits in the gaps between classes
order: 4
context: AI-based academic English coach for university students
---

## Context

In-sessional EAP has a geometry problem. The students who need academic
English support are distributed across every department, deadline and time
zone of a university; the tutors are a small team with a timetable. The
students' real questions surface at 11pm, mid-paragraph, three hours before
submission — precisely where no provision reaches.

The EAP coach is an AI-based companion for that gap: a coach a student can
bring their actual draft to, at the moment the question is live.

## The problem, precisely

The naive version of this tool is catastrophic: an answer machine that
rewrites the student's paragraph is proofreading-as-a-service, which
undermines both learning and academic integrity. The design problem was to
build something genuinely useful at 11pm that still behaves like a
teacher — one whose goal is that the student needs it a little less each
month.

## Design decisions

**The coach asks before it tells.** Its default move is the tutor's move:
"read me your sentence — what's the main verb doing?" It works on the
student's own text but responds with noticing prompts, options and
patterns, not replacements. The student writes every word that ends up in
the essay.

<aside class="note">This is the fading-scaffold principle this whole site
keeps enacting — designed into a product this time, not a page.</aside>

**Scaffolding that fades on schedule.** The coach tracks which supports a
student leans on and gradually withdraws them — early on it might gloss
nominalisation with examples; weeks later it just asks "what would the
noun-form of that verb be?" Withdrawal of support is a feature with a
design, not a limitation.

**Integrity by architecture, not policy.** The coach can't be talked into
writing the paragraph because writing paragraphs isn't in its repertoire of
moves — the same way a good tutor can't be talked into it. The constraint
lives in the design, where policy can't be prompt-injected away.

<aside class="note">Paul: worth naming the stack here at whatever level
you like — and whether it's deployed, piloted, or in development, plus any
student voices.</aside>

## Where AI fit

This is the most AI-native design in the portfolio — the product *is* a
model, shaped by a long system of pedagogic instructions. The design work
was almost entirely EAP work: encoding what good in-sessional tutoring
actually does (its questions, its restraint, its sequencing of support)
precisely enough that a model reproduces the stance and not just the tone.

## What happened

<aside class="note">Paul: outcomes and evidence here.</aside>

## What I'd change

The coach still knows too little about the student's discipline. Feedback
on a nursing reflection and a physics lab report should differ more than
it currently does; the next iteration grounds the coach in
discipline-specific corpora so its examples come from the student's own
field.
