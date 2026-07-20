import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    strapline: z.string(),
    order: z.number(),
    context: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };
