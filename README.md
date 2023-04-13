# challenge-one-logica
Sprint 01: Construye un encriptador de texto con Javascript

# Historias de usuario en Trello

[![CircleCI](https://www.alura.com.br/assets/img/challenges/icons/icon-trello.1675892071.svg?style=svg) Trello](https://trello.com/b/QKaNAzpI/encriptador-de-texto-alura-challenges-one) 

# Aplicativo desplegado en Github Pages

[![CircleCI](https://github.com/favicon.ico) Github Page](https://vashigo.github.io/challenge-one-logica/) 


# 📝 Descripción

Este proyecto es una aplicación que utiliza HTML, CSS, JavaScript para encriptar y desencriptar texto. La encriptación se realiza mediante la sustitución de ciertas letras por otras según un conjunto específico de reglas. La aplicación solo acepta letras minúsculas y no se permiten acentos ni caracteres especiales.

La página web cuenta con campos para que el usuario pueda ingresar el texto que desea encriptar o desencriptar y seleccionar la opción correspondiente. El resultado de la operación se muestra en la pantalla y existe la opción de copiar el texto encriptado o desencriptado al portapapeles mediante un botón de "copiar".

# 📒 Diccionarios
## 🔒 Diccionario de encriptacion
| 🔑 Llave | ✏️ Reemplazo |
|-----------|-----------|
| e | enter |
| i | imes |
| a | ai |
| o | ober |
| u | ufat |

---

## 🔓 Diccionario de desencriptacion
| 🔑 Llave | ✏️ Reemplazo |
|-----------|-----------|
| enter | e |
| imes | i |
| ai | a |
| ober | o |
| ufat | u |

# 📑 Requisitos

- ✅ Debe funcionar solo con letras minúsculas
- ✅ No deben ser utilizados letras con acentos ni caracteres especiales
- ✅ Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original. (Ejemplos: "gato" => "gaitober" | "gaitober" => "gato")
- ✅ La página debe tener campos para
inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
- ✅ El resultado debe ser mostrado en la pantalla.
- ✅ Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.
