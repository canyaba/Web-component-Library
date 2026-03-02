## Anyaba Chibuike UI Garden

A React + TypeScript Component Library built using:

- Create React App (CRA)
- Storybook
- styled-components
- Jest + React Testing Library
- Docker (Production Deployment on Port 8083)

---

## Project Overview
This project demonstrates the creation of a reusable and responsive UI component library.

Each component includes:
- Styled-components for styling
- Default and disabled states
- Storybook controls for prop manipulation
- Unit tests validating rendering and disabled state behavior
- Production Docker deployment

---

## Prerequisites
Before running this project, ensure you have:

- Node.js (v18+ recommended)
- npm
- Docker Desktop (must be running for container deployment)

Verify installations:
node -v
npm -v
docker --version

## Getting Started with Create React App
npx create-react-app lastName_firstName_ui_garden --template typescript

## Navigate to ht project folder
cd lastName_firstName_ui_garden

## Instal Dependencies
npm install

## Sanity check
npm start

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Install Styled Components
npm install styled-components
npm install -D @types/styled-components


## UI Garden Component Library
npm run storybook

Runs the app in the development
http://localhost:6006

React + TypeScript Component Library built with Storybook and styled-components.

## Production Docker Build
Build image:

docker build -t ui_garden_prod .

Run container:

docker run --name lastName_firstName_coding_assignment12 -p 8083:8083 ui_garden_prod

Open:

http://127.0.0.1:8083

## Production Docker Build
docker stop lastName_firstName_coding_assignment12
docker rm lastName_firstName_coding_assignment12