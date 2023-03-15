# build step
FROM node:19.7-alpine3.16 as build

WORKDIR /app
COPY package.json ./
RUN yarn
COPY . ./
RUN yarn build

# release step
FROM nginx:1.23.3-alpine as release
COPY --from=build /app/dist /usr/share/nginx/html/
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
