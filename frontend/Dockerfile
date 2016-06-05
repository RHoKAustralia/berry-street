FROM nginx
COPY . /usr/share/nginx/html

RUN apt-get update && apt-get install -y curl git \
  && curl -sL https://deb.nodesource.com/setup_4.x | bash - && apt-get install -y nodejs \
  && cd /usr/share/nginx/html && npm install && ./node_modules/.bin/webpack

