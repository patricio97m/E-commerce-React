# Proyecto final para Coderhouse

## Descripción del proyecto
El proyecto consiste en el desarrollo de un e-commerce de tecnología, que permita a los usuarios buscar, filtrar y comprar productos de manera fácil y eficiente. La aplicación web tendrá las siguientes funcionalidades:

- Registro de usuarios y autenticación de acceso.
- Búsqueda y filtrado de productos por categoría.
- Agregar productos al carrito de compra y finalizar la compra.
- Registro de órdenes de compra generadas por los usuarios.
- Visualización de órdenes de compra y datos del usuario en un apartado "Mi cuenta".

### [Página en Github-Pages](https://patricio97m.github.io/E-commerce-React/)

### Objetivos
El objetivo del proyecto es crear una aplicación web atractiva y funcional que permita a los usuarios comprar productos de tecnología de manera fácil y segura. Además, el diseño de la aplicación web es completamente responsive, adaptándose a diferentes tamaños de pantalla y dispositivos móviles.

### Alcances
La aplicación web contará con las funcionalidades básicas de un e-commerce, como el registro de usuarios, búsqueda y filtrado de productos, carrito de compras y registro de órdenes.

### Resultados esperados
Se espera que el proyecto logre cumplir con las funcionalidades descritas, sea fácil de usar y proporcione una experiencia de compra satisfactoria a los usuarios.

## Tecnologías utilizadas
- Editor de código fuente: VS Code
- Librería CSS: Bootstrap
- Librería Javascript: React Js 18.2.0
- Base de datos: Firebase - Firestore

## Tabla de componentes principales

| Componente    | Descripción                                                                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| ItemList      | Se encarga de desplegar los artículos que son traidos de la base de datos en distintas *cards*, mostrando datos como su nombre, foto y precio |
| ItemDetail    | Se encarga de desplegar los datos de un artículo en específico, mostrando a fondo más detalles                                                |
| ProductsTable | Esta tabla se despliega en el apartado *carrito* y muestra en detalle que artículos se han agregado en el                                     |
| UserRegister  | Modal que funciona como un formulario con todos los datos que son necesarios para registrarse en la página, como nombre, usuario, mail, etc.  |
| UserLogin     | Modal que se encarga de verificar que el usuario y contraseña existan en la base de datos y los establece en el navegador                     |
| SearchBar     | Componente que se encuentra en el *header* y se encarga de enviar los parámetros necesarios para buscar un artículo                           |

## Tabla de rutas

| Ruta              | Descripción                                                                                                                                   |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Cart              | Se visualizan todos los artículos del carrito si hay artículos en el, osino devuelve un mensaje informando de que está vacío                  |
| Categories        | Muestra todos los artículos que coincidan con la categoría deseada                                                                            |
| Home              | Ruta por defecto que muestra algunos artículos destacados                                                                                     |
| MyAccount         | Se visualizan todos los datos del usuario, ademas de permitir editar los datos y visualizar las órdenes emitidas                              |
| SearchResults     | Muestra todos los artículos que coincidan con la búsqueda, osino devuelve un mensaje indicando al usuario                                     |
| SpecificProduct   | Muestra más detalles a profundo sobre un artículo en específico, además de un carrusel con fotos                                              |
| Contact           | Sección donde se visualiza el formulario de contacto y los links a las redes sociales                                                         |

## Tabla de contextos

| Contexto          | Descripción                                                                                                                                       |
| -------------     | ------------------------------------------------------------------------------------------------------------------------------------------------  |
| CartContext       | Contexto que provee de todas las funciones necesarias para agregar artículos al carrito, además de calcular totales, cantidades y limpiar datos   |
| UserContext       | Contexto que provee de todas las funciones necesarias para agregar usuarios al navegador, y despliegue sus datos en el apartado *MyAccount*. También se encarga de subir las consultas a la base de datos       |

### [Gif demostrativo de la navegabilidad de la página](https://drive.google.com/file/d/12iPbv-NLi-uBkyDnT8j34VLi3PcR4x8D/view?usp=share_link ) 
