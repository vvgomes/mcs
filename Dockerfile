FROM node:15-alpine
WORKDIR /app
COPY package.json ./
RUN yarn install --production
COPY . .
RUN ["chmod", "+x", "./mcs.js"]
ENTRYPOINT ["node", "mcs.js"]
