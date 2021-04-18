FROM buildkite/puppeteer:latest


RUN mkdir /app
WORKDIR /app

COPY package*.json .
RUN npm install
COPY lib lib/
COPY puppeteer.config.json .
#ENV  PATH="${PATH}:/node_modules/.bin"