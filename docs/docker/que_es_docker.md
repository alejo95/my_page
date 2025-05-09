---
sidebar_position: 2
title: ¿Que es Docker?
description: en este tutorial entenderas lo basico de docker
keywords: [docker, curso docker, contenedores, devops, historia de docker, ventajas de docker, casos de uso de docker, docker tutorial, docker desde cero, docker para principiantes, docker avanzado, docker en producción]
sidebar_label: ¿Que es Docker?
tags: [docker]
---

Es una plataforma de código abierto que permite crear, empaquetar, probar y ejecutar aplicaciones rápidamente.

Docker está desarrollada para empaquetar software en unidades estandarizadas llamadas [contendores](docs/docker/que_es_un_contenedor.md), que incluyen lo necesario para que el software se ejecute.

Usamos Docker dentro de los equipos para ayudar a los desarrolladores puedan acelerar la entrega de aplicaciones
de una forma ágil y moderna entre otros beneficios.

## 👨‍💻 Como funciona Docker

Docker funciona de forma similar a una máquina virtual, pero elimina gran parte de las cosas que no necesitamos
para ejecutar nuestro software, en este caso nos llevamos solamente las dependencias necesarias que requiere nuestros
productos para funcionar, dándonos una gran ventaja ala hora de compartirla con nuestros compañeros o desplegarla a 
producción.

<img src="/img/tutorial/docker/virtualmachinediagram.png" alt="contenedor" width="500" />

## ⚙️ Docker Engine

Es el motor que corre detrás de *Docker* es el encargado de construir las imágenes, gestionar el contendor, redes,
volúmenes, etc. este corre dos partes:

- Docker demon: corre en segundo plano.
- Docker CLI: la herramienta que usamos para interactuar con el demon.
  
## 🛠️ Cuadro de comparación

Algunas de las caracteristicas que tenemos son las siguiente:

| Característica      | Máquina Virtual (VM)                | Contenedor Docker                      |
| ------------------- | ----------------------------------- | -------------------------------------- |
| **Aislamiento**     | Fuerte (SO completo por VM)         | Moderado (comparten el núcleo del SO)  |
| **Inicio**          | Lento (minutos)                     | Rápido (segundos)                      |
| **Uso de recursos** | Alto                                | Bajo                                   |
| **Portabilidad**    | Menor                               | Alta                                   |
| **Tamaño**          | Grande (GBs)                        | Pequeño (MBs)                          |
| **Dependencias**    | Incluye SO completo                 | Solo las necesarias para la aplicación |
| **Rendimiento**     | Menor eficiencia por virtualización | Alta eficiencia por compartir kernel   |
| **Gestión**         | Más compleja                        | Simplificada con herramientas Docker   |

## 😄 ¿Porque usar Docker?

1. Nos permite crear arquitectura de micro servicios, nos permite simplificar un ambiente muy fácil.
2. Modulación al implementar una aplicación podemos realizar reparaciones modulares de tal forma
   que no afecte al producto final.
3. Creación de imagen con un control de versiones.
4. Tamaño y eficiencia contar con un sistema fácil y rápido de empaquetar.
5. Implementación rápida de nuevas versiones.
