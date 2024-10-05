#usa una imagen de Node.js imagen oficial tomada de docker hub
FROM node:18-alpine
#Establece el directorio de trabajo dentro del contenedor
WORKDIR /app/npm
#Copia los archivos package,json y package-lock.json
COPY package*.json ./
#Instala las dependencias
RUN npm install
#Copia el codigo fuente
COPY . .
#Exponer el puerto 4200 para la aplicacion angular
EXPOSE 4200
#Ejecuta la aplicacion en modo desrrallo
CMD [ "npm","start","--","--host","0.0.0.0" ]