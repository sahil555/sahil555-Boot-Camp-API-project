FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .


EXPOSE 10000

CMD [ "npm", "run" ,"dev", "0.0.0.0" ]