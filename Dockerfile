FROM node:20-alpine AS build

WORKDIR /anyaba_chibuike_ui_garden_build_checks

COPY package*.json ./
RUN npm install --no-audit --no-fund

COPY . .
RUN npm run build-storybook

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /anyaba_chibuike_ui_garden_build_checks/storybook-static /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
