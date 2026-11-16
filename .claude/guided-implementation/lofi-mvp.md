# Guided implementation: Lofi Music MVP

## current_task_requirements

- description: Make the existing embedded-YouTube MVP compile and run locally first; improve visuals afterward.
- success_criteria:
  - Angular production and development builds complete successfully.
  - The dev server starts and the main routes render.
  - Category pages use individual YouTube video IDs.
  - The embedded player loads and advances through its queue after user interaction.
  - User playlists remain deferred until the rest of the MVP is stable.
  - Visual improvements happen only after runtime validation.
- constraints:
  - No accounts, OAuth, backend, or database.
  - Use the official YouTube embedded player.
  - Do not download or extract YouTube audio.
- test_expectations: Run build/tests, launch the dev server, and inspect the routes interactively.

## planned_stages

1. SCOPE: inspect the Angular project and identify compile/runtime risks.
2. CHALLENGE: cross-check the proposed stabilization approach and risks.
3. IMPLEMENT A: resolve environment/toolchain and Angular compilation issues.
4. IMPLEMENT B: validate the player and category route behavior.
5. IMPLEMENT C: improve visuals after functional validation.
6. REVIEW: run final build/tests, launch the server, inspect routes, and compare against success criteria.
