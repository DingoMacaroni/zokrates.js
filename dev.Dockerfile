FROM zokrates/zokrates:0.4.11 as builder

# Actual application (for testing purposes)
FROM node:12
RUN mkdir /app
WORKDIR /app

COPY --from=builder /home/zokrates/zokrates /app/zokrates
COPY --from=builder /home/zokrates/.zokrates* /app/stdlib

COPY package.json ./
COPY package-lock.json ./

RUN npm ci
RUN npm install jest --g
