FROM node:20-alpine AS build

WORKDIR /anyaba_chibuike_final_site

COPY package*.json ./
RUN npm ci --no-audit --no-fund

COPY . .
RUN npm run build

FROM nginx:alpine AS production

WORKDIR /anyaba_chibuike_final_site

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /anyaba_chibuike_final_site/build ./

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
