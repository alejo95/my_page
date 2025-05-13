---
slug: entendiendo_nginx
sidebar_position: 1
title: Nginx
tags: ["nginx","redes"]
authors: alejandro-ramirez
date: 2025-05-12
---


<!-- truncate -->

Durante algún tiempo me he topado con el problema de entender qué es Nginx y cómo funciona, debido a que es un
poco confuso, ya que muchas personas hablan de que es un servidor web, un balanceador de cargas, también un Proxy
inverso y más, claro es porque tiene todas estas funcionalidades, así que en este blog exploraremos juntos cómo
funciona y sus diferentes usos.

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
    sudo apt update           -->  actualizat linux
    sudo apt install nginx    -->  instalar nginx
    ```
una vez instalado podremos probar si nginx esta corriendo adecuadamente usando

    ``` bash title=" Bash"
    sudo systemctl status nginx
    ```

lo cual mostra algo asi si todo sale correctamente 🥳

    <img src="/img/blog/nginx/nginx_status.png" alt="contenedor" width="800" />

de esta forma podremos saber si nuestro servido nginx fue instalado de una forma correcta y esta funcionando
desde este punto podremos las diferente carracteristicas de nginx
