# TropiCart Ecommerce Landing Page

Modern responsive ecommerce landing page built with React, Vite, Tailwind CSS v4, and DaisyUI v5, using a custom tropical-light theme.

## Overview

This project is a marketing-style ecommerce landing page for TropiCart with:
- Sticky navbar
- Hero section
- Category showcase
- Featured products
- Benefits and trust section
- Testimonials
- Final call to action
- Footer with newsletter input

## Tech Stack

- React 19.2.4
- React DOM 19.2.4
- Vite 8.0.1
- Tailwind CSS 4.2.2
- @tailwindcss/vite 4.2.2
- DaisyUI 5.5.19
- ESLint 9.39.4

## Getting Started

Prerequisites:
- Node.js 18 or newer (recommended)

Install dependencies:
npm install

Start development server:
npm run dev

Build for production:
npm run build

Preview production build:
npm run preview

Run lint:
npm run lint

## Project Structure

src/
- App.jsx
- App.css
- index.css
- main.jsx
- components/
  - landing/
    - Hero.jsx
    - Categories.jsx
    - FeaturedProducts.jsx
    - Benefits.jsx
    - Testimonials.jsx
    - FinalCta.jsx
    - Footer.jsx

## Theme Notes

Global theme configuration lives in index.css.

- Tailwind is loaded with @import "tailwindcss"
- DaisyUI is loaded with @plugin "daisyui"
- Custom DaisyUI theme name: tropical-light
- Color tokens are defined with OKLCH values for:
  - base surfaces
  - primary, secondary, accent
  - neutral, info, success, warning, error
- Radius tokens are customized for selectors, fields, and boxes

This allows DaisyUI classes like btn-primary, badge-secondary, card, alert, and navbar to automatically follow the tropical palette.

## Build Output

Production build artifacts are generated in:
dist/

