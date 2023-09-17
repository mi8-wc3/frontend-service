# Используйте официальный образ Node.js для сборки
FROM node:20-alpine AS build
WORKDIR /app
COPY . /app
RUN react-beer/npm install
RUN react-beer/npm run build

# Настройка Nginx
FROM nginx:alpine
COPY --from=build /app/react-beer/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
