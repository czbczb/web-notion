FROM --platform=linux/amd64 node:16.14.2 as build-stage

ENV notion_env='test'


WORKDIR /app


# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

RUN --mount=type=cache,target=/app/node_modules,id=my_app_npm_module,sharing=locked \
    --mount=type=cache,target=/root/.npm,id=npm_cache

# install project dependencies
RUN npm install -g pnpm \
    pnpm add -g pnpm \
    pnpm install

RUN --mount=type=cache,target=/app/node_modules,id=my_app_npm_module,sharing=locked

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

RUN pnpm run build

# production stage
#代理nginx，nginx直接访问
FROM nginx:stable-alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html

#用本地的 default.conf 配置来替换nginx镜像里的默认配置
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
#暴露端口
EXPOSE 80