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

# Aplicación de Búsqueda de Clima

## Resumen del Proyecto

Aplicación SPA para consultar el clima actual por ciudad y país usando las APIs de Geocoding y Weather de OpenWeather. UI simple, responsive y enfocada en el flujo principal.

## Funcionalidades

- Búsqueda por ciudad y país
- Temperatura actual con máximas y mínimas
- Estado de carga y mensaje de “no encontrado”
- Validación básica de campos requeridos

## Stack Tecnológico

- React 19
- TypeScript
- Vite
- Axios
- Zod
- CSS Modules

## Instalación y Puesta en Marcha

1. Instala dependencias:
   ```bash
   npm install
   ```
2. Crea un archivo `.env.local` en la raíz y agrega tu API key (ver Variables de Entorno).
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Variables de Entorno

Archivo `.env.local`:

```
VITE_API_KEY=tu_api_key_de_openweather
```

## Scripts

- `npm run dev` — servidor de desarrollo
- `npm run build` — type-check y build de producción
- `npm run preview` — vista previa del build
- `npm run lint` — ejecutar ESLint

## Estructura del Proyecto

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

## Mejoras Futuras

- Manejo de errores más claro para fallos de API
- Reinicio y sincronización de estados UI en nuevas búsquedas
- Usar units=metric para evitar conversiones manuales
- Tests para el hook y los componentes
- Reemplazar la lista de países por un dataset/API más completo
- Mejorar accesibilidad (ARIA, focus)
