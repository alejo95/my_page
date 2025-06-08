---
slug: liquibase
sidebar_position: 3
title: Database DevOps con Liquibase 
tags: ["liquibase", "database","devops","databasedevops"]
authors: alejandro-ramirez
date: 2025-06-06
---

<!-- truncate -->

Hola, amigos 😃 DevOps. Hoy hablaremos sobre **Database DevOps**.

Como bien sabemos, DevOps ha sido clave en el desarrollo de aplicaciones, especialmente al facilitar los procesos de entrega
continua e integrar a los equipos de desarrollo y operaciones en flujos de trabajo ágiles y optimizados.

Sin embargo, muchas veces durante el desarrollo de una aplicación omitimos la importancia de las bases de datos. Nos enfocamos en
escribir código y en contar con herramientas que permitan hacer rollback de nuestro codigo de forma rápida en caso de algun error.
Pero hacer rollback en una base de datos puede ser mucho más delicado y perjudicial si no se maneja correctamente.

Por eso, dentro de DevOps se han implementado herramientas y prácticas que nos permiten gestionar los cambios en bases de datos 📈
de manera segura y eficiente. En este blog veremos cómo usar **Liquibase** y cómo puede ayudarnos a mejorar nuestro flujo de
trabajo y de esta forma manter nuestra base datos de una forma consistente.

    <img src="/img/blog/devops/databasedevops.png" alt="contenedor" width="600" />

## ¿Ques Database DevOps? 👨‍💻

    Es traer las practivas y principios implementados en el mundo del **DevOps** buscando garantizar que el código de las bases de
    datos se incluya en el mismo proceso que el código de desarrollo. Con esto buscamos solucionar el cuello de botella que se 
    puede presentar al momento de generar los cambios en el código de la base de datos ya que en muchos de los casos estos cambios tienen que ser validados por un **DBA**(data base adaministrator) y facilitandole el trabajo ya que ellos se encargaran de 
    enfocarse en temas respecto ala base datos.

## ¿Porque surge esta problematica? 😧

    Esta problematica se da debido a que muchas veces los programadores realizan actualizaciones en el código fuente de las
    aplicaciones que algunas ocaciones implementa cambios en el código de la base de datos, estos cambios tenemos que llevalos 
    acabo haciendo uso de SQL.

    para entender esto de una forma mas facil dejare un diagrama que muestra el flujo manual que se suele llevar por un equipo
    convencional de DBA generando pausa entre cada paso (generando un cuello de botella).
    
    <img src="/img/blog/devops/databasedevops.png" alt="contenedor" width="600" />

    debido a que estos procesos funcionana de una forma manual, deben llevarse a acabo las reviciones del codigo de base datos
    suele ser lo ultimo en realizarse suele generar un retraso en el lanzamiento. Esto genera un problema, pues genera un retraso
    generando problemas pues la validación y revisión no son eficientes. Todo proceso de cambio en la base de datos es simplemente
    un obstaculo.

## Una solución entre muchas 🔧

    En este caso como hemos hablado desde un princio aqui es donde entra nuestra solucion **Liquidbase** como una herramienta echa
    para quitar esas paradas inecesarias, donde el **DBA** debe revisar los cambios hasta la fase final, sin la necesidad de hacer
    las revisiones en etapas tempranas del proceso y asi empaquetar todo el codigo.

    <img src="/img/blog/devops/databasedevops.png" alt="contenedor" width="600" />

    Una solución DevOps de bases de datos como [Liquibase](https://www.liquibase.com/how-liquibase-works).  permite a los equipos 
    automatizar y gestionar la gestión de cambios para optimizar este cuello de botella y acelerar los procesos de las 
    aplicaciones. Esto es lo que hace que esta solución sea tan valiosa.

    **Liquibase** Nos permite gestionar estas actualizaciónes de una forma facil y que igual forma nos permite realizar un rollback
    de una forma facil y rapida, ayudandonos a mantener la consistencia en la base datos, ademas nos permite llevar un controlo de
    versiones, la cual realizar de una forma inicial manualmente y en el futuro tambien nos permite autimatizar este proceso.

## Laboratorio Liquibase 🧪

    Hoy realizare la implemntación de liquibase, si quieres implemntarlo dejare los paso para que lo sigas y tambien puedas
    implementarlo en tu maquina, si quieres implementarlo a un **CI/CD** debemos realizar otros paso, en esta primer guia,
    encontras la implementación de liquibase donde el objetivo es aprender como liquibase gestiona cambios en las bases de datos de
    forma controlada usando archivos de tipo chagelog( YAML, XML, JSON o SQL). **Vamos! 🥳**

### ⚙️ Requisitos previos

    antes de comenzar debemos tener los siguiente recursos instalados en nuestro equipo 💻 en este caso realizamos la configuración
    en macOs, dejare una referencia para que instales en Linux.
    1. **Java JDK** 11 o Superior
    2. **Liquibase(CLI)** Herramienta a usar
    3. **Docker**: lo usaremos para levantar nuestra base de datos de prueba
    4. **Editor de codigo**: En mi caso usare VS Code

#### Instalar Homebrew (si no lo tienes)

    Si no tienes Homebrew, instala con:

    ```bash title="Bash"
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

#### JAVA JDK

    Verificamos si tenemos intalado java 

    ```bash title="Bash"
    java -version
    ```

    En caso de que lo tengas instalado continua al siguiente paso de instalación de liquibase

#### Instalación

    Para instalarlo tendremos que usar el siguiente comando en caso de usar hombrew

    ```bash title="Bash"
    brew install openjdk@17
    ```

#### Añade a tu PATH (varia segun la versión estalada)

    ```bash title="Bash"
    sudo ln -sfn $(brew --prefix openjdk@17)/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-17.jdk
    echo 'export PATH="/usr/local/opt/openjdk@17/bin:$PATH"' >> ~/.zshrc
    source ~/.zshrc
    ```

#### Volvemos a repetir la verficación del JDK

    Verificamos si tenemos instalado Java.

    ```bash title="Bash"
    java -version
    ```
    Si está instalado, verás una salida similar a la siguiente imagen:

    <img src="/img/blog/devops/terminal_susses_jdk.png" alt="Terminal mostrando la versión de Java instalada, texto visible: openjdk version 17.0.2 2022-01-18, ambiente de desarrollo en macOS, tono informativo y neutral" width="600" />

#### Instalemos el CLI de liquibase

    La forma mas facil de inplementarlo es unsado brew en el caso de mac

    ```bash title="Bash"
    brew install liquibase
    ```
    verifica la instalación 

    ```bash title="Bash"
    liquibase --version
    ```
    una vez instalado si lo realizaste des de tu terminal en mac si puebas el comando de version si sale algo
    como la siguiente imagen todo estara correctamente y podremos seguir sin problema 😃.

        <img src="/img/blog/devops/liquibase_install.png" alt="Terminal mostrando la versión de liquibase instalada, texto 
        visible: openjdk version 17.0.2 2022-01-18, ambiente de desarrollo en macOS, tono informativo y neutral" width="600" />

#### Instalar Docker (opcional pero recomendado)

    Para crear bases de datos de prueba sin instalar nada más en tu Mac Ve a https://docs.docker.com/desktop/mac/install/
    Descarga e instala Docker Desktop para Mac.

    Abre Docker Desktop y asegúrate que esté corriendo.

    Verifica desde Terminal:

    ```bash title="Bash"
    docker --version
    docker compose version
    ```

    <img src="/img/blog/devops/dockerinstall.png" alt="Terminal mostrando la versión de docker instalada, texto 
    visible: docker version 17.0.2 2022-01-18, ambiente de desarrollo en macOS, tono informativo y neutral" width="600" />

Si todo sale bien hasta este punto ya deberiamos trener instalados todo lo necesario para para poder iniciar hacer nuestro 
laboratio 🥳.
