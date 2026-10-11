import { defineCollection, z } from 'astro:content';

const writings = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    number: z.number(),
    language: z.enum(['th', 'en']).default('th'),
    excerpt: z.string().optional(),
  }),
});

const music = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    number: z.number(),
    excerpt: z.string().optional(),
    audioFile: z.string(),
    titleEn: z.string().optional(),
    excerptEn: z.string().optional(),
  }),
});

export const collections = { writings, music };
