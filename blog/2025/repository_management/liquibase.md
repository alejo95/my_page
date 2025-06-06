---
slug: liquibase
sidebar_position: 3
title: Database DevOps con Liquibase 
tags: ["liquibase", "database","devops"]
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

### ¿Porque surge esta problematica? 😧

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

### Una solución entre muchas 🔧

    En este caso como hemos hablado desde un princio aqui es donde entra nuestra solucion **Liquidbase** como una herramienta echa
    para quitar esas paradas inecesarias, donde el **DBA** debe revisar los cambios hasta la fase final, sin la necesidad de hacer
    las revisiones en etapas tempranas del proceso y asi empaquetar todo el codigo.

    <img src="/img/blog/devops/databasedevops.png" alt="contenedor" width="600" />

    Una solución DevOps de bases de datos como [Liquibase](https://www.liquibase.com/how-liquibase-works).  permite a los equipos 
    automatizar y gestionar la gestión de cambios para optimizar este cuello de botella y acelerar los procesos de las aplicaciones. Esto es lo que hace que esta solución sea tan valiosa.

### Laboratorio Liquibase 🧪
    
