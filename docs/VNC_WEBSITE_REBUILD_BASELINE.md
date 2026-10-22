# VNC Website Rebuild — Technical and Product Baseline

Status: implementation branch, not approved for production.
Reference: https://beta.vietnamclothing.vn/en (visual/content reference, not a verified statement of capabilities).

## Positioning
VNC — Merchandise, Apparel & Sourcing.
Separate B2B international brand with independently managed site and content, optionally syncing qualified leads to ATTD CRM through an authenticated, idempotent integration.

## Business pillars
1. Entertainment & Official Merchandise
2. Corporate Merchandise & Uniforms
3. OEM Apparel Manufacturing
4. Global Sourcing & Production Management

## Proposed technology baseline
- Next.js 16+ App Router, TypeScript, React 19+, Tailwind 4; pin mutually compatible stable package versions.
- PostgreSQL on Neon + Prisma 7 for the new CMS and web content. Existing code currently uses Supabase: migration must be staged; do not remove Supabase until all dependencies and data are inventoried.
- Vercel previews, isolated production project, GitHub PR/CI.
- English at /en, Vietnamese at /vi; preserve legacy /vn routes through measured 301 mappings.
- SEO: server metadata, canonical, Open Graph, hreflang, sitemap, robots, redirects.
- Contact forms: server-side validation, rate limiting, spam protection, secure storage, clear consent; explicit retries and duplicate prevention when sending to ATTD CRM.
- Access controls: authenticated editor/admin roles, no public write access to CMS.

## Preserve before migration
- Existing website and Google Workspace MX/SPF/DKIM/DMARC records.
- Legacy sitemap, page slugs, article metadata, categories, products, media references, redirects, and request/lead history.
- Audit mojibake/character encoding before import.
- Verify source.zip and database.sql represent the latest production exports, and media files exist.
- No DNS cutover or hosting cancellation before verified backup, smoke test and rollback plan.

## Demo-content verification blockers
Do not publish unverified numerical claims (500K/month, 500+ clients, 30+ export countries), client logos, factory ownership, made-up-looking testimonials, or stock photo representations as actual VNC facilities. Replace with approved facts, authenticated projects and user-provided production photos.

## Website information architecture
/en, /vi
/en/solutions/entertainment-merchandise
/en/solutions/corporate-merchandise
/en/solutions/oem-apparel
/en/solutions/global-sourcing
/en/products, /en/products/[slug]
/en/projects, /en/projects/[slug]
/en/insights, /en/insights/[slug]
/en/about, /en/contact, /en/request-quote

## Initial implementation phases
P0: inventory existing VNC repo, Vercel projects and production site; establish SEO/media/lead baseline.
P1: shared design tokens + app shell, home page, responsive navigation, four solution pages.
P2: catalog, case studies, request quote workflow, lead CRM integration, CMS and roles.
P3: data migration, redirect validation, image verification, EN/VI SEO and responsive end-to-end tests.
P4: protected preview QA, production release, email/DNS safety checks, rollback and Satek exit.

## Acceptance criteria
- No unapproved marketing claims.
- All contact/quote submissions validated and persisted with explicit error states.
- No accidental exposure of secrets/customer records.
- Automated build, lint, typecheck and mobile 393x852 QA for header/hero/navigation/forms/sticky CTA.
- Old ranking URLs mapped to appropriate pages, no destructive DNS changes.
