# Dockerized React Portfolio

This project is a production-ready Create React App portfolio that reuses the component library from earlier coursework and packages the final build in Docker with Nginx.

## Portfolio Sections

- Home
- About
- Skills
- Portfolio / Projects
- Contact Me

## Tech Stack

- React
- TypeScript
- Create React App
- Tailwind CSS
- Storybook
- Jest and React Testing Library
- Docker
- Nginx

## Why This Setup Is Production-Ready

The Dockerfile uses a multi-stage build so dependencies and build tooling stay in the first stage while the final image only contains the optimized static files plus `nginx:alpine`. That keeps the runtime image smaller, faster to start, and safer to deploy.

The delivery flow also reflects a simple CI/CD pipeline:

1. Install dependencies with `npm ci`.
2. Run `npm.cmd run validate` to check formatting, linting, and tests.
3. Build the React production bundle with `npm.cmd run build`.
4. Package the same production artifact into a Docker image.
5. Serve the compiled files through Nginx for a predictable deployment target.

## Required Docker Details

- Container name: `anyaba_chibuike_coding_assignment14`
- Working directory inside the container: `/anyaba_chibuike_final_site`
- Host port mapping: `5575:80`
- Portfolio URL after running the container: `http://localhost:5575`

## Run Locally With Node

Install dependencies:

```powershell
npm.cmd install
```

Start the development server:

```powershell
npm.cmd start
```

Run the test suite once:

```powershell
npm.cmd run test:ci
```

Run the full local validation workflow:

```powershell
npm.cmd run validate
```

Create a production build:

```powershell
npm.cmd run build
```

## Review Components With Storybook

Start Storybook locally:

```powershell
npm.cmd run storybook
```

Create a static Storybook build:

```powershell
npm.cmd run build-storybook
```

## Build the Docker Image

```powershell
docker build -t anyaba_chibuike_portfolio:latest .
```

## Run the Docker Container

Use the exact container name required by the assignment:

```powershell
docker run --rm --name anyaba_chibuike_coding_assignment14 -p 5575:80 anyaba_chibuike_portfolio:latest
```

Once the container is running, open:

```text
http://localhost:5575
```

## Stop and Remove the Container

If the container was started with `--rm`, stopping it is enough:

```powershell
docker stop anyaba_chibuike_coding_assignment14
```

If a previous container was created without `--rm`, remove it before rerunning:

```powershell
docker rm -f anyaba_chibuike_coding_assignment14
```

## Demo Checklist

Run these commands before demonstrating the project:

```powershell
npm.cmd run validate
npm.cmd run build
npm.cmd run build-storybook
docker build -t anyaba_chibuike_portfolio:latest .
docker run --rm --name anyaba_chibuike_coding_assignment14 -p 5575:80 anyaba_chibuike_portfolio:latest
```

Then open `http://localhost:5575`.

## CI/CD Summary for Submission

This project demonstrates CI/CD by separating development from deployment. The GitHub Actions workflow in `.github/workflows/ci.yml` can run automated checks when code changes are pushed. During continuous integration, the application can be formatted, linted, tested, and built. During continuous delivery, the verified production build is packaged into a Docker image and can be deployed consistently anywhere Docker is available.

The result is faster feedback, fewer release issues, and a repeatable delivery process.
