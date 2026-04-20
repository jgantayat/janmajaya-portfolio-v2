# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **planning workspace** for a personal portfolio website. No implementation code exists yet — this directory contains design documents and prompts that drive the build process.

## Tech Stack (planned)

- **Frontend**: Angular 21 (fully client-side, no SSR)
- **Runtime**: Node.js
- **Deployment**: Public hosting (TBD)

## Repository Purpose

This workspace is structured around two phases:

- **Phase 1** — Design planning: architecture decisions, UI/UX layout, component breakdown, prompt drafting for Claude Code sessions
- **Phase 2** — Personal data integration: user-provided content (bio, achievements, career) mapped into the design

## Directory Conventions

- `/prompt_planner/` — Markdown files containing structured prompts for Claude Chat and Claude Code sessions, organized by design area or phase
- `Design.md` — The primary bootstrapping document; source of truth for project goals and phasing

## Working in This Repo

Since this is a planning-only workspace:

- New `.md` files go under `/prompt_planner/` unless they are top-level project documents
- When drafting implementation prompts, scope them to Angular 21 conventions and client-side-only constraints (no server-side rendering, no backend API)
- The end goal of planning artifacts is to produce actionable prompts that can be executed in a separate Angular project workspace
