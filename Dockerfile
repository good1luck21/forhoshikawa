FROM node:19.8.1-alpine3.16

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

ENV DOCDB_URI=testdocdb.cluster-cpf6ljmuy8gw.ap-northeast-1.docdb.amazonaws.com
ENV DOCDB_URI2=testdocdb.cluster-ro-cpf6ljmuy8gw.ap-northeast-1.docdb.amazonaws.com
ENV DOCDB_PORT=27017
ENV DOCDB_USER=mydocdb
ENV DOCDB_PASSWORD=st1989121

EXPOSE 5555

CMD ["npm", "start"]