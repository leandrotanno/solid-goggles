# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar package files
COPY package*.json ./

# Instalar dependências
RUN npm ci

# Copiar código fonte
COPY . .

# Build da aplicação
RUN npm run build

# Debug - verificar se o build foi criado
RUN ls -la /app/dist

# Production stage
FROM nginx:alpine

# Remover config padrão do nginx
RUN rm -rf /etc/nginx/conf.d/default.conf

# Copiar nossa config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar os arquivos buildados
COPY --from=builder /app/dist /usr/share/nginx/html

# Debug - verificar se os arquivos foram copiados
RUN ls -la /usr/share/nginx/html

# Expor porta
EXPOSE 80

# Comando para manter o nginx rodando
CMD ["nginx", "-g", "daemon off;"]