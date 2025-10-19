Accessibility Checklist (WCAG 2.1 AA)

Global
- Semantic HTML; landmarks (header, main, footer, nav)
- Color contrast AA (text, UI components, focus states)
- Visible focus outlines; keyboard navigable anywhere
- Skip to content link
- Respect prefers-reduced-motion for carousels/animations

Images and Media
- All images have alt text; decorative images use empty alt
- Captions for significant videos; transcripts if feasible
- Provide keyboard controls for media players
- Lightbox supports keyboard (Esc to close, arrow keys to navigate)

Forms and Auth
- Labels for inputs and buttons with explicit text
- Error messages tied to fields via aria-describedby
- Auth flows support keyboard and screen readers

Components
- Quote rotator is accessible and pausable with reduced motion
- MediaGrid cards expose meaningful labels and states
- Buttons/links have accessible names, not just icons

Pages
- 404 and 500 pages communicate clearly and offer navigation options
- Ensure headings are hierarchical and meaningful

Testing
- Automated checks: eslint-plugin-jsx-a11y, axe
- Manual checks: keyboard-only navigation, screen reader smoke test
- Include a11y in PR review and release checklist
