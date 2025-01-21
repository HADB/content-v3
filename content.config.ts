import { defineCollection, defineContentConfig, z } from "@nuxt/content";
import { asSitemapCollection } from "@nuxtjs/sitemap/content";

export default defineContentConfig({
  collections: {
    pages: defineCollection(
      asSitemapCollection({
        type: "page",
        source: "*.md",
        schema: z.object({
          hideComments: z.boolean().optional(),
        }),
      })
    ),
    posts: defineCollection(
      asSitemapCollection({
        type: "page",
        source: "posts/*.md",
        schema: z.object({
          class: z.string().optional(),
          cover: z.string().optional(),
          coverSize: z
            .object({ width: z.number(), height: z.number() })
            .optional(),
          date: z.string(),
          draft: z.boolean().optional(),
          hideComments: z.boolean().optional(),
          location: z.string().optional(),
          readingTime: z.object({}),
          tags: z.array(z.string()),
          time: z.string().optional(),
          weather: z.string().optional(),
        }),
      })
    ),
  },
});
