---
slug: liquibase
sidebar_position: 3
title: Database DevOps con Liquibase 
tags: ["liquibase", "database","devops","databasedevops"]
authors: alejandro-ramirez
date: 2025-06-10
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
    1. **Docker**: lo usaremos para levantar nuestra base de datos de prueba y nuestro liquibase
    2. **Editor de codigo**: En mi caso usare VS Code
    3. **Java JDK** 11 o Superior  (opcional)
    4. **Liquibase(CLI)** Herramienta a usar (opcional)

   
    ### Instalar Docker (Necesario)

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
        

    ### Instalar Homebrew (si no lo tienes)

        Si no tienes Homebrew, instala con:

        ```bash title="Bash"
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
        ```

    ### JAVA JDK (opcional)

        Verificamos si tenemos intalado java 

        ```bash title="Bash"
        java -version
        ```

        En caso de que lo tengas instalado continua al siguiente paso de instalación de liquibase

    -  Instalación

        Para instalarlo tendremos que usar el siguiente comando en caso de usar hombrew

        ```bash title="Bash"
        brew install openjdk@17
        ```

    -  Añade a tu PATH (varia segun la versión estalada)

        ```bash title="Bash"
        sudo ln -sfn $(brew --prefix openjdk@17)/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-17.jdk
        echo 'export PATH="/usr/local/opt/openjdk@17/bin:$PATH"' >> ~/.zshrc
        source ~/.zshrc
        ```

    -  Volvemos a repetir la verficación del JDK

        Verificamos si tenemos instalado Java.

        ```bash title="Bash"
        java -version
        ```
        Si está instalado, verás una salida similar a la siguiente imagen:

        <img src="/img/blog/devops/terminal_susses_jdk.png" alt="Terminal mostrando la versión de Java instalada, texto visible: openjdk version 17.0.2 2022-01-18, ambiente de desarrollo en macOS, tono informativo y neutral" width="600" />

    ### Instalemos el CLI de liquibase (Opcional)

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
    
    ### Instalar cliente PostgreSQL (opcional)
    
    Para interactuar con la base de datos de uba forna más facil puede usar al igual que yo el cliente des Postgres:

         ```bash
        brew install postgresql
        Luego 
         ```
    
    prueba conectarte una vez este levantes el **docker-compose**:

        ```bash
        psql -h localhost -U liquibase -d liquibase_demo
        Contraseña: liquibase
        ```

        | Opción              | Significado                                          |
        | ------------------- | ---------------------------------------------------- |
        | `psql`              | Cliente de línea de comandos de PostgreSQL           |
        | `-h localhost`      | Host de la base de datos (en este caso, `localhost`) |
        | `-U liquibase`      | Usuario con el que se conecta (`liquibase`)          |
        | `-d liquibase_demo` | Base de datos a la que se conecta (`liquibase_demo`) |

---

### Iniciemos con nuestro laboratorio 😃

    Genial!!, Si todo te salio bien, en este punto ya deberiamos trener instalados todo lo necesario para poder iniciar 
    a colocar las primeralas lineas de codigo para implementart nuestro laboratio 🥳.

    para realizar nuestra prueba inicial implementaremos la siguiente estructura de carpetas

    ### 🗂️ estructura del proyecto
        
        esta estructrua es una estructura basica solamente realizada para la prueba, para realizar un proyecto a un nivel
        mas producción deberas realizar algunos cambios que tal vez dejare en otro apartado ya que lo que buscamos en este
        laboratorio es experimentar y entender como funciona **liquibase**.

        ```bash title="Tree"
        liquibase-lab/
        ├── changelogs/
        │   ├── db.changelog-master.yaml
        ├── docker-compose.yml
        ├── liquibase.properties
        ├── README.md
        └── .gitignore (opcional)
        ```

        #### 📝 Descripción de Archivos y Carpetas

        | Archivo/Carpeta            | Descripción                                                               |
        | -------------------------- | ------------------------------------------------------------------------- |
        | `changelogs/`              | Carpeta que contiene todos los archivos de cambios (changelogs).          |
        | `db.changelog-master.yaml` | Changelog principal que actúa como punto de entrada e incluye otros.      |
        | `001-*.yaml`, `002-*.yaml` | Archivos con cambios individuales, ordenados por prefijo numérico.        |
        | `docker-compose.yml`       | Archivo para levantar la base de datos PostgreSQL con Docker.             |
        | `liquibase.properties`     | Archivo de configuración de Liquibase: conexión, changelog, credenciales. |
        | `README.md`                | Documentación y notas del laboratorio.                                    |
        | `.gitignore`               | Opcional. Ignora archivos temporales, logs, etc., si usas Git.            |

        #### 🪄 Crea rapidamente la estructura desde cero

        con el siguiente comando podras crear toda la estructra sin ningun problema desde tu terminal, estos tambien sirven en
        linux

        ```bash title="Bash"
        > $ mkdir liquibase-lab
        > $ cd liquibase-lab
        > $ mkdir changelogs
        > $ touch docker-compose.yml liquibase.properties changelogs/db.changelog-master.yaml README.md
        ```
    
        una vez ya tengas la estructura creada puedes abrir tu VS Code y utilizarlo para seguir con el siguiente paso

        <img src="/img/blog/devops/liquibasevscode.png" width="600" />

    ## 🏗️ Cremos nuestro Docker-compose

    ahora escribiremos el siguiente codigo que lleva la configuración de nuestro compose, junto con los diferentes
    volumenes que nos ayudaran a mantener que persista nuestra data

    ```bash title="Docker-Compose"
        services:
        db:  # Servicio de base de datos PostgreSQL
            image: postgres:14  # Imagen oficial de PostgreSQL, versión 14
            container_name: liquibase_db  # Nombre del contenedor para referencia fácil
            environment:  # Variables de entorno para crear la base de datos inicial
            POSTGRES_USER: liquibase      # Usuario con permisos
            POSTGRES_PASSWORD: liquibase  # Contraseña del usuario
            POSTGRES_DB: liquibase_demo   # Nombre de la base de datos a crear
            ports:
            - "5432:5432"  # Expone el puerto de PostgreSQL al host local
            networks:
            - liquibase-net  # Conecta este servicio a una red personalizada
            healthcheck:  # Verifica que PostgreSQL esté listo antes de continuar
            test: ["CMD", "pg_isready", "-U", "liquibase"]
            interval: 5s
            timeout: 5s
            retries: 5

        liquibase:  # Servicio para ejecutar comandos de Liquibase CLI
            image: liquibase/liquibase:latest  # Imagen oficial de Liquibase
            container_name: liquibase_cli  # Nombre del contenedor de Liquibase
            depends_on:
            db:
                condition: service_healthy  # Espera a que la base de datos esté lista
            volumes:  # Mapea archivos locales al contenedor
            - ./changelogs:/liquibase/changelogs  # Cambios en la BD
            - ./liquibase.properties:/liquibase/liquibase.properties  # Configuración
            working_dir: /liquibase  # Carpeta por defecto donde ejecuta comandos
            entrypoint: ["tail", "-f", "/dev/null"]  # Mantiene el contenedor en ejecución para uso interactivo
            networks:
            - liquibase-net  # Se conecta a la misma red que la BD

        networks:
        liquibase-net:  # Red personalizada para que los servicios se comuniquen por nombre

    ```
    ## Creemos nuestro liquibase.properties

    Si seguiste la guia, hasta este punto en los archivos necesarios que creamos encontraras el ***liquibase.properties***
    el cual es el archivo que contendra la configuración de nuestro liquibase, es el encargado de decirle a liquibase **como
    conectarse ala base de datos** y donde encontrar los archivos de cambios(changelogs).


        ```bash title="liquibase.properties"
        # liquibase.properties
        changeLogFile: changelogs/db.changelog-master.yaml
        url: jdbc:postgresql://db:5432/liquibase_demo
        username: liquibase
        password: liquibase
        driver: org.postgresql.Driver
        logLevel: info
        ```

    | OJO: en el url, el host es db, el nombre del servicio del contenedor.
    
    | Propiedad       | Descripción                                                                                 | Ejemplo                                    |
    | --------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------ |
    | `changeLogFile` | Ruta al archivo principal de cambios de base de datos (changelog).                          | `changelogs/db.changelog.yaml`             |
    | `url`           | URL de conexión JDBC que indica el tipo de base de datos, host, puerto y nombre de la base. | `jdbc:postgresql://db:5432/liquibase_demo` |
    | `username`      | Usuario con permisos para ejecutar cambios en la base de datos.                             | `liquibase`                                |
    | `password`      | Contraseña del usuario de la base de datos.                                                 | `liquibase`                                |
    | `driver`        | Clase del driver JDBC correspondiente al motor de base de datos.                            | `org.postgresql.Driver`                    |


    ## 🧠 Vamos a crear nuestro changelog

    ¿Qué hace db.changelog-master.yaml?Es un archivo maestro que organiza los cambios en la base de datos. Su función principal es referenciar otros archivos de 
    cambios (por orden y modularidad), o contener directamente las instrucciones (changeSets) que Liquibase aplicará.

    En este caso tenemos dos formas para poder crear nuestro **changelog** en este ejemplos dejare las referencias a las dos formas, para que entiendas que podemos
    hacer.

    - opción 1
        En este caso se implementa un solo archivo maestro que contendra todos los **changeSets**

        ```bash title="databaseChangeLog"
        databaseChangeLog:
        - changeSet:
            id: 001
            author: alejo
            changes:
                - createTable:
                    tableName: users
                    columns:
                    - column:
                        name: id
                        type: UUID
                        constraints:
                            primaryKey: true
                    - column:
                        name: name
                        type: VARCHAR(100)
        ```
        
        de esta forma tendras que tener el proyecto si utilizas esta opción.

        <img src="/img/blog/devops/changelogmaster.png" width="600" />
        | ⚠️ Esto es útil en proyectos pequeños o cuando prefieres tener todo en un solo archivo lo cual puede generar al gunos problemas a largo plazo
    
    - opción 2
        En este caso se implementa un archivo que contendra todos los modolus de (changeSets),en el que tendremos las rutas de los **changeSets**

        ```bash title="databaseChangeLog-master"
        # changelogs/db.changelog-master.yaml
        databaseChangeLog:
        - include:
            file: changelogs/001-init-schema.yaml
        ```
        | Cada changeSet es único por id + author. No repitas estos valores.


        ```bash title="changelogs/001-init-schema.yaml"
            databaseChangeLog:
            - changeSet:
                id: 001
                author: alejo
                changes:
                    - createTable:
                        tableName: users
                        columns:
                        - column:
                            name: id
                            type: UUID
                            constraints:
                                primaryKey: true
                        - column:
                            name: name
                            type: VARCHAR(100)
                        - column:
                            name: email
                            type: VARCHAR(150)
        ```

       <img src="/img/blog/devops/liquivasetreeprod.png" width="600" />

        ✅ Este modelo de carpetas te permitira escalar de una forma mas facil y poder versiónar todos tus cambios de una forma eficiente, en caso de que quieras
        realizar algun

### Vamos a correr nuestro poyecto

    Perfecto si llegaste hasta aqui ya podemos correr los comandos de nuestro 🐳 **docker-compose** para correr el proyecto

    ✅ 1. Levantar los servicios en segundo plano
    Esto crea y arranca los contenedores:

    ```bash title="Bash"
    docker compose up -d
    ```
    | 🔍 Esto arrancará el contenedor de PostgreSQL y lo dejará corriendo en segundo plano ya que usamos **-d**.

    ✅ 2. Verificar que la base de datos está lista
    Liquibase depende de que la base de datos esté lista. Asegúrate de que el servicio db esté healthy:

    ```bash title="Bash"
    docker compose ps
    ```
    veras algo como esto
    
    <img src="/img/blog/devops/liquivasetreeprod.png" width="600" />

    ### 🧠 ¿Cómo sabe Liquibase qué ya corrió?

    Liquibase registra los changeSets ejecutados en una tabla llamada DATABASECHANGELOG. Así evita repetir cambios y permite auditar qué se aplicó, cuándo y por quién.

    <img src="/img/blog/devops/liquibaserun.png" width="600" />

    En este punto ya tenemos nuestros servicios corriendo, y con ya podremos ejectar

    ```bash title="Bash"
    docker exec -it liquibase_cli liquibase update
    ```
    Si todo te sale bien, deberas ver algo como se ve en la imagen.

    <img src="/img/blog/devops/primerejecucion.png" width="600" />
    | Esto ejecutará todos los changeSets del archivo db.changelog-master.yaml y aplicará los cambios en la base de datos PostgreSQL.

    ### 🧠 ¿Por qué se crea automáticamente?
    La base de datos se crea automáticamente porque se lo estás indicando al contenedor de PostgreSQL con POSTGRES_DB al inicio.

    <img src="/img/blog/devops/conectiondb.png" width="600" />

    y en nuestra base de datos postgres podremos ver lo siguiente

    <img src="/img/blog/devops/basededatos.png" width="600" />

    Cuando corremos este comando **liquibase** se crearan dos tablas `databasechangelog` y `databasechangeloglock`
    
    | Tabla                             | ¿Para qué sirve?                          |
    |-----------------------------------|-------------------------------------------|
    | `databasechangelog`               | Historial de cambios ya aplicados         |
    | `databasechangeloglock`           | Evita conflictos por ejecución simultánea |

    genial hasta este punto ya tenemos nuestro proyecto creado y corriendo, ahora realizaremos una actualización a la tabla usuario que creamos
    domde crearemos un `changeSet`

    - Creemos otro archivo dentro de nuestra carpeta `changelogs` con el nombre `002-create-users-table.yaml`

    ```bash title="Bash"
    databaseChangeLog:
    - changeSet:
        id: 002
        author: alejo
        changes:
            - addColumn:
                tableName: users
                columns:
                - column:
                    name: birthdate
                    type: DATE
    ```
    |Cada changeSet es único por id + author. No repitas estos valores.

    en este caso aremos un cambio ala tabla usuarios donde agregaremos la columna de **birthdate**

    Ya creado nuestro archivo ejecutaremos nuevamente nuestro comando, que generara los cambios en la base de datos.

    ```bash title="Bash"
    docker exec -it liquibase_cli liquibase update
    ```
    al ejecturar debera salir lo que se ve en la siguiente imagen

    <img src="/img/blog/devops/runliquibasechange.png" width="600" />

    Para comprobar el cambio te puedes conectar ala base de datos y validar que se crearon los campos como los finimos

### Tabla comandos 🎮

    Aqui encontras una serie de comandos que puedes ejecutar para que sigas probando como funciona liquibase y todas sus cuidades, te invito a
    probar y testear todo lo que quieras.

    | Comando                                           | ¿Para qué sirve?                                                                 |
    |--------------------------------------------------|----------------------------------------------------------------------------------|
    | `docker compose run liquibase update`            | Aplica todos los `changeSet` pendientes definidos en el changelog maestro.      |
    | `docker compose run liquibase status`            | Muestra qué cambios (changeSets) aún no se han aplicado a la base de datos.     |
    | `docker compose run liquibase history`           | Lista todos los `changeSets` ya aplicados con detalles (fecha, autor, id).      |
    | `docker compose run liquibase rollbackCount 1`   | Revierte el último cambio aplicado (puedes cambiar `1` por otro número).        |
    | `docker compose run liquibase rollbackToDate 2024-01-01` | Revierte todos los cambios hechos después de una fecha específica.     |
    | `docker compose run liquibase validate`          | Valida el archivo changelog, revisa errores de sintaxis o duplicados.           |
    | `docker compose run liquibase clearCheckSums`    | Limpia los checksums para forzar revalidación de cambios. Útil si editaste sets.|
    | `docker compose run liquibase changelogSync`     | Marca todos los cambios como aplicados sin ejecutarlos (¡útil en producción!).   |

## Errores

    Como siempre cometemos errores, durante la primera configuración implente mal la conexción a la base de datos
    debido a que estaba apuntando a local host, el cual hace que apunte dentro de su propio contenedor por eso no lo encontraba 
    entonces esto se lo corregui teniendo enconta el parametro url.

    ```bash title="Error"
    # liquibase.properties
    Connection could not be created to jdbc:postgresql://localhost:5432/liquibase_demo
    ```
     | Estás diciendo que se conecte a localhost (jdbc:postgresql://localhost:5432)
