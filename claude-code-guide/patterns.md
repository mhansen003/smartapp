# Reusable Code Patterns for Smart App 2.0

Copy-paste ready code snippets for common components and patterns.

---

## 🎯 Complete Page Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Page Title] - Smart App 2.0</title>
    <link rel="stylesheet" href="../styles.css">
    <link rel="stylesheet" href="../components.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="navbar-container">
            <a href="../index.html" class="navbar-brand">
                <span class="navbar-icon">📊</span>
                Smart App 2.0 Strategy Hub
            </a>
            <ul class="navbar-nav">
                <li class="nav-item"><a href="../index.html" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="../requirements/" class="nav-link [active]">Requirements</a></li>
                <li class="nav-item"><a href="../research/" class="nav-link">Research</a></li>
                <li class="nav-item"><a href="../scoping/" class="nav-link">Scoping</a></li>
            </ul>
        </div>
    </nav>

    <!-- Breadcrumbs -->
    <div class="breadcrumbs">
        <div class="breadcrumbs-container">
            <ul class="breadcrumb-list">
                <li class="breadcrumb-item">
                    <a href="../index.html" class="breadcrumb-link">Home</a>
                    <span class="breadcrumb-separator">›</span>
                </li>
                <li class="breadcrumb-item">
                    <a href="../[section]/" class="breadcrumb-link">[Section]</a>
                    <span class="breadcrumb-separator">›</span>
                </li>
                <li class="breadcrumb-item">
                    <span class="breadcrumb-current">[Current Page]</span>
                </li>
            </ul>
        </div>
    </div>

    <!-- Page Header -->
    <header class="page-header">
        <div class="page-header-container">
            <div class="page-header-content">
                <div class="page-label">[Module ##]</div>
                <h1 class="page-title">[Page Title]</h1>
                <p class="page-description">[Brief description of this page's purpose]</p>
                <div class="page-meta">
                    <div class="meta-item">
                        <span class="meta-icon">[Icon]</span>
                        <span>[Meta Info]</span>
                    </div>
                    <!-- More meta items -->
                </div>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <div class="content-container">
        <a href="../[section]/" class="back-button">← Back to [Section]</a>

        <!-- Content Sections -->
        <section class="content-section">
            <h2 class="content-section-title">[Section Title]</h2>
            <!-- Content here -->
        </section>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <p>Smart App 2.0 Strategy Hub • [Page Title]</p>
            <div class="footer-links">
                <a href="../index.html">Dashboard</a>
                <a href="../[section]/">[Section]</a>
                <a href="[next-page].html">Next: [Title] →</a>
            </div>
        </div>
    </footer>
</body>
</html>
```

---

## 📊 Data Table Pattern

```html
<table class="data-table">
    <thead>
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Status</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data value</td>
            <td>Data value</td>
            <td><span class="status-badge status-complete">Complete</span></td>
            <td><a href="#" class="badge badge-info">View</a></td>
        </tr>
        <tr>
            <td>Data value</td>
            <td>Data value</td>
            <td><span class="status-badge status-in-progress">In Progress</span></td>
            <td><a href="#" class="badge badge-info">View</a></td>
        </tr>
        <tr>
            <td>Data value</td>
            <td>Data value</td>
            <td><span class="status-badge status-pending">Pending</span></td>
            <td><a href="#" class="badge badge-info">View</a></td>
        </tr>
    </tbody>
</table>
```

**Status Badge Variants:**
- `.status-complete` - Green (16, 185, 129)
- `.status-in-progress` - Yellow (245, 158, 11)
- `.status-pending` - Gray (100, 116, 139)

---

## 🎴 Card Grid Pattern

```html
<div class="card-grid">
    <div class="card">
        <h3 class="card-title">Card Title</h3>
        <p class="card-description">Card description text goes here with helpful information.</p>
    </div>
    <div class="card">
        <h3 class="card-title">Card Title</h3>
        <p class="card-description">Card description text goes here with helpful information.</p>
    </div>
    <div class="card">
        <h3 class="card-title">Card Title</h3>
        <p class="card-description">Card description text goes here with helpful information.</p>
    </div>
</div>
```

**Colored Card Background:**
```html
<div class="card" style="background: rgba(16, 185, 129, 0.05); border-color: rgba(16, 185, 129, 0.3);">
    <h3 class="card-title" style="color: var(--accent-green);">Success Card</h3>
    <p class="card-description">Green-themed card for success states.</p>
</div>
```

---

## 🏷️ Tiles Grid Pattern

```html
<div class="tiles-grid">
    <a href="page1.html" class="tile">
        <div class="tile-icon">[Icon]</div>
        <div class="tile-content">
            <h3 class="tile-title">Tile Title</h3>
            <p class="tile-description">Description of what this tile links to</p>
            <div class="tile-meta">
                <span class="badge badge-success">Badge</span>
                <span class="badge">Another Badge</span>
            </div>
        </div>
    </a>
    <!-- More tiles -->
</div>
```

**Highlighted Tile:**
```html
<div class="tile tile-highlight">
    <!-- Same content as above -->
</div>
```

---

## 🎯 Priority List Pattern

```html
<div class="priority-list">
    <div class="priority-item">1. First priority item with clear action</div>
    <div class="priority-item">2. Second priority item description</div>
    <div class="priority-item">3. Third priority item task</div>
    <div class="priority-item">4. Fourth priority item goal</div>
    <div class="priority-item">5. Fifth priority item objective</div>
</div>
```

---

## 🏆 Stats Grid Pattern

```html
<div class="stats-grid">
    <div class="stat-card">
        <div class="stat-value">63</div>
        <div class="stat-label">Total Files</div>
    </div>
    <div class="stat-card">
        <div class="stat-value">14</div>
        <div class="stat-label">Modules</div>
    </div>
    <div class="stat-card">
        <div class="stat-value">17</div>
        <div class="stat-label">Sessions</div>
    </div>
    <div class="stat-card">
        <div class="stat-value">5.2GB</div>
        <div class="stat-label">Data Size</div>
    </div>
</div>
```

---

## 🏷️ Badge Components

```html
<!-- Standard badges -->
<span class="badge">Default</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-info">Info</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-design">Design</span>

<!-- Status badges -->
<span class="status-badge status-complete">Complete</span>
<span class="status-badge status-in-progress">In Progress</span>
<span class="status-badge status-pending">Pending</span>

<!-- Priority badges -->
<span class="badge" style="background: var(--accent-red); color: white;">P0</span>
<span class="badge" style="background: var(--accent-yellow); color: white;">P1</span>
<span class="badge" style="background: var(--accent-blue); color: white;">P2</span>
```

---

## 🎨 Color-Coded Sections

```html
<!-- Green (Success) -->
<div class="card" style="background: rgba(16, 185, 129, 0.05); border-color: rgba(16, 185, 129, 0.3);">
    <h3 class="card-title" style="color: var(--accent-green);">Completed</h3>
    <div style="font-size: 2.5rem; font-weight: 800; color: var(--accent-green); margin: 1rem 0;">85%</div>
    <p class="card-description">Description here</p>
</div>

<!-- Yellow (Warning/In-Progress) -->
<div class="card" style="background: rgba(245, 158, 11, 0.05); border-color: rgba(245, 158, 11, 0.3);">
    <h3 class="card-title" style="color: var(--accent-yellow);">Partial Coverage</h3>
    <div style="font-size: 2.5rem; font-weight: 800; color: var(--accent-yellow); margin: 1rem 0;">10%</div>
    <p class="card-description">Description here</p>
</div>

<!-- Red (Critical/Gap) -->
<div class="card" style="background: rgba(239, 68, 68, 0.05); border-color: rgba(239, 68, 68, 0.3);">
    <h3 class="card-title" style="color: var(--accent-red);">Data Gaps</h3>
    <div style="font-size: 2.5rem; font-weight: 800; color: var(--accent-red); margin: 1rem 0;">5%</div>
    <p class="card-description">Description here</p>
</div>

<!-- Blue (Info) -->
<div class="card" style="background: rgba(59, 130, 246, 0.05); border-color: rgba(59, 130, 246, 0.3);">
    <h3 class="card-title" style="color: var(--accent-blue);">Information</h3>
    <p class="card-description">Description here</p>
</div>

<!-- Purple (AI/Special) -->
<div class="card" style="background: rgba(139, 92, 246, 0.05); border-color: rgba(139, 92, 246, 0.3);">
    <h3 class="card-title" style="color: var(--accent-purple);">AI Feature</h3>
    <p class="card-description">Description here</p>
</div>
```

---

## 📝 Quote Block Pattern

```html
<div style="padding: 1rem; background: rgba(59, 130, 246, 0.1); border-radius: 8px; border-left: 4px solid var(--accent-blue);">
    <p style="font-style: italic; color: var(--text-secondary); margin: 0;">
        "This is a quote from a stakeholder or participant that provides valuable context."
    </p>
    <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--text-muted);">
        - Person Name, Title
    </p>
</div>
```

---

## 🔗 Button Patterns

```html
<!-- Primary button -->
<a href="#" class="back-button">← Back to Section</a>

<!-- Link button (blue) -->
<a href="#" class="badge badge-info">View Details</a>

<!-- Success button (green) -->
<a href="#" class="badge badge-success">Live Demo</a>

<!-- Warning button (yellow) -->
<a href="#" class="badge badge-warning">In Progress</a>
```

---

## 📊 Section with Subtitle

```html
<section class="content-section">
    <h2 class="content-section-title">Main Section Title</h2>

    <h3 class="content-section-subtitle">Subsection Title</h3>
    <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem;">
        Introductory paragraph explaining this subsection.
    </p>

    <!-- Content here (table, cards, etc.) -->

    <h3 class="content-section-subtitle">Another Subsection</h3>
    <!-- More content -->
</section>
```

---

## 🎯 Meta Items Pattern

```html
<div class="page-meta">
    <div class="meta-item">
        <span class="meta-icon">📋</span>
        <span>URLA 2020 Fields</span>
    </div>
    <div class="meta-item">
        <span class="meta-icon">🔍</span>
        <span>Gap Analysis</span>
    </div>
    <div class="meta-item">
        <span class="meta-icon">🗺️</span>
        <span>Data Mapping</span>
    </div>
</div>
```

---

## 📋 Checklist Pattern

```html
<div class="priority-list" style="margin-top: 1rem;">
    <div class="priority-item">✓ Completed item with checkmark</div>
    <div class="priority-item">✓ Another completed item</div>
    <div class="priority-item">○ Pending item with circle</div>
    <div class="priority-item">○ Another pending item</div>
</div>
```

---

## 🎨 Hero Section Pattern (for landing pages)

```html
<header class="hero">
    <div class="hero-content">
        <div class="label">[LABEL TEXT]</div>
        <h1>[Main Heading]</h1>
        <p class="subtitle">[Subtitle description text]</p>
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-value">[Number]</div>
                <div class="stat-label">[Label]</div>
            </div>
            <!-- More stats -->
        </div>
    </div>
</header>
```

---

## 📱 Responsive Image Pattern

```html
<img
    src="image.jpg"
    alt="Descriptive alt text"
    style="width: 100%; height: auto; border-radius: 8px; margin: 2rem 0;"
    loading="lazy"
>
```

---

## 🎯 Call-to-Action Pattern

```html
<div style="text-align: center; padding: 3rem 2rem; background: rgba(59, 130, 246, 0.05); border-radius: 12px; margin: 2rem 0;">
    <h3 style="color: var(--accent-blue); margin-bottom: 1rem;">Ready to Get Started?</h3>
    <p style="color: var(--text-secondary); margin-bottom: 2rem;">
        Use these prompts to quickly implement features in Smart App 2.0
    </p>
    <a href="implementation-prompts.html" class="back-button" style="display: inline-block;">
        View Implementation Prompts →
    </a>
</div>
```

---

## 📊 Comparison Table Pattern

```html
<table class="data-table">
    <thead>
        <tr>
            <th>Feature</th>
            <th>Option A</th>
            <th>Option B</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Speed</strong></td>
            <td><span class="badge badge-success">Fast</span></td>
            <td><span class="badge badge-warning">Moderate</span></td>
        </tr>
        <tr>
            <td><strong>Cost</strong></td>
            <td>$30</td>
            <td>$60</td>
        </tr>
        <tr>
            <td><strong>Accuracy</strong></td>
            <td><span class="badge badge-success">High</span></td>
            <td><span class="badge badge-success">Very High</span></td>
        </tr>
    </tbody>
</table>
```

---

## 🎨 Custom CSS Utilities

```html
<!-- Text colors -->
<p style="color: var(--text-primary);">Primary text</p>
<p style="color: var(--text-secondary);">Secondary text</p>
<p style="color: var(--text-muted);">Muted text</p>
<p style="color: var(--accent-blue);">Blue accent text</p>
<p style="color: var(--accent-green);">Green text</p>

<!-- Spacing -->
<div style="margin-top: 1rem;">1rem top margin</div>
<div style="margin-bottom: 2rem;">2rem bottom margin</div>
<div style="padding: 1rem;">1rem padding all sides</div>

<!-- Font weights -->
<p style="font-weight: 400;">Normal weight</p>
<p style="font-weight: 500;">Medium weight</p>
<p style="font-weight: 600;">Semi-bold</p>
<p style="font-weight: 700;">Bold</p>

<!-- Text alignment -->
<p style="text-align: left;">Left aligned</p>
<p style="text-align: center;">Center aligned</p>
<p style="text-align: right;">Right aligned</p>

<!-- Line height -->
<p style="line-height: 1.6;">Comfortable reading (1.6)</p>
<p style="line-height: 1.8;">More spacious (1.8)</p>
```

---

## 🔄 Animation Pattern (Scroll Fade-In)

```html
<!-- Add to app.js -->
<script>
// Scroll animation observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.content-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});
</script>
```

---

## 📚 Documentation Block Pattern

```html
<div style="background: var(--bg-card); border-left: 4px solid var(--accent-teal); padding: 1.5rem; margin: 2rem 0; border-radius: 8px;">
    <h4 style="color: var(--accent-teal); margin-top: 0;">💡 Pro Tip</h4>
    <p style="color: var(--text-secondary); margin-bottom: 0;">
        This is a helpful tip or note that provides additional context or guidance.
    </p>
</div>

<div style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid var(--accent-yellow); padding: 1.5rem; margin: 2rem 0; border-radius: 8px;">
    <h4 style="color: var(--accent-yellow); margin-top: 0;">⚠️ Warning</h4>
    <p style="color: var(--text-secondary); margin-bottom: 0;">
        This is a warning about potential issues or important considerations.
    </p>
</div>

<div style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid var(--accent-red); padding: 1.5rem; margin: 2rem 0; border-radius: 8px;">
    <h4 style="color: var(--accent-red); margin-top: 0;">🚨 Critical</h4>
    <p style="color: var(--text-secondary); margin-bottom: 0;">
        This is critical information that must be addressed immediately.
    </p>
</div>
```

---

## 🎯 Usage Tips

1. **Copy the entire code block** for the pattern you need
2. **Replace placeholder text** in [brackets]
3. **Adjust colors** using CSS variables for consistency
4. **Test responsive behavior** by resizing browser
5. **Check navigation links** are correct relative to your file location

## 🔗 Related Resources

- `acceptance-criteria.md` - Quality standards for each component
- `architecture.md` - Technical architecture overview
- `implementation-prompts.md` - Claude Code prompts for features

---

Happy coding! 🚀 These patterns ensure consistency across all Smart App 2.0 pages.
