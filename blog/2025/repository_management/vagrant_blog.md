---
slug: vagrant
sidebar_position: 1
title: Aprendiendo iaC con Vagrant
tags: ["vagrant", "automation"]
authors: alejandro-ramirez
date: 2025-06-22
---

<!-- truncate -->

En este corto blog hablare sobre lo bueno y lo malo de Vagran como proveedor **iaC**(infraestruc como codigo)
pero antes definiremos ques **iaC**

## ¿Ques es la infraesctructra como codigo o iaC?

La ***infraestructura como codigo*** o como se conoce con sus siglas en ingles **iaC** es una practica que utiliza archivos de
configuración para autimatizar procesos que se pueden realizar de forma manual, pero esto en su practica puede traer inconvenientes
ya que estos procesos tienen a ser repetitivos 🔁.

La evolución y la necesidad de atomatizar los procesos de gestion de la infeaestructra llevo ala ceación de este paradicma y al dia
de hoy se consolido como una practica fundamneta deltro del moviento DevOps, buscando tratar la infraestructra de manera simila al
codigo, utlizando herramientas como lo es en este caso **Vagrant**.

### ¿Que es vagrant?

Vagran es una solución creada por HashiCorp, es una heramienta de codigo abierto que facilita la gestion del ciclo de vida
de maquinas virtuales, la cual nos permite definir y configurar nuestro entornos de desarollo reproducibles y configurables,
utilizando archivos de configuración para especificar desde el sistema operativo, la red, los usiarios, entre otras configuraciones.
Vagrant esta diseñado para facilitar el flujo de trabajo de desarollo y pruebas.

### ¿Lo Bueno y lo Malo?

| Lo bueno                               | Lo Malo                                   |
|----------------------------------------|-------------------------------------------|
| Muy ligero            | Las configuraciones avanzada depende del proveedor de VM.  |
| Facil de modficiar y distribuir  | No esta adapatado para esenario complejos.      |
| Facil de integran en entorno DevOps | Mas lentonto que un contenedor.              |
| Es de codigo abierto        |   Consume demaciada memoria                          |
| Distribuye imagenes limpias con configuraciones completas| Entornos limitados      |

Ya que tenemos tantas limitaciones dejare algunos de los esearios en que puede ser util vagran ya que esta solucion la podemos
implementar mas facil haciendo uso de herramientas como **docker** y **docker-compose**.

    1. Al tener entornos replicables en produción
    2. Cuando vamos a trabajar con varios sitemas operativos (Implementar laboratorios)
    3. En caso de no querer depender de la infraestrucra del host dond estas alojando tu software

### 🚀 Comandos Clave de Vagrant

|Comando|Descripción|
|---------|---------|
|vagrant init|Crea un Vagrantfile básico|
|vagrant up|Inicia la VM (+ provisionamiento)|
|vagrant ssh|Conéctate a la VM por SSH|
|vagrant halt|Apaga la VM|
|vagrant destroy|Elimina la VM (¡cuidado!)|
|vagrant provision|Re-ejecuta el provisionamiento|

## 👨‍⚕️ Laboratorio

Vamos a iniciar a crear nuestra estructura la cual es la siguiente
Esta es una estrucrura que puedes generar con vagrant para que puedas tener
mas organizado tu proyecto de vagrant

    ```bash title="Bash"
    vagrant-nginx-lab/
    ├── html
    │   └── index.html
    ├── README.md
    └── Vagrantfile
    ```

### 💻 Instalar Vagrant

Descargar desde vagrantup.com y ejecutar el .msi

### 🧪 ¿Qué contiene este laboratorio?

- `Vagrantfile`: define el entorno, el contenedor, el volumen y los puertos.
- `html/index.html`: una página simple que dice “¡Hola, soy Alejandro!” con estilo.
- Permisos adecuados (`755` para la carpeta, `644` para el archivo).
- Puerto 8080 expuesto para ver el sitio desde el navegador.

### 📝 Creemos nuestro Vagrantfile

El vagrantfile es nuestro archivo de configuración el cual levantara las infraestrucras que le solicitemos, en este caso
realizaremos un laboratorio haciendo uso de **docker** y **nginx** para levantar una pagina estatica

    ```bash title="Bash"
    Vagrant.configure("2") do |config|
    # Crear el archivo HTML antes de levantar el contenedor
    unless File.exist?("html/index.html")
        Dir.mkdir("html") unless Dir.exist?("html")
        File.write("html/index.html", "<h1>Hola, soy Alejandro</h1>\n")
        File.chmod(0755, "html")
        File.chmod(0644, "html/index.html")
    end
    config.vm.box_version = "~> 2025.06"
    config.vm.define "nginx_container" do |nginx|
            nginx.vm.provider "docker" do |d|
            d.image = "nginx:latest"
            d.name = "nginx-dev"
            d.ports = ["8080:80"] # Acceso vía localhost:8080
            d.remains_running = true
            d.volumes = ["#{Dir.pwd}/html:/usr/share/nginx/html:ro"]
            end
        end
    end
    ```

### 🌐 ¿Cómo lo pruebo?

1. Asegúrate de tener **Docker Desktop** instalado y corriendo.
2. Clona este repositorio o copia los archivos en una carpeta.
3. Ejecuta:

   ```bash title="Bash"
   vagrant up --provider=docker
   ```

4. Si quieres detener el docker puedes usar el siguiente comando

    ```bash title="Bash"
   vagrant halt
   ```

### 🔧 ¿Qué aprendí y configuré?

✅ Usé Vagrant para definir y gestionar el entorno.  
✅ utilice Docker (ideal para Macs con Apple Silicon).  
✅ Automatizé la creación de un archivo `index.html` con un diseño sencillo y bonito.  
✅ Monté ese archivo como volumen dentro de un contenedor NGINX.  
✅ Configuré correctamente los permisos de archivos para evitar errores como `403 Forbidden`.

## 😫 Mi error

Ten encuenta que para manejar vagrant en Mac con chip con arquitectura ARM necesitas crear utilizar una confurtación difetente
por esta razón tuve el siguiente erro.

    ``` bash title="Bash"  
        alejo@alejos-MacBook-Pro ubuntu-jummy64 % vagrant up
        Bringing machine 'default' up with 'virtualbox' provider...
        Command: ["startvm", "54267685-348f-4553-8915-acbcd4a560b0", "--type", "headless"]

        Stderr: VBoxManage: error: The VM session was aborted
        VBoxManage: error: Details: code NS_ERROR_FAILURE (0x80004005), component SessionMachine, interface ISession
    ```

Este erro es devido a que como comente aterior mente vagrant tiene un error de compatividad con la arquitectura ARM,
para solucionarlo solo deves  instalar **paralles** como proveedor VM.

    ``` bash title="Bash"
        vagrant plugin install vagrant-parallels
        config.vm.box = "generic/ubuntu2204-arm64"
    ```

Tambien tuve que usar una imagen que vieniera para la arquitectura **ARM**

    ``` bash title="Bash"
        config.vm.box = "generic/ubuntu2204-arm64"
    ```

### Gracias 🤩 por llegar hasta este punto

Aún quedan muchas cosas por explorar de **vagrant**, pero te agradezco por tomarte el tiempo de entrar a este blog. El código implementado
lo puedes encontrar en mí git-hub [alejo95/vagrant-nginx-lab](https://github.com/alejo95/vagrant-nginx-lab)
