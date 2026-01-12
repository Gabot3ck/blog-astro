import { defineCollection, z } from "astro:content";

const BlogCollections = defineCollection({
  type: 'content',
  schema: ( {image} ) => z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    image: image(),

    // relación
    author: z.string(),
    
    // relación
    tags: z.array(z.string()),
  })
})

export const collections = {
  blog: BlogCollections,
};