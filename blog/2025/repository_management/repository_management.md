---
slug: manejo-del-repositorio
title: Manejo del repositorio
tags: ["git","workflow","buenas-practicas"]
authors: alejandro-ramirez
date: 2025-04-27
---


<!-- truncate -->

Hola y bienvenidos a este blog, el cual está orientado hacia el entendimiento de como podemos manejar nuestros
repositorios de una forma que nos permita entender que es lo que estamos subiendo en nuestros commits.

## 1. Manejo de commits

Al momento que generamos un commit es muy normal agregar el comentario sin una referencia las cuales nos
indiquen que estamos realizando en nuestro commit, para esto es recomendable usar banderas que nos permitan
entender que hicimos en nuestros commits para esto hacemos uso de las siguientes **Acciones** o **banderas**:

- **[Acción]**: identifica el tipo de commit
  - `feature` -  a new feature is introduced with the changes
  - `refactor` – refactored code that neither fixes a bug nor adds a feature  
  - `docs` – updates to documentation such as a the README or other markdown files
  - `style` – changes that do not affect the meaning of the code, likely related to code formatting such as white-space, missing semi-colons, and so on.
  - `test` – including new or correcting previous tests
  - `perf` – performance improvements
  - `ci` – continuous integration related
  - `build` – changes that affect the build system or external dependencies
  - `revert` – reverts a previous commit

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
