FROM node:13-alpine3.11

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .

RUN yarn

COPY . .

CMD [ "yarn", "start" ]
