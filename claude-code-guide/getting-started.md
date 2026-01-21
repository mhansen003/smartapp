# Getting Started with Smart App 2.0 - Claude Code Engineer Guide

## Project Overview

**Smart App 2.0** is a reimagined digital mortgage application platform designed to streamline the borrower experience through intelligent automation, third-party integrations, and AI-powered assistance. This guide will help you quickly understand the project structure and start implementing features.

## 🎯 Project Vision

Transform the traditional mortgage application process from a long, repetitive form into a **shorter initial intake** followed by **gamified task completion**. Key principles:

- **Separate intake from completion** - Get pre-qualification data fast, then guide through tasks
- **Smart data prefill** - Leverage Prove, FlueID, Truv, Plaid to minimize manual entry
- **AI-powered assistance** - Context-aware help throughout the journey
- **Loan Officer empowerment** - Give LOs visibility and control
- **Mobile-first design** - Most borrowers start on mobile devices

## 📊 Tech Stack

- **Frontend**: Static HTML/CSS/JavaScript (no framework - intentional simplicity)
- **Styling**: Custom CSS with design system (variables, components)
- **Charts**: Chart.js for data visualization
- **Fonts**: Plus Jakarta Sans (UI), JetBrains Mono (mono/labels)
- **Deployment**: Vercel (automatic deployments from GitHub)
- **Version Control**: GitHub

## 📁 Repository Structure

```
C:\GitHub\smartapp\
├── index.html              # Main dashboard/hub
├── styles.css              # Global styles and design system
├── components.css          # Reusable component styles
├── app.js                  # Charts and interactions
├── requirements/           # 14 requirement modules
│   ├── index.html         # Requirements hub
│   ├── urla-gap.html      # URLA data gap analysis
│   ├── data-tasks.html    # Data tasks matrix
│   └── ...                # 11 more modules
├── research/              # Research documentation
│   ├── index.html         # Research hub
│   ├── lo-interviews.html # LO interview findings
│   └── ...                # 4 more pages
├── documents/             # Key strategic documents
│   ├── index.html         # Documents hub
│   ├── flueid-findings.html
│   ├── bolt-feedback.html
│   └── ...                # 2 more pages
├── scoping/               # Timeline and planning (TBD)
├── ai/                    # AI recommendations (TBD)
└── claude-code-guide/     # This guide!
```

## 🎨 Design System

### Color Palette (styles.css)

```css
:root {
    --bg-primary: #0a0f1a;        /* Main background */
    --bg-secondary: #111827;      /* Secondary sections */
    --bg-card: #1a2234;           /* Card backgrounds */
    --accent-blue: #3b82f6;       /* Primary actions */
    --accent-teal: #14b8a6;       /* Secondary accent */
    --accent-purple: #8b5cf6;     /* AI/special features */
    --accent-green: #10b981;      /* Success states */
    --accent-yellow: #f59e0b;     /* Warning/in-progress */
    --accent-red: #ef4444;        /* Critical/errors */
    --text-primary: #f1f5f9;      /* Main text */
    --text-secondary: #94a3b8;    /* Secondary text */
    --text-muted: #64748b;        /* Muted text */
    --border-color: #334155;      /* Borders */
}
```

### Key Components

1. **Tiles** - Clickable cards for navigation
2. **Tables** - Data presentation with status badges
3. **Cards** - Information containers
4. **Breadcrumbs** - Navigation trail
5. **Status Badges** - Color-coded states
6. **Back Buttons** - Consistent navigation

## 🔗 Navigation Pattern

Every detail page follows this structure:

```html
1. Navigation bar (sticky)
2. Breadcrumbs (Home › Section › Detail)
3. Page header with metadata
4. Back button to parent
5. Content sections
6. Footer with next/previous links
```

**Example breadcrumb trail**:
```
Home › Requirements › URLA Data Gap
Home › Documents › FlueID Findings
Home › Research › LO Interviews
```

## 📋 Quick Start for New Engineers

### Step 1: Clone and Explore

```bash
git clone https://github.com/mhansen003/smartapp.git
cd smartapp
```

Open `index.html` in browser to see the dashboard. Browse through:
- `/requirements/urla-gap.html` - Best example of complete module
- `/documents/flueid-findings.html` - Example of detailed content
- `/research/lo-interviews.html` - Example of research documentation

### Step 2: Understand the Pattern

Look at `requirements/urla-gap.html` (lines 1-375) to see the complete pattern:
- Navigation structure
- Breadcrumb implementation
- Page header with metadata
- Content sections with tables
- Status badges and cards
- Footer navigation

### Step 3: Review the Design System

Study these files:
- `styles.css` - Global variables, typography, utilities
- `components.css` - Reusable components (tables, cards, badges)

### Step 4: Check Documentation

Read these key documents for context:
- `/documents/bolt-feedback.html` - Paul's strategic vision
- `/documents/flueid-findings.html` - Vendor capabilities
- `/documents/features-list.html` - Complete feature roadmap

## 🎯 Development Workflow

### Making Changes

1. **Read the pattern** - Look at existing pages in same section
2. **Match the style** - Use same component classes and structure
3. **Test locally** - Open HTML files directly in browser
4. **Commit changes** - Use descriptive commit messages
5. **Push to GitHub** - Auto-deploys to Vercel

### Commit Message Format

```bash
git commit -m "Add [feature name] to [section]

- [Detail 1]
- [Detail 2]
- [Detail 3]

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

### Deployment

Changes pushed to `main` branch automatically deploy to Vercel:
- **Production URL**: https://smartapp-cmgprojects.vercel.app
- **Build time**: ~4 seconds
- **CDN**: Global edge caching

## 🚀 Common Tasks

### Task 1: Add a New Requirements Module

See `implementation-prompts.md` for detailed prompt.

### Task 2: Create Research Documentation Page

See `implementation-prompts.md` for detailed prompt.

### Task 3: Implement Third-Party Integration

See `integration-guide.md` for vendor-specific guides.

### Task 4: Add New Dashboard Section

See `patterns.md` for dashboard tile patterns.

## 📚 Key Resources

- **Live Site**: https://smartapp-cmgprojects.vercel.app
- **GitHub**: https://github.com/mhansen003/smartapp
- **Bolt Prototype**: https://streamlined-digital-a1nj.bolt.host/
- **Figma Flows**: https://www.figma.com/board/T7KV8XnyZwutyW3GB0tR5L/Refinance-Buying-Flow
- **Miro Board**: https://miro.com/app/board/uXjVJw_CSEw=/

## 🎓 Learning Path

**Day 1**: Explore the live site and repository structure
**Day 2**: Read key documents (Bolt Feedback, FlueID Findings, Features List)
**Day 3**: Study one complete module (urla-gap.html or flueid-findings.html)
**Day 4**: Understand design system (styles.css, components.css)
**Day 5**: Ready to implement features using prompts!

## 💡 Pro Tips

1. **Always read before writing** - Look at 2-3 existing pages in the section before creating new ones
2. **Match the pattern exactly** - Consistency is critical for this project
3. **Use component classes** - Don't create new styles, reuse existing components
4. **Test breadcrumbs** - Make sure all navigation links work
5. **Check mobile** - Resize browser to test responsive design
6. **Review footer links** - Ensure "Next" links connect pages sequentially

## 🆘 Getting Help

If you're stuck:

1. **Check existing implementations** - Find a similar page and study it
2. **Review this guide** - Most patterns are documented here
3. **Use Claude Code prompts** - See `implementation-prompts.md`
4. **Ask questions** - Include context about what you've already tried

## 📈 Success Metrics

Your implementation is successful when:

- ✅ Navigation works (breadcrumbs, back button, footer links)
- ✅ Styling matches existing pages exactly
- ✅ Content is well-organized and readable
- ✅ Responsive design works on mobile
- ✅ No console errors in browser
- ✅ Deploys successfully to Vercel

---

**Ready to build?** Start with the prompts in `implementation-prompts.md`!
