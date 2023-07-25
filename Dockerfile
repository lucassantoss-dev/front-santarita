FROM node:14.17.6 as angular
WORKDIR /app
COPY package.json /app
#RUN npm install --silent
COPY . .
RUN npm install -g npm@7.20.5
RUN npm install
CMD npm run start
RUN npm cache clean --force
RUN npm cache verify
#RUN npm install --save @ng-bootstrap/ng-bootstrap
#RUN ng add @angular/material@9.0.2
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/cemiterio /usr/share/nginx/html
#COPY ./config/nginx.config /etc/nginx/conf.d/default.conf

# docker build -t loop-front .
# docker run -p 8081:80 loop-front
