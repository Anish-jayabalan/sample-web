FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY . 
COPY default.conf /etc/nginx/conf.d/default.conf
