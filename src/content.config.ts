import { defineCollection } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	// UI string overrides per locale live in src/content/i18n/<lang>.json (optional).
	i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
