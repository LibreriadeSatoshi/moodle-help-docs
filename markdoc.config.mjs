import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';
import starlightMarkdoc from '@astrojs/starlight-markdoc';

// Starlight components (aside, steps, tabs, card, linkcard, badge…) as Markdoc tags.
// Usage: {% aside type="tip" %}…{% /aside %}   {% steps %}1. …{% /steps %}
export default defineMarkdocConfig({
	extends: [starlightMarkdoc()],
	tags: {
		// {% audiencepicker ... /%} — the student/teacher switch on the home page.
		audiencepicker: {
			render: component('./src/components/AudiencePicker.astro'),
			attributes: {
				student: { type: String, required: true },
				teacher: { type: String, required: true },
				campus: { type: String, required: true },
				campusHref: { type: String, required: true },
				hint: { type: String, required: true },
			},
		},
		// {% audience for="teacher" %}…{% /audience %} — hidden when the other
		// audience is selected. Always visible until a choice is made.
		audience: {
			render: component('./src/components/Audience.astro'),
			attributes: {
				for: { type: String, required: true, matches: ['student', 'teacher'] },
			},
		},
	},
});
