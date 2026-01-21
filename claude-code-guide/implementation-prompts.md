# Claude Code Implementation Prompts for Smart App 2.0

This document contains ready-to-use prompts for implementing specific features in Smart App 2.0. Copy and paste these into Claude Code to get started quickly with detailed context.

---

## 🎯 Prompt 1: Create a New Requirements Module

```
I'm working on the Smart App 2.0 Strategy Hub project. I need to create a new requirements module page following the exact pattern established in the existing modules.

PROJECT CONTEXT:
- Repository: C:\GitHub\smartapp
- This is a static HTML/CSS/JS knowledge base
- Existing example: C:\GitHub\smartapp\requirements\urla-gap.html
- Design system: C:\GitHub\smartapp\styles.css and components.css

REQUIREMENTS MODULE PATTERN:
1. Navigation bar at top (navbar)
2. Breadcrumbs: Home › Requirements › [Module Name]
3. Page header with:
   - Module label (e.g., "Module 01")
   - Large title
   - Description
   - Meta items with icons
4. Back button to /requirements/
5. Content sections with:
   - Overview cards
   - Data tables with status badges
   - Action items lists
6. Footer with navigation links

NEW MODULE TO CREATE:
- Module number: [NUMBER]
- Title: [TITLE]
- Description: [DESCRIPTION]
- Content: [DESCRIBE WHAT TABLES/SECTIONS NEEDED]

INSTRUCTIONS:
1. Read C:\GitHub\smartapp\requirements\urla-gap.html to understand the complete pattern
2. Create C:\GitHub\smartapp\requirements\[filename].html following the EXACT same structure
3. Use the same CSS classes: navbar, breadcrumbs, page-header, data-table, status-badge, etc.
4. Match the color scheme and spacing exactly
5. Ensure all navigation links work correctly
6. Test the breadcrumb trail

EXAMPLE DATA STRUCTURE:
[Provide table structure or content outline here]

Please create this module with complete, production-ready code.
```

**When to use**: Creating any new requirements module (Modules 06-14 that are still partial/pending)

---

## 🎯 Prompt 2: Implement Task Workflow System (Highest Priority Feature)

```
I'm implementing the Task Workflow System for Smart App 2.0 based on Paul Akinmade's critical feedback from the Bolt prototype demo.

PROJECT CONTEXT:
- Repository: C:\GitHub\smartapp
- Read C:\GitHub\smartapp\documents\bolt-feedback.html for Paul's complete vision
- This is the HIGHEST PRIORITY feature from stakeholder feedback

PAUL'S VISION:
After borrower submits initial application, instead of showing a static task dashboard:
1. Show "Let's get ahead of some tasks now"
2. Present tasks ONE AT A TIME in priority order: "Task 1 of 7"
3. Each task has "Complete" or "Skip for now" options
4. Track completion progress
5. On completion: "Thank you for completing 5 of 7 tasks. 2 remaining tasks available in your dashboard."

PRIORITY TASK SEQUENCE:
1. E-consent setup (Solex integration)
2. Borrower authorization signing
3. Pre-disclosure package
4. Truv verification (allow multiple attempts)
5. Asset verification (Plaid)
6. Additional documentation upload
7. Declarations completion

DESIGN REQUIREMENTS:
- Gamified feel (progress bar, encouraging messages)
- "Skip for now" maintains momentum (doesn't feel like failure)
- Mobile-first design
- Launch external tools (Solex, Truv, Plaid) and return seamlessly
- Abandoned task recovery in subsequent sessions

IMPLEMENTATION NEEDS:
1. Create task workflow component/module
2. Design one-task-at-a-time interface
3. Build progress tracking system
4. Design "skip" pattern
5. Create completion summary screen

Please read the Bolt Feedback document first, then create a detailed implementation plan with HTML/CSS prototypes for this task workflow system. Focus on the UX flow and visual design that matches our existing component library.
```

**When to use**: Implementing the post-submission task workflow (P0 priority)

---

## 🎯 Prompt 3: Add Prove Identity Verification Integration

```
I need to implement Prove identity verification integration for Smart App 2.0.

PROJECT CONTEXT:
- Repository: C:\GitHub\smartapp
- Prove is our identity verification vendor
- Read C:\GitHub\smartapp\documents\bolt-feedback.html (search for "Prove")
- Existing prototype: https://streamlined-digital-a1nj.bolt.host/

PROVE INTEGRATION OVERVIEW:
- Vendor handles identity verification via "magic link" sent to borrower's phone
- Has agreements with telecom companies for seamless verification
- Pre-fills: name, email, phone number, SSN
- <10% no-hit rate (very reliable)
- Used by DocuSign, Zelle, Experian

USER FLOW:
1. Borrower enters email, phone, date of birth
2. System sends magic link via text
3. Borrower clicks link (telecom auto-verifies)
4. System receives verified data from Prove API
5. Pre-fill borrower information fields
6. Show success message with what was auto-populated
7. Allow editing of pre-filled data

FALLBACK FLOW:
If Prove fails (<10% cases):
- Show friendly error message
- Provide manual entry form for same fields
- No degraded experience, just manual input

TECHNICAL REQUIREMENTS:
1. Form validation for email/phone/DOB
2. API integration with Prove (document the endpoint structure)
3. Success/error state handling
4. Data pre-fill logic
5. Mobile-first design (many users on mobile)

DESIGN REQUIREMENTS:
- Match existing Smart App 2.0 component library
- Clear messaging about why we're using Prove (security, convenience)
- Loading states during verification
- Success confirmation showing what was auto-filled

Please create:
1. HTML form for initial data entry
2. Success screen design with pre-filled data review
3. Fallback manual entry form
4. Integration specification document

Reference the Bolt prototype for UX inspiration but use our design system.
```

**When to use**: Implementing Prove integration (P0 priority)

---

## 🎯 Prompt 4: Create FlueID Title Data Integration for Refinance

```
I need to implement FlueID (title data) integration for Smart App 2.0 refinance flows.

PROJECT CONTEXT:
- Repository: C:\GitHub\smartapp
- Read C:\GitHub\smartapp\documents\flueid-findings.html for COMPLETE vendor analysis
- Read C:\GitHub\smartapp\documents\bolt-feedback.html (search for "title data")

FLUEID CAPABILITIES (from research):
- Property address, type, characteristics
- Current owner names (critical for co-borrower detection!)
- Mortgage info: lender, balance, rate, payment
- Property taxes and HOA fees
- Liens, judgments, foreclosure status
- Cost: $5k/month flat fee, unlimited runs

KEY USE CASES:
1. **Refinance Co-Borrower Detection**: "How did you know John and Bobby were on title with me?" (wow moment!)
2. **REO Section**: Validate investment properties against title records
3. **URLA Pre-fill**: 22-28 fields with address only, 40 fields with address + SSN
4. **Risk Flagging**: Bankruptcy, foreclosure, judgment indicators

REFINANCE FLOW INTEGRATION:
1. Borrower enters subject property address
2. Call FlueID API with address
3. Retrieve title data (owner names, liens, etc.)
4. Detect co-borrowers on title
5. Pre-populate: "We found John Smith and Bobby Jones on title. Will they be on the new loan?"
6. Auto-fill property value, taxes, HOA, current mortgage details
7. Flag any issues (multiple liens, bankruptcy, etc.)

DATA QUALITY HANDLING:
- HIGH CONFIDENCE: Use immediately (address, owner names, loan type)
- MEDIUM CONFIDENCE: Show for verification (mortgage balance ±$5-10K, property value)
- REQUIRES VALIDATION: Flag for review (name mismatches, recent transactions)

TECHNICAL REQUIREMENTS:
1. API integration specification
2. Data mapping to URLA fields
3. Confidence score handling
4. Error states and fallbacks
5. Manual override capability

Please create:
1. FlueID integration architecture document
2. Refinance flow prototype with title data pre-fill
3. Co-borrower detection UI mockup
4. Data validation and confidence indicator design

Reference the FlueID Findings document for all technical details.
```

**When to use**: Implementing title data integration (P1 priority)

---

## 🎯 Prompt 5: Build Mobile AI Chat Experience

```
I need to design and implement the mobile AI chat experience for Smart App 2.0.

PROJECT CONTEXT:
- Repository: C:\GitHub\smartapp
- Read C:\GitHub\smartapp\documents\bolt-feedback.html (search for "mobile AI")
- Current desktop prototype has popover AI chat

PAUL'S CRITICAL FEEDBACK:
"Worried about how that's gonna look on mobile. Popover screens work great on desktop but problematic on mobile."

RECOMMENDED APPROACH:
- Fixed bar at bottom of screen
- "Reason why you're here + ask a question" functionality
- NO popover or competing scroll spaces
- Always accessible but non-intrusive

AI ASSISTANT FEATURES:
1. **Proactive Engagement**: Triggers after X seconds on screen
2. **Common Questions**: Pre-populated based on current page context
3. **Smart Tooltips Replacement**: Click question → AI answers in chat
4. **LO Summary**: Track questions asked, deliver to LO for follow-up

MOBILE DESIGN REQUIREMENTS:
- Fixed position bottom bar (doesn't scroll away)
- Tap to expand full chat interface
- Collapsed state: Shows icon + "Ask a question"
- Expanded state: Full-height chat (80% screen)
- Dismiss button to collapse
- Maintains context across pages

DESKTOP EXPERIENCE:
- Floating chat bubble (bottom right)
- Popover dialog on click
- Doesn't block content

IMPLEMENTATION NEEDS:
1. Mobile-first CSS for fixed bottom bar
2. Expand/collapse animation
3. Chat interface design
4. Context awareness (different questions per page)
5. Responsive design (mobile vs desktop behavior)

Please create:
1. Mobile-first HTML/CSS for AI chat component
2. Desktop variant with popover
3. Animation specifications
4. Integration points for AI backend
5. Example context-aware questions for different pages

Match our existing component library and design system.
```

**When to use**: Implementing mobile AI chat (P1 priority)

---

## 🎯 Prompt 6: Create LO Configuration System UI

```
I need to build the Loan Officer Configuration System interface for Smart App 2.0.

PROJECT CONTEXT:
- Repository: C:\GitHub\smartapp
- Read C:\GitHub\smartapp\requirements\lo-config.html for specifications
- This is Module 09 in requirements framework

LO CONFIGURATION CONCEPT:
Loan Officers can customize the borrower experience with toggles/settings:
- Enable/disable specific integrations (Prove, Truv, Plaid)
- Choose AI assistance level (Full / Moderate / Minimal)
- Set form behavior (Auto-save on/off, Validation strictness)
- Customize co-branding (Logo, colors, messaging)
- Configure task workflow order
- Set communication preferences

TOGGLE CATEGORIES:
1. **Identity Verification**: Prove on/off, Manual entry fallback
2. **Financial Integrations**: Truv (VOIE), Plaid (VOA), Credit pull timing
3. **AI Features**: AI chat, Proactive tips, Smart tooltips
4. **Form Behavior**: Auto-save, Validation level, Progress indicators
5. **Co-Branding**: Logo upload, Color scheme, Partner info
6. **Task Workflow**: Task order, Skip allowed, Auto-reminders
7. **Notifications**: Email, SMS, In-app alerts

UI REQUIREMENTS:
- Clean, organized interface (categorized sections)
- Toggle switches for on/off settings
- Dropdowns for multi-option choices
- Preview pane showing how changes affect borrower experience
- Save/Cancel buttons
- "Reset to defaults" option
- Success confirmation messages

DESIGN PATTERN:
- Left sidebar: Category navigation
- Main area: Settings for selected category
- Right panel: Live preview (optional)
- Sticky save button at bottom

Please create:
1. LO Configuration dashboard HTML/CSS
2. Toggle component styling
3. Category navigation system
4. Settings organization structure
5. Preview pane mockup

Use our component library and match existing page patterns.
```

**When to use**: Building LO configuration interface (P0 priority)

---

## 🎯 Prompt 7: Implement "AI Future vs Stone Age" Toggle System

```
I need to implement Paul's "AI Future vs Stone Age" philosophy as a user-facing toggle system.

PROJECT CONTEXT:
- Repository: C:\GitHub\smartapp
- Read C:\GitHub\smartapp\documents\bolt-feedback.html (search for "AI Future")
- This is Paul's strategic framework for handling different user preferences

PAUL'S VISION:
"You have to create a pathway that allows people to be cave people and people to embrace AI."

TWO MODES:

**STONE AGE MODE:**
- Manual data entry throughout
- Traditional mortgage application process
- No automatic integrations
- Step-by-step guided form
- Familiar, predictable experience

**AI FUTURE MODE:**
- Automatic soft credit pull after submission
- FlueID title data matching
- Pre-run AUS with sample data
- Candor needs list auto-generation
- AI document scanning
- Truv/Plaid auto-attempted
- Complete enrichment package

THE CHOICE:
- Opt-in toggle available on application start
- Can be set separately for Purchase vs Refinance
- Educational walkthrough explaining benefits
- Show what the output looks like in each mode
- Users can switch modes anytime
- LOs can set default for their borrowers

IMPLEMENTATION NEEDS:
1. Toggle UI on application start screen
2. Educational modal explaining differences
3. Benefits comparison (time saved, accuracy, LO summary)
4. Cost transparency (for LOs)
5. Mode indicator throughout application
6. Settings page to change mode

EDUCATIONAL CONTENT:
Show borrowers:
- "AI Future: 15 min application, 40 fields auto-filled, instant pre-approval"
- "Stone Age: 45 min application, manual entry, standard process"

Show LOs:
- "AI Future: $35 vendor cost, $1M/month savings, complete enrichment"
- "Stone Age: $0 vendor cost, manual work, standard process"

Please create:
1. Mode selection screen with educational content
2. Toggle component for Purchase/Refinance
3. Benefits comparison table
4. Mode indicator badge for UI
5. Settings panel for mode switching

Match our design system and create compelling educational UX.
```

**When to use**: Implementing the two-path strategy (P1 priority)

---

## 🎯 Prompt 8: Create Research Documentation Page

```
I need to create a new research documentation page for Smart App 2.0 Strategy Hub.

PROJECT CONTEXT:
- Repository: C:\GitHub\smartapp
- Existing examples: C:\GitHub\smartapp\research\lo-interviews.html
- This is research synthesis content, not requirements specs

RESEARCH PAGE PATTERN:
1. Navigation bar (sticky)
2. Breadcrumbs: Home › Research › [Page Name]
3. Page header with research metadata:
   - Research type label
   - Title
   - Description
   - Meta items: participants, duration, date, etc.
4. Back button to /research/
5. Content sections:
   - Overview/executive summary
   - Key findings (cards or tables)
   - Detailed insights
   - Quotes from participants
   - Recommendations
6. Footer with navigation

NEW RESEARCH PAGE:
- Title: [TITLE]
- Research type: [LO Interviews / Stakeholder Sessions / Concept Testing / etc.]
- Participants: [NUMBER and NAMES]
- Date: [DATE]
- Content: [DESCRIBE FINDINGS TO DOCUMENT]

CONTENT STRUCTURE:
- Use cards for key insights
- Use quote blocks for participant feedback
- Use tables for comparative data
- Use color-coded badges for priority/importance
- Include actionable recommendations

STYLING REQUIREMENTS:
- Match existing research pages exactly
- Use research-specific color accents
- Include participant metadata
- Show research methodology if applicable
- Link to related documents/requirements

Please create:
1. Complete HTML page following research pattern
2. Well-organized content sections
3. Proper navigation integration
4. Footer links to related pages

Reference lo-interviews.html for exact structure and styling.
```

**When to use**: Adding new research synthesis pages

---

## 🎯 Prompt 9: Build Automated Credit Pull Strategy Flow

```
I need to implement the automated credit pull strategy flow based on Paul's economic analysis.

PROJECT CONTEXT:
- Repository: C:\GitHub\smartapp
- Read C:\GitHub\smartapp\documents\bolt-feedback.html (search for "credit pull")
- Read C:\GitHub\smartapp\documents\features-list.html for feature specs

PAUL'S ECONOMICS:
- Soft pull: $30 (can run AUS, saves money)
- Hard pull tri-merge: $60 (only when necessary)
- Truv: $7 per run (cheap, 22% pull-through rate)
- Work Number: $65 per employer (expensive for job hoppers)

CURRENT PROBLEM:
LOs often run: Soft pull ($30) → Try merge → Hard pull ($60) in 3 seconds
Result: Wasted $90 when hard pull alone ($60) would suffice
Or: Wasted $60 hard pull when soft would work

PAUL'S STRATEGY:
1. **Automatically** run soft credit after application submission
2. Use soft pull to run preliminary AUS
3. Generate needs list from AUS results
4. Only run hard pull when absolutely necessary
5. For refinance: Can run 6 RESPA questions with title data

AUTOMATION BENEFITS:
- Removes cognitive load from LOs
- Eliminates bad clicking habits
- Saves $1M/month (Paul's proven data)
- Faster borrower experience

IMPLEMENTATION FLOW:
```
Application Submit →
  Auto Soft Pull ($30) →
    Run AUS →
      Generate Needs List →
        FlueID Title Match →
          Populate Tasks →
            LO Gets Complete Package
```

HARD PULL TRIGGER:
Only when:
- Final qualification needed
- Soft pull score too old (>30 days)
- LO manually requests
- Required for specific loan product

UI/UX REQUIREMENTS:
1. Educational messaging: "Running soft credit check (doesn't affect score)"
2. Progress indicator during auto-pull
3. Success message: "Pre-approval complete! Here's what we found..."
4. LO dashboard showing what was auto-completed
5. Manual hard pull option for LOs
6. Cost tracking dashboard for LOs

Please create:
1. Automated credit pull flow diagram
2. UI screens for each step
3. Educational messaging strategy
4. LO dashboard mockup showing auto-completion
5. Integration specification with credit bureaus

Reference Paul's feedback for complete context.
```

**When to use**: Implementing automated credit strategy (P1 priority)

---

## 🎯 Prompt 10: Create Comprehensive Feature Ticket

```
I need to create a detailed implementation ticket for a Smart App 2.0 feature.

FEATURE: [FEATURE NAME]
PRIORITY: [P0 / P1 / P2]
MODULE: [Requirements / Research / Integration / UX]

PROJECT CONTEXT:
- Repository: C:\GitHub\smartapp
- Read relevant documentation:
  - C:\GitHub\smartapp\documents\features-list.html (complete feature roadmap)
  - C:\GitHub\smartapp\documents\bolt-feedback.html (stakeholder requirements)
  - C:\GitHub\smartapp\requirements\[related-module].html (if applicable)

TICKET FORMAT:

**Title**: [Feature Name] - [Brief Description]

**Description**:
[What is this feature and why do we need it?]

**User Story**:
As a [borrower/LO/admin], I want to [goal] so that [benefit].

**Acceptance Criteria**:
- [ ] [Specific, testable criterion 1]
- [ ] [Specific, testable criterion 2]
- [ ] [Specific, testable criterion 3]

**Technical Requirements**:
1. [Technology/integration needed]
2. [API endpoints or data sources]
3. [Component dependencies]

**Design Requirements**:
1. [UI components needed]
2. [Responsive behavior]
3. [Accessibility considerations]

**Dependencies**:
- [Feature X must be completed first]
- [Integration with vendor Y]

**Test Cases**:
1. [Happy path test]
2. [Error handling test]
3. [Edge case test]

**Documentation Needed**:
- [ ] Update requirements module
- [ ] Add to features list
- [ ] Create user guide
- [ ] Document API integration

**Estimated Effort**: [Hours/Days]
**Sprint**: [Sprint number or date]

Please create a complete, detailed ticket for [FEATURE NAME] including all sections above. Reference existing documentation for context and ensure alignment with project architecture.
```

**When to use**: Creating detailed tickets for any new feature

---

## 💡 How to Use These Prompts

1. **Copy the entire prompt** (including context sections)
2. **Fill in the bracketed placeholders** with your specific needs
3. **Paste into Claude Code** and let it read the referenced files
4. **Review the output** and iterate as needed

## 🎯 Prompt Optimization Tips

**For Claude Code:**
- Always include file paths for context
- Reference specific line numbers when possible
- Ask Claude to read existing implementations first
- Request detailed, production-ready code
- Specify "match existing patterns exactly"

**For Better Results:**
- Provide example data structures
- Link to related documentation
- Specify edge cases to handle
- Request both desktop and mobile designs
- Ask for accessibility considerations

---

**Next**: See `patterns.md` for reusable code patterns and `architecture.md` for system design overview.
