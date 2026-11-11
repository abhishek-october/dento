# Dento OS — Intelligent Dental Practice Management Platform

A modern, conversion-focused SaaS landing page for **Dento OS**, an intelligent operating system designed for independent dentists, growing multi-chair dental clinics, dental specialists, and multi-location dental groups.

## Live Development Server

```bash
cd c:\Dento\dento
npm install
npm run dev
```

Open **[http://localhost:5173/](http://localhost:5173/)** in your browser.

## Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS (`#123D40` Deep Teal, `#247C70` Medical Green, `#DFF2EA` Soft Mint, `#F8F8F3` Warm Off-White, `#F0F2EF` Light Grey, `#222B2B` Charcoal, `#C8E6A0` Soft Lime)
- **Typography**: Plus Jakarta Sans / Manrope (Headings) & Inter (Body)
- **Animations**: Framer Motion (with `prefers-reduced-motion` accessibility support)
- **Icons**: Lucide React

## Project Structure

```text
src/
  assets/
    dentalData.js          # Structured clinical, scheduling, radiographic & FAQ datasets
  components/
    Navbar.jsx             # Sticky glassmorphic navigation + mobile drawer
    Footer.jsx             # Comprehensive footer + legal/resource info drawer
    Button.jsx             # Reusable button variants
    FeatureCard.jsx        # Feature cards with embedded interactive clinical UI previews
    DashboardPreview.jsx   # Hero SaaS dashboard mockup + floating AI X-ray card
    TestimonialCard.jsx    # Sample workflow feedback cards
    PricingCard.jsx        # Tiered pricing cards (Starter, Professional, Enterprise)
    XrayAnalysisPreview.jsx# Interactive AI Dental X-ray simulator (Bitewing, OPG, Periapical)
    BookDemoModal.jsx      # Validated demo booking & clinic portal login modal
  sections/
    Hero.jsx               # Hero section with value proposition & live dashboard preview
    TrustBar.jsx           # Social proof bar with inline-customizable placeholder metrics
    ProblemSolution.jsx    # Visual transition from 4 disconnected silos to 1 unified workspace
    Features.jsx           # Filterable 6-module core grid + e-Rx, SOAP notes & analytics
    AIAnalysis.jsx         # Dark-teal AI Dental X-ray Diagnostics showcase
    Workflow.jsx           # 4-step implementation workflow + 3 practice audience segments
    DashboardShowcase.jsx  # 6-tab full-width interactive application showcase
    Testimonials.jsx       # Clearly labeled sample workflow testimonials
    Pricing.jsx            # 3-tier subscription packaging & migration support
    FAQ.jsx                # 10-question animated accordion
    CTA.jsx                # High-converting closing call-to-action
  pages/
    Home.jsx               # Main landing page layout & modal state controller
  styles/
    index.css              # Tailwind directives & custom clinical grid utilities
  App.jsx
  main.jsx
```
