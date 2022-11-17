FROM node:16.13.0 as inmar
WORKDIR /app
COPY . /app
RUN npm install
RUN npm i -g  @angular/cli@8.0.0
RUN ng build --output-hashing=all
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=inmar /app/dist/inmar-app .
COPY default.conf /etc/nginx/conf.d/default.conf
