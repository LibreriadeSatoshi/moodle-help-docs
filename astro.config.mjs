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
				es: 'Librería de Satoshi DOCS',
				en: 'Librería de Satoshi DOCS',
			},
			description: 'Guías de ayuda para la plataforma de cursos de Librería de Satoshi.',
			logo: {
				light: './src/assets/logo-light.svg',
				dark: './src/assets/logo-dark.svg',
				alt: 'Librería de Satoshi',
			},
			customCss: ['./src/styles/custom.css'],
			head: [
				{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
				{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap',
					},
				},
			],
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
