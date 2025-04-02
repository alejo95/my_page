# Imagen base de Node.js
FROM node:20-alpine AS builder
WORKDIR /app

# Copiar archivos del proyecto
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install --verbose

#Install xsel
RUN apk add --no-cache xsel

# Copiar el resto del código
COPY . .

# Construir el proyecto
RUN npm run build --verbose

# Segunda etapa para servir la aplicación
FROM node:20-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/build ./build
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]

