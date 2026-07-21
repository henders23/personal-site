// Grid motion. Rules survive the reskin: every animation means something;
// slow and few; earned by the reader; reduced-motion first-class.

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

mm.add('(prefers-reduced-motion: no-preference)', () => {
  // HUD annotations power on as their anchor line crosses view.
  document.querySelectorAll('.note').forEach((note) => {
    gsap.fromTo(
      note,
      { opacity: 0, x: 12 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: note, start: 'top 78%' },
      }
    );
  });

  // Quiet reveals for grouped items (panels, list rows).
  document.querySelectorAll('[data-reveal-group]').forEach((group) => {
    gsap.fromTo(
      group.querySelectorAll('.reveal'),
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: { trigger: group, start: 'top 82%' },
      }
    );
  });
});

mm.add('(prefers-reduced-motion: reduce)', () => {
  gsap.set('.note, .reveal', { clearProps: 'all', opacity: 1 });
});

// Headings ignite like neon tubes when they enter view (CSS runs the
// flicker; reduced-motion users get them already lit via CSS).
document.querySelectorAll('.ignite').forEach((el) => {
  ScrollTrigger.create({
    trigger: el,
    start: 'top 88%',
    once: true,
    onEnter: () => el.classList.add('lit'),
  });
});

// Briefing panels derez once the reader has moved past them — support
// withdrawing as orientation grows. Content stays in the DOM and returns
// on hover/focus.
document.querySelectorAll('.scaffold').forEach((el) => {
  ScrollTrigger.create({
    trigger: el,
    start: 'bottom 35%',
    once: true,
    onEnter: () => el.classList.add('faded'),
  });
});
