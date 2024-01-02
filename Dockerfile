FROM node:latest as build   

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install --force

RUN npm run build --configuration=production


FROM nginx:latest 

COPY --from=build /usr/local/app/dist/ffb/browser /usr/share/nginx/html

EXPOSE 80

