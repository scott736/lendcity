# LendCity Automated Marketing System - Project Context

## Project Overview

Building a complete automated marketing system for LendCity Mortgages, migrating from WordPress to a high-performance static site architecture with content management, SEO automation, podcast-to-article conversion, newsletter automation, lead capture, and event management.

**Design Decision:** Clone the current LendCity WordPress design exactly. Same look, same feel - just faster with all automation built in.

**Note:** Deal Analyzer Tool is a separate project. Will integrate later with client-side interface.

---

## Client Background

- **Company**: LendCity Mortgages
- **Owner**: Scott (Owner and President)
- **Business**: Canadian mortgage brokerage - investment property financing (Canada, U.S., Mexico)
- **Recognition**: Top 1% mortgage agent in Canada
- **Podcasts**: Wisdom Lifestyle Money Show + Close More Deals for Realtors
- **Podcast Schedule**: 2 episodes every Monday via Transistor
- **Email Marketing**: Flodesk

---

## Technical Stack

| Component | Technology |
|-----------|------------|
| Framework | Astro |
| CMS | Tina CMS |
| Styling | Tailwind CSS |
| Hosting & CDN | Vercel (edge network, serverless, cron) |
| AI Processing | Claude API |
| Podcast | Transistor (with transcription) |
| Email Subscribers | Flodesk |
| Email Sending | SendGrid |
| Reviews | Google Business Profile |
| Analytics | Google Search Console |

---

## Core Requirements

### Performance
- Sub-100ms TTFB
- 95-100 Lighthouse scores
- Zero JS by default
- Pure static HTML

### SEO
- Auto-generated meta titles/descriptions (Claude)
- Complete schema markup (all page types)
- Auto TOC and breadcrumbs
- Semantic auto-linking
- OG/Twitter cards
- XML sitemap + RSS feed

### Code Quality
**Before publishing ANY code, Claude must:**
1. Review for errors/bugs
2. Remove unnecessary code/bloat
3. Optimize for performance
4. Verify functionality
5. Confirm best practices

---

## Features

### 1. Semantic Auto-Linker
- Auto-inserts contextual internal links
- Two-way linking (new ↔ existing)
- Configurable density

### 2. Link Management Dashboard
- View/edit all auto-generated links
- Change destinations or anchor text
- Remove unwanted links
- Add manual links
- See inbound links
- Overrides persist through rebuilds

### 3. Podcast Automation
- Transistor webhook → Vercel function
- Pulls transcript
- Claude converts to article (headings, quotes, FAQ, schema)
- Auto-linker processes
- Publishes (auto or with approval)
- Notification sent

### 4. Newsletter System
- Weekly Sunday send
- AI summary of week's content
- Custom message section (CMS editable)
- Holiday messages (schedulable)
- Podcast highlights
- Event promotion
- Vercel cron Saturday → SendGrid Sunday

### 5. Lead Capture
- Contact forms
- Pop-ups (exit intent, timed, scroll)
- Inline forms
- Lead magnets
- CMS controls for pop-up settings
- Flodesk + SendGrid sync
- CASL compliance

### 6. Google Reviews
- Pulls from Google Business Profile
- Filter by star rating (4+)
- Auto-updates (Vercel cron)
- Manual hide option
- Display: Carousel/Grid/List
- Schema markup

### 7. A/B Testing
- Test: headlines, CTAs, images, forms, pop-ups
- Edge middleware distribution
- Conversion tracking
- Auto-winner selection
- Results notification

### 8. Site Search
- Pagefind (client-side)
- Instant results

### 9. Event Management
- Event pages with schema
- Auto-included in newsletter
- Registration integration
- Past events archive

### 10. Content Scheduler
- Publish date/time in CMS
- Vercel cron builds
- Draft/Scheduled/Published workflow
- Calendar view

---

## Migration

- Export all WordPress content
- Convert to MDX
- Preserve URLs exactly
- Migrate + optimize images
- Redirect map for changes
- SEO audit tool validates no regressions

---

## Credentials Needed

| Service | Status |
|---------|--------|
| WordPress | Pending |
| Transistor API | Pending |
| Flodesk API | Pending |
| SendGrid | To create |
| Google Business Profile | Pending |
| Domain DNS | Pending |
| GitHub | To create |
| Vercel | To create |

---

## Project Chats

### Phase 1: Foundation
1. Site Architecture & Design
2. Tina CMS Setup
3. SEO Engine
4. Semantic Auto-Linker
5. Link Management Dashboard

### Phase 2: Migration
6. WordPress Export & Migration
7. SEO Audit & Comparison Tool
8. Content Processing

### Phase 3: Lead Capture
9. Forms, Pop-ups & Lead Capture
10. Google Reviews Integration

### Phase 4: Automation
11. Content Scheduler
12. Podcast Automation
13. Email System (Flodesk/SendGrid Sync)
14. Newsletter Automation
15. Event Management

### Phase 5: Optimization
16. A/B Testing System
17. Site Search
18. Legal Pages & Compliance

### Phase 6: Launch
19. Staging Deployment & Testing
20. Code Review & Optimization
21. Production Launch
22. Post-Launch Monitoring

### Future
23. Deal Analyzer Integration

---

## Notes for Claude

### About Scott
- Technically capable, not a coder
- Needs visual interfaces
- Values automation and efficiency

### Priorities
1. Performance - "peak peak performance"
2. SEO - no regressions
3. Automation - runs itself
4. Reliability - podcasts work every Monday

### Code Standards
Before publishing code:
- Review for errors
- Remove bloat
- Optimize performance
- Verify functionality
- Recap and confirm ready

### Key Decisions
- Clone current WordPress design
- Vercel only (no Cloudflare)
- Link dashboard for manual adjustments
- Deal Analyzer separate
