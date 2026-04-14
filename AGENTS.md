# Repository Instructions

## Component Naming

- Use PascalCase filenames for React component files.
- Use PascalCase component identifiers for React components.
- Apply this to files under `src/components/blocks`, `src/components/ui`, `src/components/layouts`, and similar component directories.
- Example: `ButtonBlock.tsx`, not `button-block.tsx`.
- Example: `ButtonBlock`, not `buttonBlock`.

## Page Organization

- Keep page-level screens and assembled route UI in `src/modules`.
- Keep `src/app/**/page.tsx` files thin; they should mostly import and return module pages.
- Keep low-level renderer primitives in `src/components/renderer`.
- Example: route wrapper in `src/app/[locale]/published/[slug]/page.tsx`, page module in `src/modules/Builder/PublishedPage.tsx`.

## Module Pattern

- In `src/modules`, declare module components as `const` values.
- Export the module with `export default ModuleName` at the end of the file.
- Prefer a `Props` interface when the module receives props.
- Avoid inline `export default function ...` declarations in module files.

## Folder Responsibilities

- `src/app`: route entry files only. Keep route files thin.
- `src/modules`: page-level screens and feature modules.
- `src/components`: reusable UI and rendering building blocks.
- `src/components/renderer`: low-level builder render primitives, not full route pages.
- `src/lib`: reusable runtime logic, shared helpers, adapters, clients, and infrastructure code.
- `src/configs`: declarative setup, static configuration, provider options, and environment-based config values.
- `src/repositories`: data access layer and API-facing persistence logic.
- `src/services`: orchestration and business-use-case logic built on repositories or shared libs.
- `src/stores`: client state containers.
- `src/types`: shared type definitions.

- If a file creates a client, registers a provider, mutates a runtime library, calls services, or exports executable setup logic, it belongs in `src/lib`.
- If a file only exports constants, options, or settings, it belongs in `src/configs`.

## Architecture Pattern

- Prefer modular structure: routes in `src/app`, page screens in `src/modules`.
- Keep infrastructure replaceable: use adapter and factory patterns for optional integrations like observability.
- Prefer `Null Object` or noop implementations when a project may not need a feature.
- Keep vendor-specific code isolated from feature code.
- Put reusable clients such as `axios` in `src/lib`, and keep domain-specific API usage in repositories or services.
- Before refactoring, preserve folder boundaries instead of mixing config, runtime logic, and feature UI.

## Refactor Preference

- On future refactors, follow the documented folder responsibilities first.
- If a file mixes multiple concerns, split by responsibility rather than by file size alone.
- Prefer consistency with existing module patterns over one-off local style choices.
