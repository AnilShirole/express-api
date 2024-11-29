FROM node:current-alpine

LABEL org.opencontainers.image.title="Express API!" \
      org.opencontainers.image.description="rest api with expressJS" \
      org.opencontainers.image.authors="@anilshirole"

RUN mkdir -p /usr/src/app

COPY . /usr/src/app

WORKDIR /usr/src/app

RUN npm install

ENTRYPOINT [ "node", "server.js" ]