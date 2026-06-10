---
name: Obsidian & Gilded
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#d6c59d'
  on-secondary: '#392f13'
  secondary-container: '#514627'
  on-secondary-container: '#c4b48d'
  tertiary: '#e7c9a6'
  on-tertiary: '#3f2d15'
  tertiary-container: '#caae8c'
  on-tertiary-container: '#554127'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#f3e1b7'
  secondary-fixed-dim: '#d6c59d'
  on-secondary-fixed: '#231b02'
  on-secondary-fixed-variant: '#514627'
  tertiary-fixed: '#fcdeba'
  tertiary-fixed-dim: '#dfc29f'
  on-tertiary-fixed: '#281903'
  on-tertiary-fixed-variant: '#574329'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  obsidian-deep: '#0A0A0A'
  charcoal-surface: '#1F1F1F'
  champagne-highlight: '#F7E7CE'
  burnished-gold: '#A67C00'
  sand-muted: '#C2B280'
typography:
  display-lg:
    fontFamily: ebGaramond
    fontSize: 72px
    fontWeight: '400'
    lineHeight: 80px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: ebGaramond
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: ebGaramond
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
  headline-md:
    fontFamily: ebGaramond
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  body-lg:
    fontFamily: hankenGrotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: hankenGrotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: hankenGrotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.1em
  caption:
    fontFamily: hankenGrotesk
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 24px
---

## Brand & Style

The design system is engineered for the ultra-luxury travel sector, targeting high-net-worth individuals who seek exclusivity, discretion, and curated experiences. The brand personality is authoritative yet welcoming, evocative of a private members' club or a high-end concierge service.

The design style is a blend of **Minimalism** and **Glassmorphism**, utilized to create a sense of depth and mystery. We utilize heavy whitespace (interpreted here as "dark space"), high-quality editorial typography, and subtle translucent layers to simulate the look of premium materials like polished stone and brushed metal. The aesthetic is "quiet luxury"—where the quality is felt through the restraint of the layout and the precision of the accents rather than through excessive ornamentation.

## Colors

The palette transitions from the original's bright whites and reds to a sophisticated **dark-mode-first** ecosystem. 

- **Primary (Metallic Gold):** Used for critical calls to action and brand iconography. It should be applied with restraint to maintain its "precious" feel.
- **Secondary (Champagne/Sand):** Used for subtle accents, secondary buttons, and decorative lines.
- **Neutral (Obsidian/Charcoal):** The foundation of the system. We use `#0A0A0A` for primary backgrounds to create infinite depth, and `#1F1F1F` for cards and surface containers to provide subtle contrast.
- **Tertiary (Burnished Gold):** Used for hover states and interactive elements to provide a sense of physical weight and texture change.

## Typography

This design system utilizes a high-contrast typographic pairing to balance heritage with modernity. 

**EB Garamond** is the primary serif, used for all headlines and display text. It evokes the literary and authoritative feel of high-end travel journals. For body text and functional labels, **Hanken Grotesk** provides a clean, contemporary counterpoint that ensures maximum legibility against dark backgrounds. 

Key headers should utilize a "graceful" scale. Display text may use italic variants of EB Garamond to highlight evocative adjectives or destination names. Labels are always uppercase with increased letter spacing to provide a "branded" feel to functional elements.

## Layout & Spacing

The layout philosophy is defined by **expansive, intentional whitespace**. Content should never feel cramped; instead, use generous margins and vertical padding to allow imagery and typography to breathe.

A **12-column fixed grid** is used for desktop layouts, centered within the viewport. For mobile, a single-column fluid approach is adopted with 24px side margins. 

Rhythm is maintained through an 8px base unit. Section spacing should be aggressive—often using 120px to 160px of vertical separation on desktop—to signal a transition between different travel experiences or narrative beats.

## Elevation & Depth

In a dark, luxurious environment, depth is not created with heavy shadows but through **tonal layering and luminosity**.

1.  **Base Layer:** The "Obsidian" floor (#0A0A0A).
2.  **Surface Layer:** "Charcoal" (#1F1F1F) used for cards and modular sections.
3.  **Luminous Accents:** Rather than traditional drop shadows, use very subtle, low-opacity gold outer glows (bloom) for active states to simulate light reflecting off a metallic surface.
4.  **Glass Layers:** For navigation bars or overlays, use a backdrop-blur (20px) with a 10% opacity white tint and a 1px "Champagne" border at 15% opacity to create a frosted glass effect.

## Shapes

The shape language is primarily **sharp and architectural**. We use a very low roundedness (0.25rem) to maintain a professional, high-end feel. 

Rounded elements are reserved only for specific interactive components like chips or small icons to prevent the UI from feeling too "tech-oriented" or soft. Images should maintain 0px (sharp) corners to emphasize their role as high-end photography/windows into a destination.

## Components

### Buttons
- **Primary:** Solid "Burnished Gold" background with "Obsidian" text. Sharp corners. 
- **Secondary:** Transparent background with a 1px "Champagne" border. Text in "Champagne".
- **Hover State:** Background colors shift slightly toward "Champagne-highlight", or the border thickness appears to glow via a subtle drop-shadow.

### Input Fields
- Underline style (bottom border only) is preferred over boxed inputs to maintain an editorial look.
- Use "Sand-muted" for placeholders and "Champagne" for active text.

### Cards
- Cards should have no background (ghost cards) or a "Charcoal-surface" background.
- Border: A 1px subtle stroke of `#333333` on all sides, or a "Gilded Edge"—a 1px gold gradient border—only on the top or left side for featured items.

### Lists & Navigation
- Navigation links should use "Label-md" typography.
- Active states are indicated by a 1px gold line underneath or a small gold dot (pip) to ensure a minimalist footprint.

### Imagery
- All imagery should have a slight "dark film" or vignette applied to the bottom edge to ensure white or gold typography remains legible when overlaid.