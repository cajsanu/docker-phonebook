FROM node:20
  
WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm install
RUN npm run build:ui
  
USER node

CMD ["npm", "run", "dev", "--", "--host"]