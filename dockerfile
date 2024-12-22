
FROM node:18-alpine


WORKDIR /app


COPY . .


RUN npm install -g react-scripts


RUN npm install

WORKDIR /app/client
RUN npm install && npm run build

WORKDIR /app

RUN cp -r /app/client/dist/* /app/public/


CMD ["npm", "run", "start"]
