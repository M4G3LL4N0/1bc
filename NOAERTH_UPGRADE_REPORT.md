# Noaerth Upgrade Report — 1bc

## Project
**1bc** — The Execution Board (founder governance and performance environment)

## Live URL checked
- https://1bc.noaerth.com
- **Live status before upgrade:** HTTP 200 (reachable)

## Startup summary
Elite founder execution board with weighted scoring, rotation logic, and governance framing. Public site includes marketing narrative, governance map, pricing, and an interactive dashboard demo powered by local TypeScript rules.

## Main weakness found
- Broken local `node_modules` (Next binary missing) blocked `pnpm build` until clean reinstall.
- Primary navigation was hidden on mobile with no alternative, hurting mobile usability.

## Improvements made
- Clean reinstall path documented implicitly (rm `node_modules` + `pnpm install`).
- **Mobile navigation:** sticky header now includes a collapsible menu (`md:hidden`) with all routes and full-width “Enter Board” CTA; body scroll lock while menu is open.
- **Button component:** optional `onClick` for link and button variants (menu close on navigate).

## Routes added or improved
- No new routes; `/dashboard`, `/governance`, etc. unchanged.

## MVP interactions added
- Existing `BoardDashboard` demo unchanged; improvement is discoverability on small screens via mobile nav.

## pnpm build result
- **PASS** (after dependency reinstall and code changes)

## Vercel production deployment result
- **SUCCESS** (`vercel --prod --yes`)
- Deployment URL: https://1bc-rjth82r37-noaerth.vercel.app
- Aliased: https://1bc.vercel.app

## Production URL
- Vercel production deployment above; custom domain https://1bc.noaerth.com expected to track production per Noaerth DNS (verify in Vercel project domains).

## Remaining issues
- pnpm may ignore `sharp` build scripts unless `pnpm.onlyBuiltDependencies` is configured (warning only; build succeeded).
- Hamburger icon uses minimal three-bar markup; could be refined visually.

## Next suggested improvements
- Optional Framer Motion for menu transitions.
- E2E smoke test for mobile nav on real devices.
