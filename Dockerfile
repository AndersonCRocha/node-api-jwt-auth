FROM node:14-slim

ENV APP=./app

RUN mkdir ${APP}

COPY package*.json yarn.lock $APP

COPY . $APP

WORKDIR $APP

RUN yarn

CMD ["yarn", "dev"]

