# Lofi Music MVP Plan

## Goal

Build a simple anime/lofi music web app that uses official embedded YouTube playback without accounts or a backend.

## Completed

- Add category pages for Lofi Girl, Anime Vibe, and Chillhop.
- Add embedded YouTube IFrame playback.
- Automatically move to the next queued video when playback ends.
- Add previous/next playback controls.
- Add a My Playlist page.
- Store user-added YouTube video IDs in browser `localStorage`.
- Keep the existing Angular Material navigation structure.
- Stabilize the Angular build and test setup.
- Validate the dev server and main routes locally.
- Replace live-radio seeds with regular uploaded YouTube music videos.
- Refresh the visual design with an anime/lofi color palette, responsive player frame, and improved navigation styling.
- Handle unavailable or non-embeddable videos with a status message and automatic queue skip.
- Add remove-all, reorder, and clear queue controls to My Playlist.
- Expand the built-in categories with additional uploaded, non-live YouTube videos.
- Show friendly track titles instead of raw YouTube IDs in the player queue.
- Apply a stronger anime-inspired visual treatment and diversify built-in catalog sources.
- Add a Focus Room dashboard with stations, now-playing context, and an upcoming queue.
- Add browser-generated rain and soft-noise ambient layers.

## Next steps

1. Add deployment instructions for a free static host.
2. Support pasted YouTube playlist links as a later feature.

## Constraints

- Use YouTube’s official embedded player.
- Do not download or extract YouTube audio.
- No user accounts, OAuth, backend, or database for the MVP.
- User-created playlists remain local to the current browser/device.
