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

## ¿Ques Database DevOps?

Es traer las practivas y principios implementados en el mundo del **DevOps** buscando garantizar que el código de las bases de
datos se incluya en el mismo proceso que el código de desarrollo. Con esto buscamos solucionar el cuello de botella que se puede
presentar al momento de generar los cambios en el código de la base de datos ya que en muchos de los casos estos cambios tienen
que ser validados por un **DBA**(data base adaministrator) y facilitandole el trabajo ya que ellos se encargaran de otros
problemas.

### ¿Porque surge esta problematica?

Esta problematica se da debido a que muchas veces los programadores realizan actualizaciones en el código fuente de las
aplicaciones que algunas ocaciones implementa cambios en el código de la base de datos, muchas veces estos cambios tenemos
que llevalos acabo haciendo uso de SQL.

