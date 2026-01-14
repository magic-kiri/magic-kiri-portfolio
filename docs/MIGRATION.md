# Portfolio Migration: Monolithic HTML → Modular Vite Project

## Overview
Migration of a single 3,084-line `index.html` portfolio to a modular Vite-based architecture.

**Date Started**: 2026-01-14
**Status**: In Progress

---

## Why This Migration?

### Problems with Current Structure
- Single `index.html` file: 3,084 lines
- ~900 lines of inline JavaScript
- ~230 lines of inline CSS
- Difficult for LLMs to analyze
- Hard to add new content (experiences, skills)
- No component reusability

### Benefits After Migration
- No file over 200 lines
- Data in JSON files (easy to edit)
- Reusable components
- Hot reload during development
- Automatic deployment via GitHub Actions
- LLM-friendly codebase

---

## Architecture Decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Build Tool | Vite | Fast, modern, simple config |
| CSS Framework | Tailwind CSS | Already in use, via npm now |
| Components | Vanilla JS modules | No framework overhead, easy to understand |
| Data Format | JSON files | LLM-friendly, easy to edit |
| Package Manager | Yarn | User preference |

---

## Before & After Structure

### Before (Monolithic)
```
portfolio/
├── index.html (3,084 lines - everything)
├── compact.html
├── photo_64.png
├── robots.txt
├── sitemap.xml
├── CNAME
└── public/ (images)
```

### After (Modular)
```
portfolio/
├── CLAUDE.md
├── index.html (~30 lines)
├── vite.config.js
├── package.json
├── yarn.lock
├── docs/
│   └── MIGRATION.md (this file)
├── .github/workflows/deploy.yml
├── src/
│   ├── main.js
│   ├── styles/
│   │   ├── main.css
│   │   └── animations.css
│   ├── components/ (10 files, ~50-120 lines each)
│   ├── data/ (4 JSON files)
│   └── utils/
└── public/
```

---

## Component Mapping

| Original Location | New Component | Lines |
|------------------|---------------|-------|
| Lines 1200-1280 | `Navigation.js` | ~80 |
| Lines 1278-1581 | `Hero.js` | ~100 |
| Lines 1582-1693 | `About.js` | ~60 |
| Lines 1694-2175 | `Timezone.js` | ~150 |
| JS-rendered | `Skills.js` | ~100 |
| JS-rendered | `Experience.js` | ~120 |
| Lines 2289-2766 | `Education.js` | ~80 |
| Lines 2500-2700 | `Projects.js` | ~100 |
| Lines 2771-3048 | `Contact.js` | ~80 |
| Lines 3050-3084 | `Footer.js` | ~30 |

---

## Data Extraction

| Original | New File | Content |
|----------|----------|---------|
| Inline JS array | `experiences.json` | 5 work experiences |
| Inline JS array | `skills.json` | 8 skill categories |
| HTML sections | `projects.json` | 3 projects |
| HTML sections | `education.json` | Education + courses |

---

## Migration Phases

### Phase 0: Documentation & Branch
- [x] Create this documentation file
- [x] Create git branch

### Phase 1: Setup Vite Project
- [ ] Initialize yarn project
- [ ] Install dependencies
- [ ] Create config files
- [ ] Create CLAUDE.md

### Phase 2: Extract CSS
- [ ] Move custom CSS to files
- [ ] Setup Tailwind
- [ ] Verify animations

### Phase 3: Extract Data
- [ ] Create experiences.json
- [ ] Create skills.json
- [ ] Create projects.json
- [ ] Create education.json

### Phase 4: Create Components
- [ ] Navigation.js
- [ ] Hero.js
- [ ] About.js
- [ ] Timezone.js
- [ ] Skills.js
- [ ] Experience.js
- [ ] Education.js
- [ ] Projects.js
- [ ] Contact.js
- [ ] Footer.js

### Phase 5: Assemble & Test
- [ ] Wire up main.js
- [ ] Test all interactions
- [ ] Verify responsive design

### Phase 6: Deploy
- [ ] Create GitHub Actions workflow
- [ ] Test build
- [ ] Create PR

---

## Verification Checklist

After migration, verify:
- [ ] Visual appearance identical to original
- [ ] Typing animation works
- [ ] Mobile menu opens/closes
- [ ] Timezone clocks update live
- [ ] All hover effects work
- [ ] Smooth scroll navigation
- [ ] Mobile/tablet/desktop responsive
- [ ] `yarn build` succeeds
- [ ] GitHub Actions deploys

---

## Rollback Plan

If issues arise:
1. Original `index.html` preserved in git history
2. `compact.html` kept as backup
3. Can revert PR if deployment fails

---

## Post-Migration: Adding Content

### New Experience
Edit `src/data/experiences.json`

### New Skill
Edit `src/data/skills.json`

### New Section
1. Create component in `src/components/`
2. Import in `main.js`
3. Add nav link
