# Mobile-First UI/UX Design Specifications

## Core Principles

- Mobile-first approach for all components
- Touch-friendly interface (minimum tap target size: 44x44px)
- Fluid typography and spacing
- Performance-optimized assets
- Gesture-based interactions where appropriate

## Breakpoints

```css
/* Mobile (Default): 0-639px */
@media (min-width: 0px) {
  /* Base styles */
}

/* Tablet: 640px-1023px */
@media (min-width: 640px) {
  /* Tablet styles */
}

/* Desktop: 1024px+ */
@media (min-width: 1024px) {
  /* Desktop styles */
}
```

## Component-Specific Guidelines

### Navigation

- Mobile: Hamburger menu with slide-out drawer
- Tablet: Condensed horizontal menu
- Desktop: Full horizontal menu
- Touch target size: 44x44px minimum
- Menu drawer width: 80vw on mobile
- Smooth transitions (300ms)

### Hero Section

- Mobile: Stacked layout
  - Full-width image
  - Centered text
  - Vertical CTAs
- Tablet/Desktop: Grid layout
  - 60/40 split for content/image
  - Horizontal CTAs

### Featured Projects

- Mobile: Single column
  - Full-width cards
  - Vertical image/content stack
  - Swipeable carousel
- Tablet: 2-column grid
- Desktop: 3-column grid
- Touch-friendly project cards
- Lazy loading for images

### Skills Section

- Mobile: 2-column grid
- Tablet: 3-column grid
- Desktop: 4-column grid
- Skill cards: minimum 120px width
- Interactive hover states
- Progressive loading

### Timeline

- Mobile: Vertical timeline
  - Full-width entries
  - Alternating content alignment
- Tablet/Desktop: Horizontal timeline
  - Split layout
  - Hover interactions

## Typography

```css
/* Mobile base sizes */
h1: 2rem (32px)
h2: 1.75rem (28px)
h3: 1.5rem (24px)
body: 1rem (16px)
small: 0.875rem (14px)

/* Tablet/Desktop sizes */
h1: 3rem (48px)
h2: 2.25rem (36px)
h3: 1.75rem (28px)
body: 1rem (16px)
small: 0.875rem (14px)
```

## Spacing System

```css
/* Mobile spacing scale */
--space-xs: 0.25rem (4px)
--space-sm: 0.5rem (8px)
--space-md: 1rem (16px)
--space-lg: 1.5rem (24px)
--space-xl: 2rem (32px)

/* Component spacing */
Section padding: var(--space-lg)
Card padding: var(--space-md)
Button padding: var(--space-sm) var(--space-md)
```

## Interactive Elements

- Buttons:
  - Minimum height: 44px
  - Padding: 12px 24px
  - Clear hover/active states
  - Loading states
- Links:
  - Underline on hover
  - Touch target padding
- Forms:
  - Input height: 44px minimum
  - Clear focus states
  - Native form elements
  - Floating labels

## Performance Guidelines

- Images:
  - WebP format with fallbacks
  - Responsive images using srcset
  - Lazy loading
  - Blur placeholder
- Animations:
  - Use CSS transforms
  - Respect reduced-motion preferences
  - Maximum 300ms duration
  - 60fps target

## Accessibility

- WCAG 2.1 AA compliance
- Semantic HTML structure
- Proper heading hierarchy
- Color contrast ratio: 4.5:1 minimum
- Focus management
- Screen reader friendly
- Touch target spacing: 8px minimum

## Implementation Notes

- Use Tailwind CSS utility classes
- Implement responsive variants
- CSS Grid for layouts
- Flexbox for component alignment
- CSS custom properties for theming
- Mobile-first media queries
- Container queries where needed
