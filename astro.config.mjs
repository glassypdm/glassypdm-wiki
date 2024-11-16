import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'glassyPDM',
			social: {
				github: 'https://github.com/joshtenorio/glassypdm-client',
			},
			sidebar: [
				{
					label: "User Guide",
					items: [
						{ label: 'Quick Start', link: '/guides/quickstart/' },
						{ label: 'Permissions', link: '/guides/permissions/' },
						{ label: 'Example', link: '/guides/example/' },
					]
				},
				{
					label: 'Self Hosting',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Installation', link: '/selfhosting/installation/' },
						{ label: 'Prerequisites and Costs', link: '/selfhosting/prerequisites/' },
					],
				},
				{
					label: 'Software Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
