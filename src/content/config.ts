import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    seoTitle: z.string().optional(),
    ogImage: z.string().optional(),
    noIndex: z.boolean().optional().default(false),
  }),
});

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    heroImage: z.string(),
    icon: z.string().optional(),
    order: z.number().optional(),
    features: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })).optional(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
  }),
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string(),
    imageAlt: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    author: z.string().optional().default('LendCity Team'),
    readingTime: z.number().optional(),
    status: z.enum(['draft', 'scheduled', 'published']).default('draft'),
    featured: z.boolean().optional().default(false),
    podcastEpisodeId: z.string().optional(),
    podcastAudioUrl: z.string().optional(),
  }),
});

const team = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    role: z.string(),
    image: z.string(),
    email: z.string().optional(),
    phone: z.string().optional(),
    linkedin: z.string().optional(),
    order: z.number().optional(),
    featured: z.boolean().optional().default(false),
    specialties: z.array(z.string()).optional(),
  }),
});

const locations = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    country: z.enum(['Canada', 'USA', 'Mexico']),
    region: z.string().optional(),
    description: z.string(),
    image: z.string().optional(),
    order: z.number().optional(),
  }),
});

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string().optional(),
    locationType: z.enum(['in-person', 'virtual', 'hybrid']).optional(),
    registrationUrl: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().optional().default(false),
    includeInNewsletter: z.boolean().optional().default(true),
  }),
});

const faqs = defineCollection({
  type: 'data',
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    category: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = {
  pages,
  services,
  posts,
  team,
  locations,
  events,
  faqs,
};
