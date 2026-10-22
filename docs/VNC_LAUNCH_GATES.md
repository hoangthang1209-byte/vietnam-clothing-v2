# VNC website relaunch — release gates

This feature branch introduces an English-first B2B website presentation without touching existing PHP production, DNS or Workspace records.

## Release gates
- [ ] Confirm ownership of the existing Vercel project and resolve Vercel 403 access.
- [ ] Confirm the correct VNC repository/app root and merge approach before release.
- [ ] Confirm live project email and replace legacy contact CTA if outdated.
- [ ] Inventory every legacy URL and migration redirect using qsv_seo_redirect, qsv_seo_rewrite, qsv_article, qsv_service, qsv_product.
- [ ] Audit media existence and rights before production; placeholder CSS art is intentional.
- [ ] Implement production inquiry endpoint with abuse controls, server-side validation and ATTD CRM authentication; the current CTA is mailto only.
- [ ] Complete EN/VN page structure, language URL mapping, and original article import.
- [ ] Confirm factual production claims and client-approved portfolio permissions.
- [ ] Verify forms, email routing, analytics, Search Console, canonical, robots and sitemap.
- [ ] QA at 393x852 and desktop, then switch robots.index to true at cutover only.
- [ ] Export fresh database/media backup from Satek before DNS cutover; retain rollback route.
- [ ] Preserve Workspace MX, SPF, DKIM and DMARC.

## Data sources
Legacy source.zip and database.sql were provided by the site owner. No secrets, database values or customer records should be committed into the repository.
