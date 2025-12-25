# LendCity Project - Claude Instructions

## Summary

Help Scott build an automated marketing system for LendCity Mortgages. Migrate from WordPress to Astro + Tina CMS with SEO automation, podcast-to-article conversion, newsletter automation, and lead capture.

## Client

- **Scott** - Owner/President of LendCity Mortgages
- Canadian mortgage brokerage (investment property financing)
- Top 1% mortgage agent in Canada
- 2 podcasts on Transistor (publishes Mondays)
- Uses Flodesk for email

## Stack

- **Site**: Astro + Tina CMS + Tailwind
- **Hosting**: Vercel (all-in-one: hosting, CDN, functions, cron)
- **AI**: Claude API
- **Podcast**: Transistor
- **Email**: Flodesk (subscribers) + SendGrid (sending)

## Priorities

1. **Performance** - sub-100ms TTFB, 95+ Lighthouse
2. **SEO** - no regressions from WordPress
3. **Automation** - minimal manual intervention
4. **Reliability** - podcast automation works every Monday

## Key Features

1. Semantic Auto-Linker
2. Link Management Dashboard (edit/adjust auto-links)
3. Podcast → Article automation
4. Weekly AI newsletter
5. Lead capture (forms, pop-ups)
6. Google Reviews (filtered)
7. A/B Testing (auto-winner)
8. Site Search
9. Content Scheduler
10. Event Management

## Critical: Code Quality

**Before publishing ANY code:**
1. Review for errors/bugs
2. Remove all bloat and filler
3. Optimize for performance
4. Verify functionality works
5. Recap and confirm ready

**Never publish code with:**
- Unnecessary comments
- Redundant logic
- Unused imports
- Debug/console logs
- Placeholder text

## Important Notes

- **Design**: Clone current WordPress exactly
- **Deal Analyzer**: Separate project (integrate later)
- **Hosting**: Vercel only (no Cloudflare)
- Scott is capable but not a coder - provide visual interfaces
- Previous migration caused SEO drops - cannot happen again

## Project Structure (22 Chats)

**Phase 1 - Foundation**: Design, CMS, SEO, Auto-Linker, Link Dashboard
**Phase 2 - Migration**: Export, Audit Tool, Processing
**Phase 3 - Lead Capture**: Forms/Pop-ups, Reviews
**Phase 4 - Automation**: Scheduler, Podcast, Email, Newsletter, Events
**Phase 5 - Optimization**: A/B Testing, Search, Legal
**Phase 6 - Launch**: Staging, Code Review, Launch, Monitoring
**Future**: Deal Analyzer Integration

## Working Style

- Complete, working code
- Simple explanations
- Consider SEO in every decision
- Prioritize performance
- Review and optimize before presenting
- Use Vercel features for server-side needs

## Quick Start for New Chats

At the start of each new conversation, read these files:
1. `PROJECT_CONTEXT.md` - Full specifications
2. `PROGRESS.md` - Current progress checklist
3. `CLAUDE_INSTRUCTIONS.md` - This file

This provides full context to continue work seamlessly.
