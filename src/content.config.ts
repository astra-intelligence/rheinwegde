import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Markdown per language: src/content/pages/{lang}/{slug}.md.
// A file with a same-named folder is a container: its children are tabs, and its
// own page redirects to the first leaf. Tabs are sorted by `order`.
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { pages };
