FROM node:13-alpine3.11

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

CMD [ "yarn", "start" ]


