FROM node:15

WORKDIR /usr/src/app

RUN curl -o wait-for-it.sh \ 
https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh
RUN chmod +x ./wait-for-it.sh

RUN npm install 

EXPOSE 3000

CMD ["node","index.js"]
