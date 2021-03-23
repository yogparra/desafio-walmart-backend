FROM andthensome/alpine-node-bash
WORKDIR /src
COPY package*.json ./
RUN yarn install
COPY . .
CMD [ "yarn", "prd" ]