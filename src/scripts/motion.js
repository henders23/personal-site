// Sitewide motion. Rules: every animation enacts a meaning; slow and few;
// earned by the reader, not looping for attention; reduced-motion first-class.

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

mm.add('(prefers-reduced-motion: no-preference)', () => {
  // Marginalia: the reader's pencil arrives as its anchor line crosses view.
  document.querySelectorAll('.note').forEach((note) => {
    gsap.fromTo(
      note,
      { opacity: 0, x: 10 },
      {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: { trigger: note, start: 'top 78%' },
      }
    );
  });

  // Headings settle from light to text weight — felt more than seen.
  document.querySelectorAll('.settle').forEach((el) => {
    gsap.fromTo(
      el,
      { '--wght': 310, opacity: 0.4 },
      {
        '--wght': 460,
        opacity: 1,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%' },
      }
    );
  });

  // Quiet reveals for grouped items (cards, list rows).
  document.querySelectorAll('[data-reveal-group]').forEach((group) => {
    gsap.fromTo(
      group.querySelectorAll('.reveal'),
      { opacity: 0, y: 14 },
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

// Reduced motion: everything simply present.
mm.add('(prefers-reduced-motion: reduce)', () => {
  gsap.set('.note, .settle, .reveal', { clearProps: 'all', opacity: 1 });
});

// Scaffolds fade once the reader has moved past them — support withdrawing
// as orientation grows. Runs in both motion modes (opacity only; content
// stays in the DOM and returns on hover/focus).
document.querySelectorAll('.scaffold').forEach((el) => {
  ScrollTrigger.create({
    trigger: el,
    start: 'bottom 35%',
    once: true,
    onEnter: () => el.classList.add('faded'),
  });
});
