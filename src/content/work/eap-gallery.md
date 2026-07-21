---
title: The EAP Gallery
strapline: A memory palace for practitioners of English for Academic Purposes
order: 1
context: Anamnesis · browser-based · self-initiated
---

## Context

EAP teacher knowledge is wide and weirdly shaped: part applied linguistics,
part learning theory, part institutional craft. It accumulates across
decades of journals, staffrooms and half-remembered conference talks — and
almost nobody ever gets a map of it.

<aside class="note">The project's full name is <em>Anamnesis — The EAP
Gallery</em>. Anamnesis: the recalling of things known before. That's the
design brief in one word.</aside>

The EAP Gallery is that map, built as a memory palace you can walk through
in the browser. One promenade runs west to east through nine halls —
origins, theory, learners, design, pedagogy, writing, technology and
onward — from the Hall of Origins through the Hall of Theories and the
Gallery of Approaches to a Learning Design Studio and a Needs Analysis
Workshop. The field's ideas hang on the walls in the order the discipline
itself grew.

## The problem, precisely

Method-of-loci research is unambiguous: spatial structure is one of the
strongest retrieval scaffolds humans have. Professional development
ignores it entirely — CPD arrives as webinars and reading lists, formats
with no *where*. I wanted the accumulated knowledge of EAP to have
addresses: Academic Literacies lives three rooms east, past Discourse
Communities, opposite English as a Lingua Franca.

## Design decisions

**One promenade, not a menu.** The nine halls sit on a single west-east
line, so the field is experienced as a journey with a direction — origins
before theories, theories before approaches. You can wander, but the
architecture quietly teaches the discipline's own history.

**Placards that interrogate.** Every exhibit carries an ASK YOURSELF
prompt — "How did you arrive in EAP, and what did you bring with you?" —
because a gallery for practitioners should produce reflection, not
recall. The intro is blunt about it: a question skimmed is a question
wasted.

<aside class="note">This is the same conviction as the rest of my work:
noticing beats telling. The gallery never summarises you into agreement;
it asks you things.</aside>

**The palace is editable — and that's the pedagogy.** A full Design mode
lets visitors redraw rooms, hang their own pictures, place statues, and
export the whole palace as a JSON file. Building your own memory palace
is the actual method of loci; the gallery I shipped is just the worked
example. The deepest use is a teacher-educator handing trainees an empty
palace.

## Where AI fit

AI built at architecture scale — the rendering engine, the placard
corpus drafted for editing — while the curation stayed human: which nine
halls, what deserves a wall, which questions each placard asks. The ASK
YOURSELF prompts in particular are hand-written; a model asked to
"generate reflective questions" produces horoscopes.

## What happened

The gallery is public and open source, and doubles as a worked example in
my AI-for-higher-education teaching: proof that one practitioner with AI
in the loop can ship the kind of artefact that used to need a grant and
a dev team.

## What I'd change

The halls still privilege reading over doing. The Learning Design Studio
and Needs Analysis Workshop point the right way — rooms where you make
something — and the next build pushes further: a hall that won't let you
leave until you've hung one picture of your own.
