# LofiMusic

LofiMusic is an anime-inspired listening space for studying, coding, reading, and quiet moments. Choose a station, play a YouTube-backed queue, add ambient rain or soft noise, and save your own tracks locally in the browser.

## Features

- Anime Vibe, Lofi Girl, and Chillhop listening stations
- YouTube embedded playback with play/pause, previous, next, and volume controls
- Queue display with automatic progression through tracks
- Ambient rain and soft-noise toggles
- My Favs queue for saving YouTube songs in local storage
- Responsive layout for desktop and mobile screens

## Tech stack

- Angular 13
- Angular Material
- Bootstrap 5
- YouTube IFrame Player API

## Getting started

### Prerequisites

- Node.js and npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm start
```

Open <http://localhost:4200/> in your browser. The app reloads automatically when source files change.

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the local development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run watch` | Rebuild continuously in development mode |
| `npm test` | Run the unit tests with Karma |

## Data and privacy

Music is played through YouTube's official embedded player. LofiMusic does not download, extract, or host the audio. Songs added to **My Favs** are stored in the browser's `localStorage`; there is no account, backend, or cross-device synchronization.

## Project structure

- `src/app/dashboard` — main listening dashboard and station queues
- `src/app/youtube-player` — reusable YouTube player controls
- `src/app/ambient-sounds` — rain and soft-noise controls
- `src/app/music-library.service.ts` — local saved-track storage
- `src/app/Channels` — built-in station views
