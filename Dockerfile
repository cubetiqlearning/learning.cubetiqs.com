FROM cubetiq/calpine-node AS builder
LABEL maintainer="sombochea@cubetiqs.com"

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn

COPY . .
RUN yarn build

FROM cubetiq/calpine-node:latest
LABEL maintainer="sombochea@cubetiqs.com"

RUN apk update && \
    apk add tzdata && \
    cp /usr/share/zoneinfo/Asia/Phnom_Penh /etc/localtime && \
    echo "Asia/Phnom_Penh" > /etc/timezone && \
    apk del tzdata

WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD [ "yarn", "start" ]