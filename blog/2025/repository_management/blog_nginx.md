---
slug: entendiendo_nginx
sidebar_position: 1
title: Nginx
tags: ["nginx", "redes"]
authors: alejandro-ramirez
date: 2025-05-15
---

<!-- truncate -->

    Durante algún tiempo me he topado con el problema de entender qué es Nginx y cómo funciona, debido a que es un
    poco confuso, ya que muchas personas hablan de que es un servidor web, un balanceador de cargas, también un Proxy
    inverso y más, claro es porque tiene todas estas funcionalidades, así que en este blog exploraremos juntos cómo
    funciona y realizaremos algunas pruebas para ver sus diferentes usos.

        <img src="/img/blog/nginx/nginx.png" alt="contenedor" width="600" />

## ¿Qué es Nginx? 🫣

    En principio es un software de código abierto que funciona principalmente como servidor web, que tal y como hablamos
    en un principio tiene diferentes funcionalidades, ya que fue creado para mejorar el rendimiento y la estabilidad de
    las aplicaciones web, en especial cuando hablamos de entornos de alta demanda, o sea cuando tenemos una aplicación que
    tienen muchos peticiones.ndo hablamos de entornos de alta demanda, osea cuando tenemos una aplicación que tienen
    muchos peticiones.

### Funcionalidaes de Nginx 🧰

Nginx es un servidor web que puede acturar como:

    - Servidor web startico: sirve para manejar archivos como html, css y imagenes.
    - Poxy inverso: reenvia peticiones a otros setvidores (como Node Js, Python).
    - Balancedor de cargas: distribuye el trafico entre los servidores para evitar sobre cargas.
    - servidor de cache: guarda copias temporales para acelear las respuestas.

### Instalación en Ubuntu 👨‍💻

    En este caso realizaremos la instalación en Bubuntu, para que puedas realizar algunas pruebas tambien
    tendras el codigo disponible para que puedas utilizarlo en tu.

        ``` bash title=" Bash"
        sudo apt update           #  actualizat linux
        sudo apt install nginx    #  instalar nginx
        ```
    una vez instalado podremos probar si Nginx esta corriendo adecuadamente usando

        ``` bash title=" Bash"
        sudo systemctl status nginx
        ```

    lo cual mostra algo asi si todo sale correctamente 🥳

        <img src="/img/blog/nginx/nginx_status.png" alt="contenedor" width="800" />

    de esta forma podremos saber si nuestro servido Nginx fue instalado de una forma correcta y esta funcionando
    desde este punto podremos las diferente carracteristicas de Nginx

### Estructura de Nginx 🏗️

la estructura de Nginx es la siguiente que se genera automaticamente al instalar

    ``` bash title=" Bash"
    /etc/nginx/
    ├── nginx.conf             # Configuración principal
    ├── sites-available/       # Configs de sitios disponibles
    ├── sites-enabled/         # Enlaces a sitios activos
    └── conf.d/                #Configs adicionales (opcional)
    ```

### Implemetando Nginx como servidor web 🖥️

La primera implementación que realizaremos es crear una pagina simple, sigue los pasos y podras crear
tu primer servidor web con Nginx en un servidor de linux.

1. Crearemos una capeta en nuestro servidor 📂

        ``` bash title=" Bash"
        sudo mkdir -p /var/www/miweb
        ```
        - ```-p``` crea carpetas intermedias si no existen.
        - ```/var/www/``` es el lugar típico donde se alojan los sitios web.

    este comando nos creara una carpeta en la ruta que le indicamos

2. Es hora de crear nuestra super pagina 🔨
    `bash title=" Bash"
    echo "<h1>Hola Bienvenidos a I am Devops </h1>" | sudo tee /var/www/miweb/index.html
   `
    Esto nos creara un archivo index.html con un mensaje.
    Puedes editarlo después con un editor como nano, vim o Visual Studio Code.
    en caso de que estes en un servidor de linux o uno de sus derivados es mas factible usar nano o vim

3. Configuración de nuestro sitio ⚙️

    Nginx usa un archivo de configuración que nos permite saber cómo manejar los archivos
    ya que podemos tener alojado mas de una _web estatica_ dentro de nuestro servidor para crear nuestro achivo de confiración,

         ``` bash title=" Bash"
         sudo nano /etc/nginx/sites-available/miweb
         ```
         ``` bash title=" site-avalible"
         server {
             listen 80;                       # Escucha en el puerto 80 (HTTP)
             server_name localhost;           # Nombre del servidor (puede ser dominio o IP)

             root /var/www/miweb;             # Ruta al contenido del sitio
             index index.html;                # Archivo que se abre por defecto

             location / {
                 try_files $uri $uri/ =404;   # Busca el archivo, si no existe, da error 404
             }
         }
         ```

4. Habilitando nuestro sitio 🔓

    para poder habilitar nuestro sitio es necesrio vincular nueso `site-available/` a nuestro `site-enabled`
    para realizar ejecutaremos el siguiente comando para que se vincule

    la ruta que debemos buscar si queremos encontrar estos archivos puede `/etc/nginx/sites-available/miweb` que es donde
    tendras a disponibles todos los archivos de nginx.

    - **sites-available** : es el lugar donde estan configurados todos los sitios que se quieren habilitar.
    - **sites-enabled** : es donde le damos luz verde para poder salir.

    en primer lugar iremos a `sites-available` y crearemos un archivo con el nombre de nuesto site

       ```bash title="Bash"
        vim /etc/nginx/sites-available/miweb
        ```

    de esta forma crearemos un archivo de configuración para nuestra pagina en nuestro servidor de ubuntu
    este caso es para un servidor en local, en un futuro aprenderemos como hacer para que lo hagas en produción

        ```html title="html"
            listen 80;
            listen [::]:80;
            root /var/www/miweb;
            server_name localhost;
            
            index index.html index.html;

            location / {
                try_files $uri $uri/ =404;
            }
        }
        ```

    una vez ya creado nuestro archivo estatico y nuestar configuracón, crearemos un simbolo de nuestro archivo en la
    carpeta `sites-enabled`

        ```bash title="Bash"
        sudo ln -s /etc/nginx/sites-available/miweb /etc/nginx/sites-enabled/
        ```

5. validación de la configuracón 🥳
   para este corrierndo corriendo el comando de test que trae nginx

        ```bash title="Bash"
        sudo nginx -t
        ```
    si todo esta corercto te saldra un mensaje parecido al siguiente

        <img src="/img/blog/nginx/nginx_config.png" alt="contenedor" width="600" />

## Los errores 😅

    Claramente todos cometemos errores y no estamos excentos de ello, por eso dejo este espacio
    ya que cometi algunos errores, donde me ha tocado inciar de 0.

    Para eliminar totalmente nginx usamos lo siguiente
    ```bash title="Bash"
    sudo apt remove --purge nginx nginx-common -y ---   # Eliminamos totalmente nginx
    sudo apt autoremove -y
    sudo rm -rf /etc/nginx /var/www/miweb               # Eliminamos los archivos creados
    ```
    de aqui solo queda volver a instalar *Ngnx* y volver a inciar nuestra configuración de cero.

## Novemos en la 2 parte de este blog 🧐
