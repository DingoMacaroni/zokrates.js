# Actual application (for testing purposes)
FROM zokrates/zokrates:0.6.3 as builder
FROM node:14

RUN mkdir /app
WORKDIR /app

COPY --from=builder /home/zokrates/.zokrates/bin/zokrates /app/zokrates
COPY --from=builder /home/zokrates/.zokrates/stdlib /app/stdlib

COPY package*.json ./

RUN npm ci
RUN npm install jest@26.6.3 --g
