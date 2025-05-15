---
slug: manejo-del-repositorio
sidebar_position: 0
title: Manejo del repositorio
tags: ["git","workflow","buenas-practicas"]
authors: alejandro-ramirez
date: 2025-04-27
---


<!-- truncate -->

Hola y bienvenidos a este blog, el cual está orientado a entender como podemos manejar nuestros flujo
de trabajo en git, haciendolo un poco mas claro y facil de entender en caso de tener algun problema
en **producción** 💣 que es lo que no queremos que pase.

## 1. Manejo de commits

Al momento que generamos un commit es muy normal agregar el comentario sin una referencia las cuales nos
indiquen que estamos realizando en nuestro commit, para esto es recomendable usar banderas que nos permitan
entender que hicimos en nuestros commits para esto hacemos uso de las siguientes **Acciones** o **banderas**:

- **[Acción]**: identifica el tipo de commit
  - `feature` -  Se introduce una nueva característica con los cambios
  - `refactor` – Código refactorizado que no corrige un error ni agrega una característica  
  - `docs` – Actualizaciones de la documentación, como el README u otros archivos de rebajas
  - `style` – Cambios que no afectan el significado del código, probablemente relacionados con el formato del código, como espacios en blanco, punto y coma faltantes, etc.
  - `test` – Incluyendo pruebas nuevas o corrigiendo pruebas anteriores
  - `perf` – Mejoras de rendimiento
  - `ci` – Relacionados con la integración continua
  - `build` – Cambios que afectan al sistema de compilación o dependencias externas
  - `revert` – revierte una confirmación anterior

- **Cuerpo**: Entre 50 y 150 caracteres resaltando **¿qué?** y **¿por qué?**.  
- **Idioma**: Inglés.

> **Ejemplo**  
> `[Added] validation so that the accounting information in the vendor once audited cannot be modified`  
> *(Comienza con mayúscula y sin punto final.)*

---

## 1.2. Nomenclatura de ramas (branch)

Con la nomenclatura la idea es siempre buscar identificar las ramas donde estamos trabajando y así llevar
un flujo de versiones saludable, que sea fácil de entender, en este ejemplo usaremos una nomenclatura basada
en el flujo de trabajo de Git Flow.

Siguiendo Git Flow te encontrarás con las siguientes ramas:

- **master**: versiones estables en producción (`vX.Y.Z`).  
- **develop**: integración de nuevas features.  
- **feature/***: desarrollo de características (desde `develop`).  
- **release/***: preparación de la próxima versión (desde `develop`).  
- **hotfix/***: correcciones urgentes (desde `master`).

![Git Flow Diagram](/img/blog/Deploymentflow.png)

---

### Hoja de trucos (Comandos)

Esta hoja de trucos tiene los **comandos** mas utilizados dentro del flujo de trabajo 🧑🏼‍💻, dentro de mi
consideración son los que mas usaras durante tu carrera como programor o algunas de sus ramas.

aqui les dejo 👌

---

| Operación                                    | Comando                                                |
|----------------------------------------------|--------------------------------------------------------|
| Clonar repositorio                           | `git clone ssh://usuario@dominio.com/repo.git`         |
| Crear repo local                             | `git init`                                             |
| Estado de archivos                           | `git status`                                           |
| Ver diferencias                              | `git diff`                                             |
| Añadir todos los cambios                     | `git add .`                                            |
| Commit con mensaje                           | `git commit -m "Mensaje descriptivo"`                  |
| Modificar último commit                      | `git commit --amend`                                   |

---

## Ramas y etiquetas

| Operación                        | Comando                        |
|----------------------------------|--------------------------------|
| Listar ramas                     | `git branch`                   |
| Crear nueva rama                 | `git branch <nombre>`          |
| Cambiar de rama                  | `git checkout <nombre>`        |
| Etiquetar versión                | `git tag v1.2.3`               |

---

## Actualizar y publicar

| Operación                      | Comando                              |
|--------------------------------|--------------------------------------|
| Descargar cambios sin merge    | `git fetch`                          |
| Descargar y merge              | `git pull origin <branch>`           |
| Enviar cambios a remoto        | `git push origin <branch>`           |
| Enviar etiquetas               | `git push --tags`                    |

---

## Fusionar y rebase

| Operación                | Comando                           |
|--------------------------|-----------------------------------|
| Merge                    | `git merge <branch>`              |
| Rebase                   | `git rebase <branch>`             |
| Abortar rebase           | `git rebase --abort`              |
| Continuar rebase         | `git rebase --continue`           |

---

## Deshacer

| Operación                              | Comando                                 |
|----------------------------------------|-----------------------------------------|
| Reset total (descarta todo)            | `git reset --hard HEAD`                 |
| Descartar cambios en un archivo        | `git checkout HEAD <file>`              |
| Revertir un commit                     | `git revert <commit>`                   |
| Reset suave (preserva cambios staged)  | `git reset <commit>`                    |

---
