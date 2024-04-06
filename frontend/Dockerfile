FROM node:20.11.1-slim AS builder
ARG NG_APP_GOOGLE_MAPS_KEY=
ENV NG_APP_GOOGLE_MAPS_KEY=${NG_APP_GOOGLE_MAPS_KEY}

WORKDIR /usr/src/app

COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

COPY frontend/ ./
RUN npm run build

FROM nginx:1.25.4-alpine

COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist/frontend/browser /usr/share/nginx/html
