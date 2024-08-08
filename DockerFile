# Вихідний образ
FROM node:18-alpine

# Встановлюємо робочу директорію
WORKDIR /app

# Копіюємо package.json і package-lock.json
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо всі файли в контейнер
COPY . .

# Створюємо збірку програми Next.js
RUN npm run build

# Вказуємо команду для запуску Next.js
CMD ["npm", "start"]

# Контейнер буде слухати на порту 3000
EXPOSE 3000