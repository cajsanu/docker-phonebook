FROM node:20
  
WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN cd ./phonebook_frontend && npm install && cd .. && npm install

ENV BASE_URL=/api

RUN npm run build:ui
  
USER node

CMD ["npm", "start", "--", "--host"]