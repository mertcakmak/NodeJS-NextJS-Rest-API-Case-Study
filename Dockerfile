FROM node:16
WORKDIR /api
COPY /api/package*.json ./
RUN npm install
COPY . .
EXPOSE 5001
CMD ["node","api.js"]