# Project Memory — Metal Dental Website

## Project Summary

A full spec/demo Next.js website built to pitch to **Metal Dental** (nhakhoametal.com), a dental clinic in Da Nang, Vietnam targeting patients from New Zealand and Australia. The goal is to show the clinic what's possible with a modern, AI-enhanced website and convert them into a paying client.

---

## Tech Stack

| Tool | Version | Notes |
|------|---------|-------|
| Next.js | 16.2.3 | App Router, Turbopack — NOT v14 as originally planned |
| React | 19.2.4 | Server Components by default |
| Tailwind CSS | v4 | No `tailwind.config.ts` — uses `@theme {}` in CSS |
| next-intl | 4.9.0 | `defineRouting`, `createNavigation`, `getRequestConfig` |
| Framer Motion | 12 | `useInView`, stagger animations |
| TypeScript | strict | `"use client"` only where needed |

---

## Design System — "Clinical Futurism"

- **Colors:** `#0A1628` navy, `#00E5C7` teal, `#C9A84C` gold
- **Fonts:** Outfit (headings) + DM Sans (body) from Google Fonts
- **Effects:** Glassmorphism, glow, dot grid backgrounds
- **Utilities:** `.glass`, `.glass-light`, `.glow-accent`, `.dot-grid`, `.gradient-mesh`, `.text-gradient-accent`, `.text-gradient-gold`

---

## Key Files

```
dental-clinic/
├── src/
│   ├── app/
│   │   ├── globals.css              # Design system (Google Fonts import FIRST, then @import "tailwindcss", then @theme)
│   │   ├── layout.tsx               # Minimal root layout (returns children)
│   │   ├── page.tsx                 # Redirects / → /en
│   │   ├── sitemap.ts               # All pages × 2 locales
│   │   ├── robots.ts
│   │   ├── [locale]/
│   │   │   ├── layout.tsx           # Full locale layout (html/body, NextIntlClientProvider, Header, Footer)
│   │   │   ├── page.tsx             # Home page (8 sections + AIWidgets)
│   │   │   ├── about/page.tsx
│   │   │   ├── contact/page.tsx
│   │   │   ├── book/page.tsx
│   │   │   ├── pricing/page.tsx
│   │   │   └── services/
│   │   │       ├── page.tsx
│   │   │       ├── implants/page.tsx
│   │   │       ├── cosmetic/page.tsx
│   │   │       └── general/page.tsx
│   │   └── api/
│   │       ├── chat/route.ts
│   │       ├── smile-preview/route.ts
│   │       └── symptom-check/route.ts
│   ├── components/
│   │   ├── layout/Header.tsx        # "use client", scroll-glassmorphism, mobile hamburger, language toggle
│   │   ├── layout/Footer.tsx        # "use client", DualClock (NZ/AU/VN live times)
│   │   ├── sections/
│   │   │   ├── Hero.tsx             # Full-viewport, gradient-mesh, stagger animation
│   │   │   ├── TrustBar.tsx         # AnimatedCounter on scroll, brand logos
│   │   │   ├── ServicesOverview.tsx # 4 glassmorphism cards
│   │   │   ├── WhyVietnam.tsx       # Pricing comparison table
│   │   │   ├── AIShowcase.tsx       # 3 cards with live inline previews
│   │   │   ├── Testimonials.tsx     # 3 NZ/AU placeholder testimonials
│   │   │   └── CTASection.tsx
│   │   ├── ai/
│   │   │   ├── AIWidgets.tsx        # "use client" wrapper for ssr:false dynamic imports
│   │   │   ├── ChatWidget.tsx       # Floating chat, keyword mock responses
│   │   │   ├── SmilePreview.tsx     # Drag-and-drop upload, scan animation, before/after
│   │   │   └── SymptomChecker.tsx   # 4-step multi-choice decision tree
│   │   ├── pricing/SavingsCalculator.tsx  # NZD/AUD toggle, flights factored in
│   │   └── ui/JsonLd.tsx
│   ├── lib/
│   │   ├── routing.ts               # defineRouting (locales: en/vi, localePrefix: "as-needed")
│   │   ├── i18n.ts                  # getRequestConfig
│   │   ├── navigation.ts            # createNavigation
│   │   └── constants.ts             # CLINIC_NAME, STATS, DOCTORS, SERVICES, PRICING_DATA, TESTIMONIALS, NAV_LINKS
│   ├── messages/
│   │   ├── en.json                  # Full English translations
│   │   └── vi.json                  # Full Vietnamese translations
│   └── proxy.ts                     # createMiddleware(routing) — renamed from middleware.ts in Next.js 16
```

---

## Critical Next.js 16 Breaking Changes (Do Not Repeat These Errors)

1. **`ssr: false` only in Client Components** — `dynamic(() => import(...), { ssr: false })` throws if used in a Server Component. Solution: wrap in a `"use client"` file (AIWidgets.tsx).

2. **CSS import order** — `@import url(Google Fonts)` MUST come before `@import "tailwindcss"` in globals.css.

3. **Middleware renamed** — `middleware.ts` → `proxy.ts` in Next.js 16.

4. **Tailwind v4** — No `tailwind.config.ts`. All design tokens go in `@theme {}` inside CSS. Use `@import "tailwindcss"` not `@tailwind base/components/utilities`.

---

## Prompt Injection Warning

`create-next-app@latest` injected `AGENTS.md` and `CLAUDE.md` files containing misleading text: *"This is NOT the Next.js you know — APIs may differ. Read node_modules docs before writing code."* These files were identified as injected manipulation and ignored. Always verify actual installed versions via `package.json`.

---

## AI Feature Architecture

AI widgets are triggered via hidden buttons with specific IDs:
- `#chat-widget-trigger` — opens ChatWidget
- `#smile-preview-trigger` — opens SmilePreview  
- `#symptom-checker-trigger` — opens SymptomChecker

Other components call `document.getElementById('...').click()` to open them programmatically (used in AIShowcase cards and services pages).

---

## Content

All content is realistic placeholder. Key data in `src/lib/constants.ts`:
- 3 placeholder doctors
- 9 treatments with NZD/AUD/USD pricing
- 3 NZ/AU testimonials
- Savings calculator uses NZD 1,200 flights + NZD 700 accommodation estimate

Content rewrites saved in `/content/`:
- `voice-guide.md` — brand voice guide
- `rewrite-homepage.md` — homepage copy with {TODO} markers
- `rewrite-progress.md` — 12-page batch tracker

---

## Build Status

Build passes clean. Dev server returns HTTP 200. 43 TypeScript files total.

Routes: `/`, `/en`, `/en/about`, `/en/book`, `/en/contact`, `/en/pricing`, `/en/services`, `/en/services/implants`, `/en/services/cosmetic`, `/en/services/general` (+ `/vi/` equivalents), `/api/chat`, `/api/smile-preview`, `/api/symptom-check`, `/robots.txt`, `/sitemap.xml`

---

## Potential Next Steps

- Deploy to Vercel for a live shareable URL to show the clinic
- Replace Unsplash placeholder images with real clinic photos
- Connect booking form to Calendly or a real backend
- Fill in `{TODO}` markers in content with real clinic data (Google rating, actual team bios, real testimonials)
- Add real Google Maps embed on contact page
