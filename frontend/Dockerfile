FROM node:argon

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package.json /app
RUN npm install
# RUN npm i --save redux-logger
# RUN npm i --save redux-thunk

# Bundle app source
COPY . /app
# Build the app
# RUN npm install webpack
RUN npm run build

CMD [ "node_modules/.bin/http-server", "-p", "80" ]
