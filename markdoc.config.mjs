import { defineMarkdocConfig } from '@astrojs/markdoc/config';
import starlightMarkdoc from '@astrojs/starlight-markdoc';

// Starlight components (aside, steps, tabs, card, linkcard, badge…) as Markdoc tags.
// Usage: {% aside type="tip" %}…{% /aside %}   {% steps %}1. …{% /steps %}
export default defineMarkdocConfig({
	extends: [starlightMarkdoc()],
});
