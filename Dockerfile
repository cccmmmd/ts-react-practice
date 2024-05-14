FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci && npm cache clean --force
COPY . .
RUN npm run build

#################################
# production stage
FROM nginx:alpine

# 建立工作目錄
WORKDIR /usr/share/nginx/html

# 從 builder 階段裡的 /app/build 複製到目前位置（WORKDIR）
COPY --from=builder /app/build .