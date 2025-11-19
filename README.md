# YOUWARE.md

## Project Overview
**Cardiotech Data Solutions Website**
A modern, responsive React application for a cardiac data processing company. Built with React 18, TypeScript, Tailwind CSS, and GSAP for animations.

## Tech Stack
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS (Medical Blue Theme)
- **Animations**: GSAP (ScrollTrigger), Custom SVG Heartbeat
- **Charts**: Chart.js + react-chartjs-2
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Key Features
1.  **Dynamic Home Page**:
    - Hero section with custom SVG heartbeat animation (GSAP).
    - Animated statistics counters.
    - Feature cards with glassmorphism effects.
    - Real-time analytics dashboard preview using Chart.js.

2.  **Services Page**:
    - Grid of service cards with hover effects.
    - Detailed feature lists for each service.

3.  **About Us Page**:
    - Interactive timeline of company history.
    - Team section with hover reveal effects.
    - Mission/Vision/Values cards.

4.  **Contact Page**:
    - Contact form with validation simulation.
    - Google Maps embed.
    - Direct WhatsApp chat integration.

5.  **Theme System**:
    - Dark/Light mode toggle with persistence.
    - Custom "Medical Blue" color palette.

## Development Commands
- `npm install`: Install dependencies.
- `npm run dev`: Start development server.
- `npm run build`: Build for production.

## Project Structure
- `src/components`: Reusable UI components (Navbar, Footer, Hero, Stats, etc.).
- `src/pages`: Route components (Home, Services, About, Contact).
- `src/assets`: Static assets.

## Customization
- **Colors**: Edit `tailwind.config.js` to modify the `primary`, `secondary`, and `accent` colors.
- **Animations**: Modify `src/components/HeartbeatAnimation.tsx` for the hero animation or `src/index.css` for global transitions.
- **Data**: Update the arrays in `src/components/Stats.tsx`, `src/components/Features.tsx`, and `src/pages/Services.tsx` to change content.

## Notes
- The project uses `gsap` for complex animations. Ensure `ScrollTrigger` is registered in components that use it.
- `Chart.js` is used for the analytics graph. Configuration is in `src/components/AnalyticsChart.tsx`.
