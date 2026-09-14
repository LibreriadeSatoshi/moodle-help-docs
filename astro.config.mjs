// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import markdoc from '@astrojs/markdoc';

const REPO = 'https://github.com/LibreriadeSatoshi/moodle-help-docs';
const MOODLE = 'https://moodle.libreriadesatoshi.com';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.libreriadesatoshi.com',
	integrations: [
		starlight({
			title: {
				es: 'Ayuda · Librería de Satoshi',
				en: 'Help · Librería de Satoshi',
			},
			description: 'Guías de ayuda para la plataforma de cursos de Librería de Satoshi.',
			defaultLocale: 'root',
			locales: {
				root: { label: 'Español', lang: 'es' },
				en: { label: 'English', lang: 'en' },
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/LibreriadeSatoshi' },
				{ icon: 'external', label: 'Campus', href: MOODLE },
			],
			editLink: { baseUrl: `${REPO}/edit/main/` },
			lastUpdated: true,
			sidebar: [
				{
					label: 'Acceso',
					translations: { en: 'Access' },
					items: [{ autogenerate: { directory: 'acceso' } }],
				},
				{
					label: 'Cuenta',
					translations: { en: 'Account' },
					items: [{ autogenerate: { directory: 'cuenta' } }],
				},
			],
		}),
		markdoc(),
	],
});
