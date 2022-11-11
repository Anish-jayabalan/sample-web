FROM nginx:alpine as sample
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY . /usr/share/nginx/html
COPY /app/* .
COPY default.conf /etc/nginx/conf.d/default.conf
