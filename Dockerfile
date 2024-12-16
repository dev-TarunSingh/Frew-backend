FROM node:20

WORKDIR /

COPY package*.json ./

RUN npm install

IP -4 -o addr eth0 | grep -oP 'inet \K[^/]+'

COPY . .

EXPOSE 6000

CMD ["node", "index.js"]