# Anyaba Chibuike UI Garden

This project uses React + TypeScript UI component library by adding local build checks with Husky, repository validation with GitHub Actions, and a production Docker image that serves the Storybook build on `http://localhost:8018`.

## Technology Stack

- React + TypeScript
- Create React App
- Storybook
- ESLint
- Prettier
- Jest + React Testing Library
- Husky + lint-staged
- GitHub Actions
- Docker + Nginx

## Requirements Covered

- Reuse the existing UI Component Library and Storybook project
- Block commits when formatting, linting, or tests fail
- Run the same checks on every GitHub push
- Build a production Docker image
- Serve the component library on `localhost:8018`
- Use Docker workdir `/anyaba_chibuike_ui_garden_build_checks`
- Run the container as `anyaba_chibuike_coding_assignment13`

## Project Structure

```text
.github/workflows/ci.yml
.husky/pre-commit
.storybook/
src/
.dockerignore
.eslintignore
.prettierignore
.prettierrc
Dockerfile
README.md
nginx.conf
package.json
package-lock.json
```

## Prerequisites

- Node.js 18+
- npm
- Git
- Docker Desktop

PowerShell note:

- If `npm` or `npx` is blocked by execution policy, use `npm.cmd` and `npx.cmd`.

## Install Dependencies

```powershell
npm.cmd install
```

## Local Development

Run the React app:

```powershell
npm.cmd start
```

Run Storybook:

```powershell
npm.cmd run storybook
```

Open Storybook at:

```text
http://localhost:6006
```

## Quality Checks

Check Prettier formatting:

```powershell
npm.cmd run format:check
```

Lint the project:

```powershell
npm.cmd run lint
```

Run all tests once:

```powershell
npm.cmd run test:ci
```

Run the full validation pipeline:

```powershell
npm.cmd run validate
```

## Husky Pre-Commit Hook

Every commit runs:

1. `npx lint-staged`
2. `npm run test:ci`

If formatting, ESLint, or tests fail, the commit is blocked.

## GitHub Actions

The workflow file is:

```text
.github/workflows/ci.yml
```

On every `push` and `pull_request`, GitHub Actions runs:

1. `npm ci`
2. `npm run format:check`
3. `npm run lint`
4. `npm run test:ci`
5. `npm run build-storybook`

This catches failures even if local Husky hooks are bypassed.

## Docker Production Build

The production image builds the static Storybook output and serves it with Nginx.

Build the image:

```powershell
docker build -t anyaba_chibuike_ui_garden_assignment13 .
```

Run the container:

```powershell
docker run --name anyaba_chibuike_coding_assignment13 -p 8018:80 anyaba_chibuike_ui_garden_assignment13
```

Open the production build at:

```text
http://localhost:8018
```

Stop and remove the container:

```powershell
docker stop anyaba_chibuike_coding_assignment13
docker rm anyaba_chibuike_coding_assignment13
```

## Demo Checklist

1. Show `.husky/pre-commit`.
2. Show `.github/workflows/ci.yml`.
3. Introduce a formatting, lint, or test error.
4. Attempt a commit and show Husky blocks it.
5. Fix the issue and run `npm.cmd run validate`.
6. Push broken code with Husky bypassed if you need to demonstrate CI catching it:

```powershell
git commit --no-verify -m "demo broken checks"
git push
```

7. Show GitHub Actions failing.
8. Fix the issue, push again, and show GitHub Actions passing.
9. Build the Docker image.
10. Run the container and open `http://localhost:8018`.
