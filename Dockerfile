
FROM node:10
WORKDIR /app
COPY . /app
COPY package.json /app
RUN npm i --verbose
#COPY ./entrypoint.sh /entrypoint.sh
#RUN chmod +x /entrypoint.sh
RUN npm run-script build