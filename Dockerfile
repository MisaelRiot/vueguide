FROM node:22-alpine3.19
RUN apk update && apk upgrade
RUN apk update && apk add bash
# RUN npm install -g @vue/cli
# npm create vue