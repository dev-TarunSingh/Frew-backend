FROM node:20

WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 6000

CMD ["sh", "-c", "hostname -I && node index.js"]