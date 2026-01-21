# Acceptance Criteria & Smoke Test Guide - Smart App 2.0

This document provides comprehensive acceptance criteria (AC) for all common components and user experiences in Smart App 2.0. Use this as a checklist for QA, smoke testing, and ensuring production-ready quality.

---

## 🎯 User Experience Acceptance Criteria

### UX Principle 1: Navigation & Wayfinding
**Users should always know where they are and how to get back**

✅ **Acceptance Criteria:**
- [ ] Breadcrumb trail shows complete path from Home to current page
- [ ] All breadcrumb links are functional
- [ ] Back button returns to correct parent page
- [ ] Current page indicated in breadcrumbs (non-clickable, teal color)
- [ ] Navbar shows current section as "active"
- [ ] Footer includes contextual next/previous links
- [ ] URL structure reflects content hierarchy

---

### UX Principle 2: Consistency & Predictability
**Every page should follow established patterns**

✅ **Acceptance Criteria:**
- [ ] Navigation bar appears at top of every page
- [ ] Breadcrumbs appear below navbar on detail pages
- [ ] Page header format consistent across sections
- [ ] Back button in same position on all detail pages
- [ ] Footer appears at bottom of every page
- [ ] Color scheme matches design system
- [ ] Typography hierarchy consistent (h1, h2, h3 usage)

---

### UX Principle 3: Responsive Design
**Works perfectly on mobile, tablet, and desktop**

✅ **Acceptance Criteria:**
- [ ] Mobile (320px-767px): Single column, stacked elements
- [ ] Tablet (768px-1023px): Adjusted grid, readable text
- [ ] Desktop (1024px+): Full layout, all features visible
- [ ] Touch targets minimum 44x44px on mobile
- [ ] Text readable without zoom on all devices
- [ ] Images scale appropriately
- [ ] Tables scroll horizontally on small screens
- [ ] No horizontal scroll on any breakpoint

---

### UX Principle 4: Performance & Loading
**Fast, smooth experience with clear feedback**

✅ **Acceptance Criteria:**
- [ ] Page loads in <2 seconds on 3G connection
- [ ] Images lazy-load below fold
- [ ] No render-blocking resources
- [ ] Smooth scroll behavior enabled
- [ ] Animations perform at 60fps
- [ ] Loading states for async operations
- [ ] No flash of unstyled content (FOUC)

---

### UX Principle 5: Accessibility
**Usable by everyone, including assistive technology**

✅ **Acceptance Criteria:**
- [ ] Semantic HTML elements used correctly
- [ ] ARIA labels on interactive elements
- [ ] Keyboard navigation works throughout
- [ ] Focus indicators visible and clear
- [ ] Color contrast meets WCAG AA standards (4.5:1)
- [ ] Alt text on all images
- [ ] Form labels properly associated with inputs
- [ ] Screen reader announces page changes

---

## 🧩 Component-Level Acceptance Criteria

### 1. Navigation Bar (Navbar)

**Location**: `components.css` lines 1-71

✅ **Functional AC:**
- [ ] Navbar sticky at top when scrolling
- [ ] Logo/brand links to Home (index.html)
- [ ] All nav links navigate to correct sections
- [ ] Active section highlighted visually
- [ ] Hover states work on all links
- [ ] Mobile: Hamburger menu icon appears <768px
- [ ] Navbar doesn't overlap content

✅ **Visual AC:**
- [ ] Background color: `--bg-card` (#1a2234)
- [ ] Text color: `--text-primary` (#f1f5f9)
- [ ] Active link color: `--accent-teal` (#14b8a6)
- [ ] Navbar brand icon displays correctly
- [ ] Font: Plus Jakarta Sans, 600 weight
- [ ] Border bottom: 1px solid `--border-color`
- [ ] Z-index: 1000 (stays on top)

✅ **Responsive AC:**
- [ ] Desktop: Full horizontal menu
- [ ] Tablet: Condensed spacing
- [ ] Mobile: Collapsed to hamburger (if implemented)
- [ ] Touch targets minimum 44px height

---

### 2. Breadcrumbs

**Location**: `components.css` lines 73-120

✅ **Functional AC:**
- [ ] Shows full path: Home › Section › Page
- [ ] Each level except current is clickable link
- [ ] Current level is plain text (not link)
- [ ] Links navigate to correct pages
- [ ] Separator character (›) displays correctly
- [ ] Updates correctly on page navigation

✅ **Visual AC:**
- [ ] Link color: `--text-secondary` (#94a3b8)
- [ ] Hover color: `--accent-teal` (#14b8a6)
- [ ] Current page color: `--accent-teal` (#14b8a6)
- [ ] Separator color: `--text-muted` (#64748b)
- [ ] Font: JetBrains Mono, 400 weight
- [ ] Background: `--bg-secondary` (#111827)
- [ ] Padding: 1rem vertical

✅ **Responsive AC:**
- [ ] Desktop: Full breadcrumb trail
- [ ] Mobile: Condensed with ellipsis if needed
- [ ] No text wrapping
- [ ] Separators aligned properly

---

### 3. Page Header

**Location**: `components.css` lines 122-171

✅ **Functional AC:**
- [ ] Page label displays module/section identifier
- [ ] Title clearly communicates page purpose
- [ ] Description provides context
- [ ] Meta items show relevant information
- [ ] Icons load and display correctly
- [ ] No content overflow

✅ **Visual AC:**
- [ ] Label: Small, uppercase, teal color
- [ ] Title: Large (2.5rem desktop, 2rem mobile), gradient effect
- [ ] Description: Secondary text color, readable size
- [ ] Meta items: Horizontal row, icon + text pairs
- [ ] Background: Gradient from card to secondary
- [ ] Padding: 3rem vertical, 2rem horizontal

✅ **Responsive AC:**
- [ ] Desktop: Single row for meta items
- [ ] Tablet: Meta items may wrap
- [ ] Mobile: Stacked meta items, smaller title
- [ ] All text readable at all breakpoints

---

### 4. Back Button

**Location**: `components.css` lines 173-185

✅ **Functional AC:**
- [ ] Navigates to correct parent page
- [ ] Arrow icon (←) displays before text
- [ ] Hover state provides visual feedback
- [ ] Keyboard accessible (Tab to focus, Enter to activate)

✅ **Visual AC:**
- [ ] Color: `--accent-blue` (#3b82f6)
- [ ] Hover background: rgba(59, 130, 246, 0.1)
- [ ] Border: 1px solid accent-blue
- [ ] Border radius: 8px
- [ ] Padding: 0.75rem 1.5rem
- [ ] Font: 500 weight
- [ ] Transition: 200ms ease

✅ **Responsive AC:**
- [ ] Desktop: Full button with padding
- [ ] Mobile: Adequate touch target (44x44px minimum)
- [ ] Text doesn't wrap or overflow

---

### 5. Tiles Grid

**Location**: `styles.css` lines 175-217

✅ **Functional AC:**
- [ ] Tiles are clickable if they're links
- [ ] Non-link tiles have no pointer cursor
- [ ] Hover animation triggers smoothly
- [ ] Links open in correct window/tab
- [ ] All tiles accessible via keyboard
- [ ] Grid adapts to content count

✅ **Visual AC:**
- [ ] Grid: Auto-fill, minmax(350px, 1fr)
- [ ] Gap: 1.5rem between tiles
- [ ] Hover: Translates up 4px
- [ ] Hover shadow: 0 8px 16px rgba(59, 130, 246, 0.2)
- [ ] Hover border: 1px top border gradient (blue to teal)
- [ ] Background: `--bg-card` (#1a2234)
- [ ] Border radius: 12px

✅ **Responsive AC:**
- [ ] Desktop: Multiple columns
- [ ] Tablet: 2 columns typically
- [ ] Mobile: Single column, full width
- [ ] Tile height adjusts to content
- [ ] Staggered animation delays (0.05s increments)

---

### 6. Data Tables

**Location**: `components.css` lines 283-317

✅ **Functional AC:**
- [ ] Headers are clear and descriptive
- [ ] Data aligns appropriately (text left, numbers right)
- [ ] Sorting works if implemented
- [ ] Table scrolls horizontally on mobile
- [ ] Row hover highlights for scannability
- [ ] Empty states handled gracefully

✅ **Visual AC:**
- [ ] Header background: `--bg-secondary` (#111827)
- [ ] Header text: 600 weight, uppercase, letter-spacing
- [ ] Row borders: 1px solid `--border-color`
- [ ] Hover row background: rgba(59, 130, 246, 0.05)
- [ ] Padding: 1rem cells, 0.75rem headers
- [ ] Text alignment: left for text, right for numbers
- [ ] Font: JetBrains Mono for data values

✅ **Responsive AC:**
- [ ] Desktop: Full table visible
- [ ] Tablet: Horizontal scroll if needed
- [ ] Mobile: Horizontal scroll with scroll indicators
- [ ] Minimum column width respected
- [ ] Header sticky on scroll (if applicable)

---

### 7. Status Badges

**Location**: `components.css` lines 320-341

✅ **Functional AC:**
- [ ] Correctly indicates status state
- [ ] Color matches status meaning
- [ ] Consistent sizing and spacing
- [ ] Screen reader announces status

✅ **Visual AC:**
- [ ] Complete/Success: Green (#10b981)
- [ ] In Progress/Warning: Yellow (#f59e0b)
- [ ] Pending/Inactive: Gray (#64748b)
- [ ] Error/Critical: Red (#ef4444)
- [ ] Border radius: 6px
- [ ] Padding: 0.25rem 0.75rem
- [ ] Font: JetBrains Mono, 500 weight, 0.875rem
- [ ] Text transform: uppercase

✅ **Responsive AC:**
- [ ] Maintains readability at all sizes
- [ ] Doesn't wrap or break oddly
- [ ] Touch-friendly if clickable

---

### 8. Cards

**Location**: `components.css` lines 227-259

✅ **Functional AC:**
- [ ] Content displays completely
- [ ] Clickable cards navigate correctly
- [ ] Hover state provides feedback
- [ ] Card height adapts to content
- [ ] Links within cards work

✅ **Visual AC:**
- [ ] Background: `--bg-card` (#1a2234)
- [ ] Border: 1px solid `--border-color`
- [ ] Border radius: 12px
- [ ] Padding: 2rem
- [ ] Hover: Transform translateY(-4px)
- [ ] Hover border: `--accent-blue`
- [ ] Hover shadow: 0 8px 16px rgba(59, 130, 246, 0.15)
- [ ] Transition: 200ms ease

✅ **Responsive AC:**
- [ ] Desktop: Grid layout (auto-fit minmax 300px)
- [ ] Tablet: Adjusted spacing
- [ ] Mobile: Full width, adequate padding
- [ ] Content doesn't overflow

---

### 9. Card Grid

**Location**: `components.css` lines 227-259

✅ **Functional AC:**
- [ ] Grid responds to container width
- [ ] Cards fill available space proportionally
- [ ] Gap spacing consistent
- [ ] Empty space handled gracefully

✅ **Visual AC:**
- [ ] Grid: Auto-fit minmax(300px, 1fr)
- [ ] Gap: 1.5rem
- [ ] Align-items: start (top-aligned)

✅ **Responsive AC:**
- [ ] Desktop: Multiple columns
- [ ] Tablet: 2-3 columns typically
- [ ] Mobile: Single column
- [ ] Min-width 300px enforced

---

### 10. Footer

**Location**: `components.css` lines 261-281

✅ **Functional AC:**
- [ ] Appears at bottom of all pages
- [ ] Links navigate correctly
- [ ] Copyright/attribution present
- [ ] Last updated date accurate (if shown)
- [ ] External links open in new tab

✅ **Visual AC:**
- [ ] Background: `--bg-secondary` (#111827)
- [ ] Border top: 1px solid `--border-color`
- [ ] Text color: `--text-secondary` (#94a3b8)
- [ ] Link color: `--accent-blue` (#3b82f6)
- [ ] Link hover: `--accent-teal` (#14b8a6)
- [ ] Padding: 2rem
- [ ] Text align: center

✅ **Responsive AC:**
- [ ] Desktop: Horizontal link layout
- [ ] Mobile: Stacked links, full width
- [ ] Links adequately spaced
- [ ] Touch targets meet minimum size

---

### 11-20. Form Components

#### 11. Text Input

✅ **Functional AC:**
- [ ] Accepts user input
- [ ] Validates input (if applicable)
- [ ] Shows error states
- [ ] Label properly associated
- [ ] Placeholder text helpful
- [ ] Auto-focus where appropriate

✅ **Visual AC:**
- [ ] Background: rgba(255, 255, 255, 0.05)
- [ ] Border: 1px solid `--border-color`
- [ ] Focus border: `--accent-blue`
- [ ] Error border: `--accent-red`
- [ ] Padding: 0.75rem 1rem
- [ ] Border radius: 8px
- [ ] Font: Plus Jakarta Sans

✅ **Responsive AC:**
- [ ] Full width on mobile
- [ ] Appropriate width on desktop
- [ ] Touch-friendly on mobile

#### 12. Textarea

✅ **Functional AC:**
- [ ] Allows multi-line input
- [ ] Resizable (if allowed)
- [ ] Character count (if limited)
- [ ] Validates content

✅ **Visual AC:**
- [ ] Same styling as text input
- [ ] Min-height: 150px
- [ ] Resize: vertical only

#### 13. Select Dropdown

✅ **Functional AC:**
- [ ] Opens dropdown on click
- [ ] Options selectable
- [ ] Selected value displays
- [ ] Keyboard navigation works
- [ ] Default option shown

✅ **Visual AC:**
- [ ] Consistent with input styling
- [ ] Dropdown arrow indicator
- [ ] Options list styled properly

#### 14. Checkbox

✅ **Functional AC:**
- [ ] Toggles on/off
- [ ] Maintains state
- [ ] Label clickable
- [ ] Keyboard accessible

✅ **Visual AC:**
- [ ] Custom styled checkbox
- [ ] Check mark visible when checked
- [ ] Hover state
- [ ] Focus indicator

#### 15. Radio Button

✅ **Functional AC:**
- [ ] Mutually exclusive selection
- [ ] One selected at a time
- [ ] Label clickable
- [ ] Keyboard navigation

✅ **Visual AC:**
- [ ] Custom styled radio
- [ ] Dot visible when selected
- [ ] Consistent with checkbox styling

#### 16. Toggle Switch

✅ **Functional AC:**
- [ ] Toggles between on/off
- [ ] Visual state change immediate
- [ ] Keyboard accessible
- [ ] Screen reader compatible

✅ **Visual AC:**
- [ ] Off: Gray background
- [ ] On: Blue/teal background
- [ ] Smooth slide animation
- [ ] Label positioned correctly

#### 17. File Upload

✅ **Functional AC:**
- [ ] Opens file picker
- [ ] Shows selected file name
- [ ] Validates file type
- [ ] Shows file size
- [ ] Multiple files (if allowed)
- [ ] Remove file option

✅ **Visual AC:**
- [ ] Upload area clearly defined
- [ ] Drag-and-drop indicator
- [ ] Selected file list styled
- [ ] Progress indicator (if uploading)

#### 18. Date Picker

✅ **Functional AC:**
- [ ] Calendar opens on click
- [ ] Date selectable
- [ ] Date format consistent
- [ ] Validates date range
- [ ] Keyboard input allowed

✅ **Visual AC:**
- [ ] Calendar styled consistently
- [ ] Selected date highlighted
- [ ] Today indicator
- [ ] Month/year navigation

#### 19. Search Input

✅ **Functional AC:**
- [ ] Accepts search query
- [ ] Search icon visible
- [ ] Clear button appears when typing
- [ ] Search triggers on Enter
- [ ] Real-time search (if implemented)

✅ **Visual AC:**
- [ ] Search icon left or right
- [ ] Clear (×) button on right
- [ ] Placeholder text helpful
- [ ] Same styling as text input

#### 20. Form Validation Messages

✅ **Functional AC:**
- [ ] Appears on validation failure
- [ ] Clear error message
- [ ] Points to specific field
- [ ] Dismissible
- [ ] Blocks form submission if errors

✅ **Visual AC:**
- [ ] Red text color
- [ ] Icon indicator (!)
- [ ] Positioned near field
- [ ] Not intrusive

---

### 21-40. Navigation & Layout Components

#### 21. Sidebar Navigation

✅ **Functional AC:**
- [ ] Shows current page/section
- [ ] All links functional
- [ ] Collapsible on mobile
- [ ] Keyboard navigable
- [ ] Scroll position maintained

✅ **Visual AC:**
- [ ] Fixed position on desktop
- [ ] Active item highlighted
- [ ] Hover states
- [ ] Proper spacing

#### 22. Tabs Component

✅ **Functional AC:**
- [ ] Switches content on click
- [ ] One tab active at time
- [ ] Keyboard navigation
- [ ] URL updates (if applicable)

✅ **Visual AC:**
- [ ] Active tab visually distinct
- [ ] Underline or background
- [ ] Smooth content transition

#### 23. Accordion/Collapsible

✅ **Functional AC:**
- [ ] Expands/collapses on click
- [ ] One or multiple open (per design)
- [ ] Smooth animation
- [ ] Keyboard accessible
- [ ] Icon rotates

✅ **Visual AC:**
- [ ] Chevron/arrow indicator
- [ ] Border separation
- [ ] Smooth height transition
- [ ] Padding in expanded state

#### 24. Modal/Dialog

✅ **Functional AC:**
- [ ] Opens on trigger
- [ ] Closes on X button
- [ ] Closes on outside click
- [ ] Closes on Escape key
- [ ] Focus traps inside modal
- [ ] Background scrolling disabled

✅ **Visual AC:**
- [ ] Overlay darkens background
- [ ] Modal centered on screen
- [ ] Close button visible
- [ ] Smooth fade-in animation
- [ ] Box shadow for depth

#### 25. Dropdown Menu

✅ **Functional AC:**
- [ ] Opens on click/hover
- [ ] Closes when clicking away
- [ ] Items clickable
- [ ] Submenu support (if needed)
- [ ] Keyboard navigation

✅ **Visual AC:**
- [ ] Positioned correctly below trigger
- [ ] Border and shadow
- [ ] Hover highlight on items
- [ ] Smooth fade-in

#### 26. Tooltip

✅ **Functional AC:**
- [ ] Appears on hover
- [ ] Disappears on mouse out
- [ ] Keyboard accessible
- [ ] Doesn't block interaction
- [ ] Positioned smartly (doesn't overflow)

✅ **Visual AC:**
- [ ] Dark background
- [ ] White text
- [ ] Small arrow pointing to element
- [ ] Fade-in animation
- [ ] Readable font size

#### 27. Alert/Banner

✅ **Functional AC:**
- [ ] Displays at top of page
- [ ] Dismissible (if designed)
- [ ] Doesn't block critical content
- [ ] Appropriate urgency level

✅ **Visual AC:**
- [ ] Color matches alert type (success, warning, error, info)
- [ ] Icon matches type
- [ ] Close button (X) on right
- [ ] Adequate padding

#### 28. Loading Spinner

✅ **Functional AC:**
- [ ] Displays during async operations
- [ ] Centers in container
- [ ] Doesn't block critical actions
- [ ] Accessible label

✅ **Visual AC:**
- [ ] Smooth rotation animation
- [ ] Accent color
- [ ] Appropriate size for context
- [ ] Semi-transparent background (if overlay)

#### 29. Progress Bar

✅ **Functional AC:**
- [ ] Shows completion percentage
- [ ] Updates in real-time
- [ ] Accessible progress announcements

✅ **Visual AC:**
- [ ] Fill color: `--accent-blue`
- [ ] Background: `--bg-secondary`
- [ ] Height: 8px typically
- [ ] Border radius: 4px
- [ ] Smooth fill animation

#### 30. Pagination

✅ **Functional AC:**
- [ ] Page numbers clickable
- [ ] Previous/Next buttons work
- [ ] Current page highlighted
- [ ] First/Last page buttons (if applicable)
- [ ] Disabled state for unavailable actions

✅ **Visual AC:**
- [ ] Current page distinct color
- [ ] Hover states on clickable items
- [ ] Disabled state grayed out
- [ ] Adequate spacing between numbers

---

### 31-50. Content Display Components

#### 31. Image Component

✅ **Functional AC:**
- [ ] Loads correctly
- [ ] Alt text present
- [ ] Responsive sizing
- [ ] Lazy loading (below fold)
- [ ] Fallback on error

✅ **Visual AC:**
- [ ] Maintains aspect ratio
- [ ] Border radius (if designed)
- [ ] Object-fit: cover/contain
- [ ] No layout shift on load

#### 32. Video Player

✅ **Functional AC:**
- [ ] Plays/pauses
- [ ] Volume control
- [ ] Fullscreen option
- [ ] Progress scrubbing
- [ ] Keyboard controls

✅ **Visual AC:**
- [ ] Custom controls styled
- [ ] Poster image shown
- [ ] Responsive sizing

#### 33. Icon Component

✅ **Functional AC:**
- [ ] Displays correct icon
- [ ] SVG or icon font
- [ ] Accessible label
- [ ] Consistent sizing

✅ **Visual AC:**
- [ ] Color matches context
- [ ] Size appropriate
- [ ] Aligned with text (if inline)

#### 34. Avatar/Profile Picture

✅ **Functional AC:**
- [ ] Displays user image or initials
- [ ] Fallback to initials if no image
- [ ] Clickable (if profile link)

✅ **Visual AC:**
- [ ] Circular or rounded square
- [ ] Border (optional)
- [ ] Consistent sizing
- [ ] Initials centered

#### 35. Quote Block

✅ **Functional AC:**
- [ ] Clearly indicates quoted content
- [ ] Attribution shown (if applicable)
- [ ] Nested quotes supported

✅ **Visual AC:**
- [ ] Left border accent
- [ ] Italic text
- [ ] Indented from main content
- [ ] Quotation marks (if styled)

#### 36. Code Block

✅ **Functional AC:**
- [ ] Preserves formatting/indentation
- [ ] Copy button works
- [ ] Syntax highlighting (if implemented)
- [ ] Horizontal scroll for long lines

✅ **Visual AC:**
- [ ] Monospace font (JetBrains Mono)
- [ ] Dark background
- [ ] Padding and border radius
- [ ] Line numbers (if shown)

#### 37. List (Ordered/Unordered)

✅ **Functional AC:**
- [ ] Items display in correct order
- [ ] Nested lists supported
- [ ] List markers visible

✅ **Visual AC:**
- [ ] Consistent indentation
- [ ] Markers aligned
- [ ] Adequate spacing between items
- [ ] Custom markers (if styled)

#### 38. Tag/Label Component

✅ **Functional AC:**
- [ ] Displays category/tag name
- [ ] Removable (if applicable)
- [ ] Clickable (if filterable)

✅ **Visual AC:**
- [ ] Rounded corners
- [ ] Small padding
- [ ] Color-coded by category
- [ ] Remove icon (X) if removable

#### 39. Stat/Metric Display

✅ **Functional AC:**
- [ ] Shows numeric value
- [ ] Label describes metric
- [ ] Updates in real-time (if live data)
- [ ] Formatting (commas, decimals) correct

✅ **Visual AC:**
- [ ] Large number, prominent
- [ ] Small label below
- [ ] Color matches meaning (green=good, red=bad)
- [ ] Icon (if applicable)

#### 40. Timeline Component

✅ **Functional AC:**
- [ ] Events in chronological order
- [ ] Dates/times shown
- [ ] Expandable details (if applicable)
- [ ] Current event highlighted

✅ **Visual AC:**
- [ ] Vertical line connecting events
- [ ] Dots/icons at each event
- [ ] Dates aligned consistently
- [ ] Past/future distinction

---

### 41-60. Interactive Components

#### 41. Slider/Range Input

✅ **Functional AC:**
- [ ] Draggable handle
- [ ] Value updates in real-time
- [ ] Min/max values enforced
- [ ] Keyboard increment/decrement
- [ ] Step values respected

✅ **Visual AC:**
- [ ] Track shows full range
- [ ] Filled track shows selected range
- [ ] Handle clearly visible
- [ ] Value display (if shown)

#### 42. Rating Component (Stars)

✅ **Functional AC:**
- [ ] Clickable/selectable
- [ ] Hover preview
- [ ] Half-star support (if designed)
- [ ] Read-only state (for display)

✅ **Visual AC:**
- [ ] Empty stars: gray
- [ ] Filled stars: yellow/gold
- [ ] Smooth fill animation
- [ ] Consistent sizing

#### 43. Share Buttons

✅ **Functional AC:**
- [ ] Opens share dialog
- [ ] Correct platform selected
- [ ] URL/content shared correctly
- [ ] Opens in popup window

✅ **Visual AC:**
- [ ] Platform icons recognizable
- [ ] Platform brand colors
- [ ] Hover states
- [ ] Adequate spacing

#### 44. Like/Favorite Button

✅ **Functional AC:**
- [ ] Toggles liked state
- [ ] Persists state
- [ ] Count updates (if shown)
- [ ] Optimistic UI update

✅ **Visual AC:**
- [ ] Unliked: outline/gray
- [ ] Liked: filled/red (heart) or blue
- [ ] Animation on toggle
- [ ] Count positioned clearly

#### 45. Comment Component

✅ **Functional AC:**
- [ ] Displays comment content
- [ ] Shows author and timestamp
- [ ] Reply functionality (if applicable)
- [ ] Edit/delete (if allowed)

✅ **Visual AC:**
- [ ] Avatar on left
- [ ] Content in speech bubble
- [ ] Timestamp subtle
- [ ] Nested comments indented

#### 46. Search Results List

✅ **Functional AC:**
- [ ] Results display correctly
- [ ] Clickable to detail page
- [ ] Pagination/infinite scroll
- [ ] No results message
- [ ] Loading state

✅ **Visual AC:**
- [ ] Result title prominent
- [ ] Snippet/preview text
- [ ] Metadata (date, author, etc.)
- [ ] Hover highlight

#### 47. Filter Panel

✅ **Functional AC:**
- [ ] Filters apply correctly
- [ ] Multiple filters combine (AND/OR)
- [ ] Clear all filters
- [ ] Filter count indicator

✅ **Visual AC:**
- [ ] Grouped by category
- [ ] Active filters highlighted
- [ ] Collapse/expand sections
- [ ] Apply/Reset buttons

#### 48. Sort Dropdown

✅ **Functional AC:**
- [ ] Sorting applies correctly
- [ ] Ascending/descending toggle
- [ ] Default sort indicated

✅ **Visual AC:**
- [ ] Current sort shown
- [ ] Arrow indicator (up/down)
- [ ] Dropdown list styled

#### 49. Calendar Component

✅ **Functional AC:**
- [ ] Displays current month
- [ ] Navigate previous/next month
- [ ] Date selection works
- [ ] Events shown (if applicable)
- [ ] Multi-date selection (if designed)

✅ **Visual AC:**
- [ ] Header shows month/year
- [ ] Grid layout (7 columns)
- [ ] Today highlighted
- [ ] Selected dates distinct
- [ ] Past dates grayed (if disabled)

#### 50. Data Visualization (Chart)

✅ **Functional AC:**
- [ ] Data loads and displays
- [ ] Legend accurate
- [ ] Hover shows data details
- [ ] Responsive to container size
- [ ] Accessible data table fallback

✅ **Visual AC:**
- [ ] Colors from design system
- [ ] Axes labeled clearly
- [ ] Smooth animations
- [ ] Readable font sizes
- [ ] Grid lines subtle

---

### 51-75. Specialized Components

#### 51. Stepper/Wizard

✅ **Functional AC:**
- [ ] Shows current step
- [ ] Next/Previous navigation
- [ ] Can jump to completed steps
- [ ] Validates before advancing
- [ ] Progress saved

✅ **Visual AC:**
- [ ] Current step highlighted
- [ ] Completed steps checked
- [ ] Incomplete steps grayed
- [ ] Connector lines between steps

#### 52. Carousel/Slider

✅ **Functional AC:**
- [ ] Auto-advance (if designed)
- [ ] Manual navigation (arrows)
- [ ] Dot indicators clickable
- [ ] Swipe on touch devices
- [ ] Keyboard navigation

✅ **Visual AC:**
- [ ] Smooth transitions
- [ ] Arrows visible on hover
- [ ] Dots show current slide
- [ ] Slides centered

#### 53. Hero Section

✅ **Functional AC:**
- [ ] Content displays correctly
- [ ] CTA buttons work
- [ ] Background image loads
- [ ] Readable on all devices

✅ **Visual AC:**
- [ ] Large heading
- [ ] Background image/gradient
- [ ] Overlay for text readability
- [ ] CTA buttons prominent
- [ ] Centered content

#### 54. Feature Grid

✅ **Functional AC:**
- [ ] Icons display correctly
- [ ] Titles and descriptions clear
- [ ] Links work (if clickable)
- [ ] Grid responsive

✅ **Visual AC:**
- [ ] Icon, title, description layout
- [ ] Consistent spacing
- [ ] Hover effects
- [ ] Grid: 3-4 columns desktop, 1-2 tablet, 1 mobile

#### 55. Pricing Table

✅ **Functional AC:**
- [ ] Plans clearly differentiated
- [ ] Features listed
- [ ] CTA buttons work
- [ ] Recommended plan highlighted

✅ **Visual AC:**
- [ ] Columns aligned
- [ ] Price prominent
- [ ] Feature checkmarks
- [ ] Recommended badge/ribbon

#### 56. Testimonial Component

✅ **Functional AC:**
- [ ] Quote displays
- [ ] Author shown
- [ ] Photo loads
- [ ] Multiple testimonials cycle (if carousel)

✅ **Visual AC:**
- [ ] Quote in larger text
- [ ] Author name and title
- [ ] Photo circular
- [ ] Quotation marks styled

#### 57. FAQ Accordion

✅ **Functional AC:**
- [ ] Questions clickable
- [ ] Answers expand/collapse
- [ ] Multiple can be open (or not, per design)
- [ ] Search/filter (if implemented)

✅ **Visual AC:**
- [ ] Question bold
- [ ] Answer normal weight
- [ ] Chevron rotates on expand
- [ ] Smooth height animation

#### 58. Contact Form

✅ **Functional AC:**
- [ ] All fields validate
- [ ] Required fields enforced
- [ ] Email format validated
- [ ] Submission works
- [ ] Success/error message

✅ **Visual AC:**
- [ ] Form fields styled consistently
- [ ] Labels clear
- [ ] Submit button prominent
- [ ] Success message green
- [ ] Error messages red

#### 59. Newsletter Signup

✅ **Functional AC:**
- [ ] Email input validates
- [ ] Submission works
- [ ] Success/error handling
- [ ] Privacy policy linked

✅ **Visual AC:**
- [ ] Simple, focused design
- [ ] CTA button clear
- [ ] Inline form (email + button)
- [ ] Success message

#### 60. Social Proof Badges

✅ **Functional AC:**
- [ ] Logos/icons display
- [ ] Links work (if clickable)
- [ ] Tooltip shows full name (if truncated)

✅ **Visual AC:**
- [ ] Grayscale or color
- [ ] Consistent sizing
- [ ] Horizontal row
- [ ] Adequate spacing

---

### 61-75. Data Entry & Forms

#### 61. Multi-Step Form

✅ **Functional AC:**
- [ ] Step navigation works
- [ ] Data persists between steps
- [ ] Can go back without losing data
- [ ] Final submission works
- [ ] Progress indicator accurate

✅ **Visual AC:**
- [ ] Step numbers/titles
- [ ] Progress bar
- [ ] Next/Previous buttons
- [ ] Summary on final step

#### 62. Autocomplete Input

✅ **Functional AC:**
- [ ] Suggestions appear on typing
- [ ] Suggestions clickable
- [ ] Keyboard navigation (arrows)
- [ ] Enter selects suggestion
- [ ] Escape closes suggestions

✅ **Visual AC:**
- [ ] Dropdown positioned correctly
- [ ] Matching text highlighted
- [ ] Hover highlight on suggestions
- [ ] Max height with scroll

#### 63. Tag Input (Multi-Select)

✅ **Functional AC:**
- [ ] Tags can be added
- [ ] Tags can be removed
- [ ] Duplicate prevention
- [ ] Max tags enforced (if limit)

✅ **Visual AC:**
- [ ] Tags display as chips
- [ ] Remove X on each tag
- [ ] Input field expandable
- [ ] Wrap to multiple lines

#### 64. Color Picker

✅ **Functional AC:**
- [ ] Color selectable
- [ ] Hex value shown
- [ ] RGB values shown
- [ ] Input accepts hex codes
- [ ] Eyedropper (if supported)

✅ **Visual AC:**
- [ ] Color preview swatch
- [ ] Picker UI styled
- [ ] Recent colors (if saved)

#### 65. Rich Text Editor

✅ **Functional AC:**
- [ ] Bold, italic, underline work
- [ ] Lists (ordered, unordered)
- [ ] Links insertable
- [ ] Images insertable
- [ ] HTML or markdown output

✅ **Visual AC:**
- [ ] Toolbar buttons styled
- [ ] Editor area clearly defined
- [ ] Formatting visible in editor

#### 66. Signature Pad

✅ **Functional AC:**
- [ ] Drawing with mouse/touch
- [ ] Clear button works
- [ ] Save/export signature
- [ ] Signature validates (not empty)

✅ **Visual AC:**
- [ ] Canvas area clear
- [ ] Border defines area
- [ ] Clear button visible

#### 67. Location/Map Picker

✅ **Functional AC:**
- [ ] Map loads correctly
- [ ] Location selectable by click
- [ ] Search for address
- [ ] Marker shows selected location
- [ ] Coordinates/address output

✅ **Visual AC:**
- [ ] Map styled appropriately
- [ ] Marker visible
- [ ] Search input integrated

#### 68. Password Strength Indicator

✅ **Functional AC:**
- [ ] Updates as user types
- [ ] Criteria shown (length, special chars, etc.)
- [ ] Weak/Medium/Strong indicated

✅ **Visual AC:**
- [ ] Progress bar or color indicator
- [ ] Red (weak) to green (strong)
- [ ] Criteria checklist

#### 69. Two-Factor Auth Input

✅ **Functional AC:**
- [ ] 6-digit code input
- [ ] Auto-advances to next field
- [ ] Paste entire code works
- [ ] Validates code

✅ **Visual AC:**
- [ ] 6 separate boxes
- [ ] Large, clear numbers
- [ ] Active field highlighted

#### 70. Phone Number Input

✅ **Functional AC:**
- [ ] Country code selector
- [ ] Format validation
- [ ] Auto-formatting (with dashes/parens)
- [ ] International numbers supported

✅ **Visual AC:**
- [ ] Flag icon for country
- [ ] Formatted display (e.g., (555) 123-4567)

#### 71. Credit Card Input

✅ **Functional AC:**
- [ ] Card number validated
- [ ] Expiry date validated
- [ ] CVV input
- [ ] Card type detected

✅ **Visual AC:**
- [ ] Card brand icon
- [ ] Masked number (••••  1234)
- [ ] Formatting with spaces

#### 72. Address Autocomplete

✅ **Functional AC:**
- [ ] Google/API suggestions
- [ ] Selects fills all fields
- [ ] Manual entry still possible

✅ **Visual AC:**
- [ ] Suggestions dropdown
- [ ] Fields clearly labeled

#### 73. CAPTCHA Component

✅ **Functional AC:**
- [ ] Loads correctly
- [ ] Validates user
- [ ] Refreshable
- [ ] Accessible alternative

✅ **Visual AC:**
- [ ] Integrated smoothly
- [ ] Doesn't break layout

#### 74. Consent Checkboxes

✅ **Functional AC:**
- [ ] Required for submission
- [ ] Link to terms/privacy policy
- [ ] Validates checked state

✅ **Visual AC:**
- [ ] Checkbox + label
- [ ] Link underlined
- [ ] Error if not checked

#### 75. Conditional Fields

✅ **Functional AC:**
- [ ] Show/hide based on selection
- [ ] Smooth animation
- [ ] Validates only visible fields

✅ **Visual AC:**
- [ ] Fade/slide animation
- [ ] No layout jump

---

### 76-100. Advanced & Utility Components

#### 76. Skeleton Loader

✅ **Functional AC:**
- [ ] Shows while content loads
- [ ] Matches content layout
- [ ] Smooth transition to real content

✅ **Visual AC:**
- [ ] Gray animated bars
- [ ] Pulsing animation
- [ ] Matches final layout shape

#### 77. Empty State

✅ **Functional AC:**
- [ ] Shows when no data
- [ ] Helpful message
- [ ] CTA to add content

✅ **Visual AC:**
- [ ] Illustration/icon
- [ ] Centered message
- [ ] Clear CTA button

#### 78. Error State

✅ **Functional AC:**
- [ ] Shows on errors
- [ ] Clear error message
- [ ] Retry button
- [ ] Error logged (if applicable)

✅ **Visual AC:**
- [ ] Red color scheme
- [ ] Error icon
- [ ] Helpful instructions

#### 79. 404 Page

✅ **Functional AC:**
- [ ] Shows on invalid URLs
- [ ] Link to home
- [ ] Search (if applicable)

✅ **Visual AC:**
- [ ] Fun/branded 404 message
- [ ] Clear navigation back

#### 80. Maintenance Mode

✅ **Functional AC:**
- [ ] Shows during maintenance
- [ ] Estimated time (if known)
- [ ] Contact info

✅ **Visual AC:**
- [ ] Branded page
- [ ] Clear message
- [ ] Not alarming

#### 81. Cookie Consent Banner

✅ **Functional AC:**
- [ ] Shows on first visit
- [ ] Accept/Decline buttons
- [ ] Remembers choice
- [ ] Link to cookie policy

✅ **Visual AC:**
- [ ] Fixed at bottom
- [ ] Doesn't block content
- [ ] Clear buttons

#### 82. Notification Badge

✅ **Functional AC:**
- [ ] Shows count
- [ ] Updates in real-time
- [ ] Dismissable

✅ **Visual AC:**
- [ ] Small circle
- [ ] Red background
- [ ] White number
- [ ] Positioned on icon (top-right)

#### 83. Keyboard Shortcuts Panel

✅ **Functional AC:**
- [ ] Lists shortcuts
- [ ] Opens with key combo (e.g., ?)
- [ ] Organized by category

✅ **Visual AC:**
- [ ] Modal overlay
- [ ] Key graphics
- [ ] Descriptions

#### 84. Language Selector

✅ **Functional AC:**
- [ ] Language switches
- [ ] URL updates (if applicable)
- [ ] Content translates

✅ **Visual AC:**
- [ ] Flag icons
- [ ] Current language shown
- [ ] Dropdown list

#### 85. Theme Switcher (Dark/Light)

✅ **Functional AC:**
- [ ] Toggles theme
- [ ] Remembers preference
- [ ] Smooth transition

✅ **Visual AC:**
- [ ] Sun/moon icon
- [ ] Toggle switch
- [ ] Colors update throughout

#### 86. Print Styles

✅ **Functional AC:**
- [ ] Page prints correctly
- [ ] Navigation hidden
- [ ] Links show URLs
- [ ] Page breaks logical

✅ **Visual AC:**
- [ ] Black text on white
- [ ] No backgrounds (saves ink)
- [ ] Readable font sizes

#### 87. Share Sheet

✅ **Functional AC:**
- [ ] Native share dialog
- [ ] URL and title shared
- [ ] Works on mobile

✅ **Visual AC:**
- [ ] Share icon recognizable
- [ ] Tooltip helpful

#### 88. Zoom Controls

✅ **Functional AC:**
- [ ] Zoom in/out work
- [ ] Reset zoom
- [ ] Keyboard shortcuts (+/-)

✅ **Visual AC:**
- [ ] +/- buttons
- [ ] Current zoom level shown

#### 89. Fullscreen Toggle

✅ **Functional AC:**
- [ ] Enters fullscreen
- [ ] Exits fullscreen
- [ ] Escape key exits

✅ **Visual AC:**
- [ ] Expand/compress icon
- [ ] Tooltip indicates action

#### 90. Copy to Clipboard

✅ **Functional AC:**
- [ ] Copies text
- [ ] Success feedback
- [ ] Fallback for unsupported browsers

✅ **Visual AC:**
- [ ] Copy icon button
- [ ] Checkmark on success
- [ ] Tooltip "Copied!"

#### 91. QR Code Generator

✅ **Functional AC:**
- [ ] Generates QR code
- [ ] Scannable
- [ ] Downloadable

✅ **Visual AC:**
- [ ] Clear code
- [ ] Adequate size
- [ ] Download button

#### 92. Export Button (CSV, PDF)

✅ **Functional AC:**
- [ ] Exports data correctly
- [ ] File downloads
- [ ] Filename descriptive

✅ **Visual AC:**
- [ ] Export icon
- [ ] Format shown (CSV, PDF)

#### 93. Drag & Drop Area

✅ **Functional AC:**
- [ ] Accepts dragged items
- [ ] Visual feedback on hover
- [ ] Validates file types

✅ **Visual AC:**
- [ ] Dashed border
- [ ] Hover state (blue border)
- [ ] Upload icon

#### 94. Infinite Scroll

✅ **Functional AC:**
- [ ] Loads more on scroll
- [ ] Loading indicator
- [ ] No duplicate items
- [ ] Handles errors

✅ **Visual AC:**
- [ ] Smooth content addition
- [ ] Spinner while loading

#### 95. Virtual Scroll (Large Lists)

✅ **Functional AC:**
- [ ] Renders only visible items
- [ ] Performance optimized
- [ ] Scroll position accurate

✅ **Visual AC:**
- [ ] No visual difference from normal scroll

#### 96. Grid View/List View Toggle

✅ **Functional AC:**
- [ ] Switches view
- [ ] Remembers preference
- [ ] Content adapts

✅ **Visual AC:**
- [ ] Grid/list icons
- [ ] Active view highlighted

#### 97. Heatmap Visualization

✅ **Functional AC:**
- [ ] Data displays correctly
- [ ] Hover shows details
- [ ] Color scale shown

✅ **Visual AC:**
- [ ] Color gradient (cool to hot)
- [ ] Grid layout
- [ ] Legend

#### 98. Sparkline (Mini Chart)

✅ **Functional AC:**
- [ ] Trend visible
- [ ] Hover shows value
- [ ] Responsive

✅ **Visual AC:**
- [ ] Small, inline
- [ ] Single color
- [ ] Smooth line

#### 99. Kanban Board

✅ **Functional AC:**
- [ ] Drag cards between columns
- [ ] Saves position
- [ ] Add new cards

✅ **Visual AC:**
- [ ] Columns side-by-side
- [ ] Cards stackable
- [ ] Smooth drag animation

#### 100. Tree View (Hierarchical)

✅ **Functional AC:**
- [ ] Expand/collapse nodes
- [ ] Selection works
- [ ] Lazy loading (if large)

✅ **Visual AC:**
- [ ] Indentation shows hierarchy
- [ ] Chevron indicates expandable
- [ ] Lines connecting nodes (optional)

---

## 🧪 Comprehensive Smoke Test Checklist

### Pre-Deployment Smoke Test

#### Environment & Setup
- [ ] Code deployed to staging/production
- [ ] DNS resolving correctly
- [ ] SSL certificate valid
- [ ] CDN serving static assets
- [ ] No console errors on load

#### Navigation & Routing
- [ ] Home page loads
- [ ] All main navigation links work
- [ ] Breadcrumbs functional on all detail pages
- [ ] Back buttons return to correct pages
- [ ] Footer links navigate correctly
- [ ] 404 page displays for invalid URLs

#### Visual & Layout
- [ ] No layout shifts on load
- [ ] All images load correctly
- [ ] Fonts render properly
- [ ] Colors match design system
- [ ] Responsive breakpoints work (320px, 768px, 1024px, 1440px)
- [ ] No horizontal scroll on any page

#### Forms & Interactions
- [ ] All forms submit successfully
- [ ] Validation messages appear
- [ ] Required fields enforced
- [ ] Error states display correctly
- [ ] Success messages show

#### Performance
- [ ] Page load time <3 seconds
- [ ] Time to Interactive <5 seconds
- [ ] Largest Contentful Paint <2.5 seconds
- [ ] Cumulative Layout Shift <0.1
- [ ] No memory leaks

#### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Focus indicators visible
- [ ] Color contrast passing
- [ ] ARIA labels present

#### Cross-Browser
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

#### Data & Content
- [ ] All content displays correctly
- [ ] No placeholder/lorem ipsum text
- [ ] Data tables populate
- [ ] Charts render
- [ ] Search works

---

## 📊 Quality Metrics

### Definition of Done

A feature is DONE when:
- ✅ All functional AC passing
- ✅ All visual AC passing
- ✅ All responsive AC passing
- ✅ No console errors
- ✅ Smoke test passing
- ✅ Code reviewed
- ✅ Documentation updated
- ✅ Deployed to production

### Quality Gates

**Pre-Merge:**
- [ ] Linter passing (if configured)
- [ ] No accessibility violations
- [ ] Manual testing complete

**Pre-Deployment:**
- [ ] Smoke test 100% passing
- [ ] Cross-browser tested
- [ ] Mobile tested

**Post-Deployment:**
- [ ] Monitoring shows no errors
- [ ] Performance within targets
- [ ] User feedback positive

---

This comprehensive AC guide ensures every component meets quality standards. Use it for development, QA, and smoke testing before every release! 🎯
