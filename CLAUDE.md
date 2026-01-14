# Portfolio - Claude Code Context

## Project Overview
Personal portfolio website for magickiri.com. Built with Vite, vanilla JavaScript, and Tailwind CSS.

## Tech Stack
- **Build**: Vite
- **Styling**: Tailwind CSS v4
- **Components**: Vanilla JS modules (template literals)
- **Data**: JSON files
- **Hosting**: GitHub Pages (auto-deploy via GitHub Actions)

## Project Structure
```
src/
├── main.js              # App entry point
├── components/          # UI components (each exports render function)
│   ├── Navigation.js    # Nav + mobile menu
│   ├── Hero.js          # Hero section + typing effect
│   ├── About.js         # About section
│   ├── Timezone.js      # World map + live clocks
│   ├── Skills.js        # Skills grid (from JSON)
│   ├── Experience.js    # Experience timeline (from JSON)
│   ├── Education.js     # Education + projects
│   ├── Contact.js       # Contact form
│   └── Footer.js        # Footer
├── data/                # JSON data files
│   ├── experiences.json # Work experience entries
│   ├── skills.json      # Skill categories
│   ├── projects.json    # Project data
│   ├── education.json   # Education info
│   ├── meta.json        # SEO & contact info
│   └── techStackColors.json # Color mappings
├── styles/
│   ├── main.css         # Tailwind + theme
│   └── animations.css   # Custom keyframes
└── utils/               # Helper functions
```

## Commands
```bash
yarn dev      # Start dev server (http://localhost:5173)
yarn build    # Build for production
yarn preview  # Preview production build
```

## Adding Content

### New Experience
Edit `src/data/experiences.json` - add object to array:
```json
{
  "id": 6,
  "title": "Job Title",
  "company": "Company Name",
  "companyLink": "https://...",
  "dateRange": "Month Year - Present",
  "workType": "Remote",
  "employmentType": "Full-time",
  "description": "Brief description",
  "achievements": ["Achievement 1", "Achievement 2"],
  "techStack": ["Tech1", "Tech2"],
  "colors": {
    "primary": "cyan",
    "secondary": "blue",
    "gradient": "from-cyan-400 via-blue-400 to-purple-400",
    ...
  },
  "position": "right"
}
```

### New Skill Category
Edit `src/data/skills.json` - add object:
```json
{
  "name": "Category Name",
  "icon": "emoji",
  "iconBg": "bg-color-500/20",
  "textColor": "text-color-400",
  "borderColor": "border-color-500/30",
  "hoverBorderColor": "hover:border-color-400/50",
  "gradient": "from-color-500 to-color-600",
  "proficiency": 5,
  "skills": [
    { "name": "Skill", "icon": "url", "description": "..." }
  ]
}
```

### New Section
1. Create `src/components/SectionName.js`
2. Export `renderSectionName()` function returning HTML string
3. Import and add to `src/main.js` renderApp()
4. Add nav link in `Navigation.js`

## Key Patterns
- Components return HTML strings via template literals
- Data imported from JSON, mapped to HTML with `.map().join('')`
- Interactive features initialized in `main.js` after DOM render
- Colors use Tailwind classes with primary/secondary naming
- Animations defined in `animations.css` as keyframes

## Files to Know
- `src/main.js` - Entry point, renders all components
- `src/components/Experience.js` - Timeline with alternating left/right
- `src/components/Skills.js` - Grid with proficiency bars
- `src/data/experiences.json` - Add new work experience here
- `src/data/skills.json` - Add new skills here
- `vite.config.js` - Build configuration
- `.github/workflows/deploy.yml` - Auto-deploy on push to main

## SEO & Meta
- Meta tags in `index.html`
- Structured data (JSON-LD) for Person schema
- Google Analytics ID in `src/data/meta.json`
- CNAME file in `public/` for custom domain
