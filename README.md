# bit-backend
# 🎬 CRUD de Películas

Este proyecto es una aplicación web que permite **crear, leer, actualizar y eliminar** películas. Utiliza tecnologías como **JavaScript**, **Node.js**, **Express**, la base de datos fue usada en **MongoDB Atlas**

- **Herramientas de prueba**
  - Postman: Para probar las rutas y verificar el funcionamiento de los endpoints

## 📦 Funcionalidades

| Método | Ruta                | Descripción                             |
|--------|---------------------|-----------------------------------------|
| GET    | `/movies`           | Obtener todas las películas             |
| GET    | `/movies/:id`       | Obtener una película específica por ID  |
| POST   | `/movies`           | Agregar una nueva película              |
| PUT    | `/movies/:id`       | Actualizar una película existente       |
| DELETE | `/movies/:id`       | Eliminar una película por ID            |

## 🧪 Pruebas con Postman

Se ha utilizado Postman para verificar cada uno de los endpoints del servidor:

- Envío de datos en formato JSON mediante `POST` y `PUT`
- Validación de respuestas correctas y errores (`404`, `500`, etc.)
- Comprobación de la eliminación efectiva de elementos con `DELETE`

## Autor
[Andres Felipe Perea Verea](https://github.com/Feliperea97)


