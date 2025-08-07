# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands
- `pnpm dev` - Start development server (DO NOT run this - user will handle it)
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint for code quality checks

## Tech Stack & Architecture

### Core Technologies
- **Next.js 15** with App Router and React Server Components
- **React 19** with modern hooks and patterns
- **TypeScript** for type safety throughout
- **Tailwind CSS** for styling with custom design system
- **Framer Motion** for smooth animations and transitions

### Project Structure
```
src/
├── app/                 # Next.js App Router
│   ├── api/            # API routes (WakaTime integration)
│   ├── layout.tsx      # Root layout with providers
│   └── page.tsx        # Main homepage
├── components/
│   ├── layout/         # Layout components (sidebars, main layout)
│   ├── sections/       # Page sections (projects, skills, etc.)
│   └── ui/            # Reusable UI components
├── data/              # Static data files
│   ├── projects.ts    # Project showcase data
│   └── personal-info.ts # Personal information and skills
├── lib/               # Utilities and configurations
├── types/             # TypeScript type definitions
└── styles/            # Global styles
```

### Architecture Patterns

#### Component Organization
- **Layout Components**: Three-column social media-style layout with left sidebar (navigation), main content, and right sidebar (activity)
- **Section Components**: Modular sections for different content areas (projects, contributions, etc.)
- **UI Components**: Reusable components following consistent design patterns

#### Data Management
- Static data stored in `/src/data/` files with TypeScript interfaces
- Projects data includes comprehensive metadata: tech stack, features, media, etc.
- Personal info centralized with skills, timeline, and social links

#### Styling Architecture
- **Glassmorphism Design**: Heavy use of backdrop-blur, transparency, and layered effects
- **Dark/Light Theme**: Implemented via `next-themes` with system preference detection
- **Custom Utilities**: `cn()` function for conditional class merging
- **Animation System**: Framer Motion for page transitions and interactive elements

### Key Features

#### Social Media Portfolio Layout
- Instagram/Twitter-style feed for projects
- Advanced filtering and search functionality
- Responsive three-column layout that adapts to screen sizes

#### Project Showcase System
- Rich project cards with images, videos, and detailed metadata
- Category-based filtering (Websites, AI, MCP, Scraping)
- Featured projects with ranking system
- Tech stack visualization with icons and colors

#### WakaTime Integration
- Custom API routes for fetching coding statistics
- Real-time coding activity display in right sidebar
- Graceful error handling for API failures

#### Visual Effects
- Responsive video backgrounds (desktop/mobile optimized)
- Snowfall particle effect
- Smooth page transitions with Framer Motion
- Glass morphism UI elements throughout

## Development Guidelines

### Component Development
- Use TypeScript interfaces from `/src/types/index.ts`
- Follow the established glassmorphism design patterns
- Implement responsive design (mobile-first approach)
- Use Framer Motion for animations and transitions

### Data Updates
- Projects: Update `/src/data/projects.ts` with new project entries
- Personal Info: Modify `/src/data/personal-info.ts` for bio, skills, timeline
- Follow existing TypeScript interfaces for data structure

### Styling Guidelines
- Use Tailwind CSS utility classes
- Apply glassmorphism pattern: `bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10`
- Maintain consistent spacing and typography scales
- Use custom CSS variables for theme-aware colors

### API Development
- API routes located in `/src/app/api/`
- WakaTime integration includes comprehensive error handling
- Follow Next.js App Router API route patterns
- Use environment variables for sensitive data

## Next.js Configuration Notes
- ESLint errors ignored during builds (configured in `next.config.js`)
- Remote image patterns configured for external sources
- Source maps disabled in production for performance
- Custom webpack configuration for development warnings suppression

## Important Development Notes
- **Never run the dev server** - user handles this manually
- Use `pnpm` as the package manager (not npm or yarn)
- Follow the established component patterns for consistency
- Maintain type safety throughout the application
- Test responsive design across different screen sizes

## Job Application Assistance

### Job Application Management
- Created `/Jobs/` folder for organized job application storage
- Each application file includes:
  - Platform information (OnlineJobs.ph)
  - Job title and direct link
  - Salary and hour requirements
  - Properly formatted application content for easy copying

### Job Application Safety Protocol
- **Always analyze job postings for red flags**:
  - Extremely low compensation rates
  - Suspicious email formats or contact methods
  - Excessive personal information requests
  - Unusual requirements (workstation photos, etc.)
  - Too-good-to-be-true claims in job titles vs actual content
- **Provide clear warnings** when potential scams are detected
- **User safety is priority** - better to warn and be wrong than ignore red flags

### Application Customization Approach
- Analyze job requirements thoroughly
- Match user's skills and projects to specific job needs
- Highlight relevant portfolio projects that demonstrate required capabilities
- Emphasize AI-enhanced development workflow as competitive advantage
- Address experience gaps honestly while showcasing project complexity
- Include portfolio link (https://portfolio-marquez.vercel.app) and GitHub in all applications

### Personal Information Usage
- Use data from `/src/data/personal-info.ts` for consistent application details
- Highlight comprehensive AI tool expertise (Claude Code CLI, WindSurf, Cursor, v0.dev, etc.)
- Leverage project portfolio from `/src/data/projects.ts` for relevant experience examples