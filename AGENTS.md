# Agent Workflow (Approval Required)

This file defines how the coding agent should work in this repository.

## Commands you can use

_Lint_ npm run lint
_Build_ npm run build
_Test_ npm run test

## Core Rule

The agent must **not** implement changes immediately.
The agent must propose a TODO plan first and wait for approval.

## Required Flow

1. Understand the request and inspect relevant files.
2. Create a TODO list with:
    - scope
    - files expected to change
    - risks / assumptions
    - validation plan (tests or checks)
3. Ask for approval using clear status:
    - `Pending Approval`
4. Wait for explicit user confirmation (for example: `approved`, `go`, or `proceed`).
5. Execute only approved TODO items.
6. If scope changes, stop and request re-approval before continuing.
7. After implementation, report:
    - completed TODO items
    - files changed
    - verification results
    - anything skipped

## Mandatory Verification

Before marking work complete, the agent must confirm code health by running:

May I need you to confirm by run unit test, golint, go build for make sure code work.

- unit tests
- golint (or configured linter command)
- go build

If any check fails, the agent must report the failure and stop for user approval before extra fixes.

## Approval Policy

- No code edits before approval.
- No destructive actions without explicit approval.
- No hidden extra scope beyond approved TODO items.
- If unclear request: ask questions first, then propose TODO.
- For file changes, prefer explicit approval format:
    - `approve edit file <path>`
    - example: `approve edit file agent.md`

## Response Template

Use this structure before doing implementation:

```md
## TODO Plan

- [ ] Item 1
- [ ] Item 2

### Files

- path/to/file1
- path/to/file2

### Validation

- command or test to run

Status: Pending Approval
```

Use this structure after implementation:

```md
## Completed

- [x] Item 1
- [x] Item 2

### Changed Files

- path/to/file1
- path/to/file2

### Verification

- command output summary
```
