# Weather Search App

## Project Overview

Single-page app to search current weather by city and country using the OpenWeather Geocoding + Weather APIs. The UI is minimal, responsive, and focused on the core search flow.

## Features

- Search by city and country
- Current temperature with min/max
- Loading state and “not found” feedback
- Client-side validation for required fields

## Tech Stack

- React 19
- TypeScript
- Vite
- Axios
- Zod
- CSS Modules

## Installation & Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env.local` file at the project root and add your API key (see Environment Variables).
3. Start the dev server:
   ```bash
   npm run dev
   ```

## Environment Variables

Create a `.env.local` file:

```
VITE_API_KEY=your_openweather_api_key
```

## Scripts

- `npm run dev` — start development server
- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint

## Project Structure

```
src/
  components/
    Alert/
    Form/
    Spinner/
    WeatherDetail/
  data/
    countries.ts
  hook/
    useWeather.ts
  types/
    index.ts
  utils/
    index.ts
  App.tsx
  main.tsx
```

## Future Improvements

- Add better error handling and user-friendly messages for API failures
- Reset and synchronize UI states (e.g., not-found, alerts) on new searches
- Use API units=metric to avoid manual temperature conversion
- Add tests for the hook and components
- Replace hardcoded country list with a more complete dataset or API
- Improve accessibility (ARIA labels, focus states)

---

