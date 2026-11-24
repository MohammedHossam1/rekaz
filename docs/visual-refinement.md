# Rekaz — Visual Refinement Audit & Checklist

Pixel-accurate visual audit and refinement comparing 1440px & 390px rendered screenshots against the original Figma frames (`8YBCxmYfbypDOOm65oEV5Z`).

## Shared System & Asset Fixes — Complete
- [x] **PageHero background orientation**: Mirrored `page-hero-light.png` & `page-hero-dark.png` in RTL (`rtl:scale-x-[-1]`) so the 3D golden arch frames the left side while clean ivory/obsidian sits behind the right-aligned golden logo.
- [x] **Sprite sheets cleanly sliced into individual assets**:
  - `service-megaphone.png` 4-icon strip sliced into `icon-dev.png`, `icon-marketing.png`, `icon-branding.png`, `icon-media.png` (`510×587` each).
  - Replaced misplaced portrait in `service-code.png` with `icon-dev.png`.
  - Sliced `subtitle-badge.png` into crisp `badge-icon.png` (`323×317`).
  - Sliced `footer-swirl-light.png` into `swirl-ring.png`, `swirl-process.png`, and `swirl-footer.png` (`977×1065` each).
- [x] **Signature 3-dot CTA badge (`DotsBadge`)**: Implemented Figma's exact `40×40` circular 3-dot chevron badge across all primary and outline pill CTAs.
- [x] **SectionBadge scale**: Updated to `32px` golden badge icon + `22px` display bold gold heading.
- [x] **Footer**: Refined social icon boxes to `60×74px` rounded rectangles and wired `swirl-footer.png`.

## Page-by-Page Visual Verification (1440px Desktop & 390px Mobile)
- [x] **Home (`/`)**: Mirrored 3D laptop hero (`662px`), `70px` headline, `24px` subtitle, dual pill CTAs with `DotsBadge`, `158px` `10+` (`dir="ltr"`), golden torus `swirl-ring.png`, 3-column white-tile service cards with dividers + bottom CTA bar, Figma `Award Block` process steps (`124px` number block + gold gradient), editorial `01–04` media cards, tall `aspect-[645/665]` work cards, `538px` pricing cards, and bordered `120px` `4.8` reviews section with double-ring avatar.
- [x] **About (`/about`)**: Mirrored hero, founder split with `DotsBadge` CTA, Vision/Mission cards, reordered Why Choose Us icons matching Figma (`solutions → gold-ringed creativity → partnership → quality`), FAQ accordion + golden wireframe globe.
- [x] **Services (`/services`)**: Mirrored hero, `48px` `rounded-[26px]` category filter bar, 6 individual golden 3D icons inside white rounded tiles with vertical dividers.
- [x] **Service Details (`/services/[slug]`)**: Mirrored hero, `DotsBadge` CTA, 6-item included grid, refined `ProcessSteps`, `FaqSection`, and `ProjectCtaBanner`.
- [x] **Our Work (`/work`) & Project Details (`/work/[slug]`)**: Mirrored hero, `48px` filter bar, `aspect-[645/665]` `rounded-[30px]` cards, interactive 5-thumbnail gallery, metadata + 10 tech stack icons.
- [x] **Packages (`/packages`)**: Mirrored hero, `538px` 3-column pricing cards (`bg-card border-primary` highlighted Free card, `bg-surface-subtle` Standard/Pro cards, full-width `52px` pill buttons).
- [x] **Contact (`/contact`), Booking (`/booking`, `/booking/studio`), Privacy (`/privacy`)**: Mirrored hero, seamless `-mb-px` folder-tab join on Booking, RHF + Zod translated validation.

## Verification Status
- `npx tsc --noEmit`: **0 errors**
- `npm run lint`: **0 errors, 0 warnings**
- `npm run build`: **Succeeded**
- 1440px Desktop & 390px Mobile visual screenshots verified with zero overflow and zero broken assets.
