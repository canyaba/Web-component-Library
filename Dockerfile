# ---- Build Stage ----
FROM node:18-alpine AS build

WORKDIR /lastName_firstName_ui_garden

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---- Production Stage ----
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /lastName_firstName_ui_garden/build /usr/share/nginx/html

EXPOSE 8083

CMD ["nginx", "-g", "daemon off;"]
