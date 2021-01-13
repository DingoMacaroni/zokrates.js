ARG NODE_VERSION=14
ARG ZOKRATES_VERSION=0.6.3

FROM zokrates/zokrates:$ZOKRATES_VERSION as zokrates_builder
FROM node:$NODE_VERSION

# used for CI
ARG NODE_VERSION
ARG ZOKRATES_VERSION
ENV NODE_VERSION=$NODE_VERSION
ENV ZOKRATES_VERSION=$ZOKRATES_VERSION
# locations for bin and stdlib for versions >= 0.6:
# /home/zokrates/.zokrates/bin/zokrates
# /home/zokrates/.zokrates/stdlib
# locations for bin and stdlib for versions < 0.6:
# /home/zokrates/zokrates
# /home/zokrates/.zokrates*
ARG ZOKRATES_BUILDER_BIN=/home/zokrates/.zokrates/bin/zokrates
ARG ZOKRATES_BUILDER_STDLIB=/home/zokrates/.zokrates/stdlib
# to be defined according to WORKDIR
ENV ZOKRATES_BIN=/app/zokrates
ENV ZOKRATES_STDLIB=/app/stdlib

RUN mkdir /app
WORKDIR /app

COPY --from=zokrates_builder $ZOKRATES_BUILDER_BIN $ZOKRATES_BIN
COPY --from=zokrates_builder $ZOKRATES_BUILDER_STDLIB $ZOKRATES_STDLIB

COPY package*.json ./

RUN npm ci
RUN npm install jest@26.6.3 --g
