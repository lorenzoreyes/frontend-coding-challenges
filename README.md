# Frontend Code Challenge — The Harry Potter App

## Overview

You've been given a partially implemented Harry Potter character browser app. Your task is to implement missing features, add to existing ones, and find and fix bugs — all while following the established patterns and matching the design reference.

**Time:** ~3 hours
**Design Reference:** [Figma](https://www.figma.com/design/oN2ilfPlzWuHYuA2aOBSF3/HP-Code-Challenge?node-id=1-82&p=f&t=WDijY68nvlMKywqw-0)

## Getting Started

1. Fork this repository
2. Install dependencies: `pnpm install`
3. Copy `.env.example` to `.env`
4. Start the dev server: `pnpm dev`
5. Open http://localhost:3001

## The API

This app uses the [Harry Potter API](https://hp-api.onrender.com/). Available endpoints:

| Endpoint                        | Description                         |
| ------------------------------- | ----------------------------------- |
| `/api/characters`               | All characters                      |
| `/api/characters/house/{house}` | Characters by house                 |
| `/api/character/{id}`           | Single character (returns an array) |

## Tasks

### Task 1 — Implement Feature: Character Detail Page

When a user clicks on a character card, they should navigate to a detail page for that character. See the **"Characters Details"** section in the Figma for the expected design.

#### Requirements

- Create a dynamic route that displays a single character's details
- Pre-fetch character data using a route loader
- Display the following information sections (see Figma):
  - **Basic Information**: species, gender, date of birth, ancestry, eye color, hair color
  - **Magical Information**: wizard/witch status, patronus
  - **Hogwarts**: student and staff status
  - **Portrayed By**: actor name and alternates
- Handle the case where a character is not found
- Include back navigation

### Task 2 — Implement Feature: Character Filters & Favorites

Users should be able to filter the character list and favorite characters. See the Figma for the expected design.

#### Requirements

- Add a filter bar with the following options: **All Characters**, **Students**, **Staff**, **Favorite**
- Add a favorite toggle button (star icon) on each character card
- Favorites should persist across page reloads (localStorage)
- Clicking the star should NOT navigate to the character detail page

**Hint:** Look at the existing constants and store patterns.

### Task 3 — Bug Fixes

There are bugs in the codebase. Find and fix them.

For each bug you find, include a brief comment or commit message explaining the root cause.

## Tech Stack

- React 19 + TypeScript
- TanStack Router (file-based routing)
- TanStack React Query (data fetching)
- Zustand (state management with localStorage persistence)
- Tailwind CSS v4
- Vitest + React Testing Library

## Evaluation Criteria

- Architecture and pattern consistency with the existing codebase
- React Query and data management proficiency
- TanStack Router usage (routes, loaders, search params)
- TypeScript type safety
- Component design matching the Figma and existing visual style
- Bug identification and fix quality
- Code organization and separation of concerns

## How to Submit

Push your work to your fork and send us the link to the repository.
