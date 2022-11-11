FROM nginx:alpine as sample
WORKDIR /app
COPY . /app
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY /app .
COPY default.conf /etc/nginx/conf.d/default.conf
