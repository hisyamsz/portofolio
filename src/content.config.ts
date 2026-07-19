import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    image: image(),
    link: z.string(),
    category: z.enum(['web-app', 'ui-practice']),
    order: z.number(),
  }),
});

export const collections = { projects };
