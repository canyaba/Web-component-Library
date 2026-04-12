# Dockerized React Portfolio

This project is a production-ready Create React App portfolio that reuses the component library from earlier coursework and packages the final build in Docker with Nginx.

## Portfolio Sections

- Basic Information
- Work
- Skills
- Resources
- Developer Setup

## Tech Stack

- React
- TypeScript
- Create React App
- Styled Components
- Jest and React Testing Library
- Docker
- Nginx

## Why This Setup Is Production-Ready

The Dockerfile uses a multi-stage build so dependencies and build tooling stay in the first stage while the final image only contains the optimized static files plus `nginx:alpine`. That keeps the runtime image smaller, faster to start, and safer to deploy.

The delivery flow also reflects a simple CI/CD pipeline:

1. Build the React app with `npm ci` and `npm run build`.
2. Run automated checks such as tests and linting before release.
3. Package the same production artifact into a Docker image.
4. Serve the compiled files through Nginx for a predictable deployment target.

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

Create a production build:

```powershell
npm.cmd run build
```

## Build the Docker Image

```powershell
docker build -t anyaba_chibuike_portfolio:latest .
```

## Run the Docker Container

Use the exact container name required by the assignment:

```powershell
docker run --name anyaba_chibuike_coding_assignment14 -p 5575:80 anyaba_chibuike_portfolio:latest
```

Once the container is running, open:

```text
http://localhost:5575
```

## Stop and Remove the Container

```powershell
docker stop anyaba_chibuike_coding_assignment14
docker rm anyaba_chibuike_coding_assignment14
```

## CI/CD Summary for Submission

This project demonstrates CI/CD by separating development from deployment. During continuous integration, the application can be tested, linted, and built automatically whenever code changes are pushed. During continuous delivery, the verified production build is packaged into a Docker image and can be deployed consistently anywhere Docker is available. The result is faster feedback, fewer release issues, and a repeatable delivery process.
