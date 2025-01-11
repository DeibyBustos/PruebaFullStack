
# Prueba Técnica para Desarrollador Full Stack

---

### Herramientas

- Node.js (versión reciente)
- PostgreSQL (versión reciente)
- Angular CLI (instalado globalmente: `npm install -g @angular/cli`)
- Nodemon (para desarrollo del backend: `npm install -g nodemon`)

### Instalación de Dependencias

Para instalar las dependencias necesarias, ejecuta los siguientes comandos en las carpetas del backend y frontend respectivamente:

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

---

## Configuración

### Base de Datos PostgreSQL

1. Crea una base de datos en PostgreSQL (`prueba_fullstack`).
2. Ejecuta el siguiente script SQL para crear la tabla `usuarios`:

```sql
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    correo VARCHAR(100),
    edad INT
);
```

3. Inserta los datos iniciales en la tabla `usuarios`:

```sql
INSERT INTO usuarios (nombre, correo, edad)
VALUES
  ('Juan Pérez', 'juan.perez@example.com', 25),
  ('Ana Gómez', 'ana.gomez@example.com', 30),
  ('Carlos Ruiz', 'carlos.ruiz@example.com', 22),
  ('Marta López', 'marta.lopez@example.com', 27),
  ('Luis Fernández', 'luis.fernandez@example.com', 35),
  ('Sofía Martín', 'sofia.martin@example.com', 28),
  ('Pedro Sánchez', 'pedro.sanchez@example.com', 33),
  ('Laura García', 'laura.garcia@example.com', 24),
  ('Jorge Ramírez', 'jorge.ramirez@example.com', 29),
  ('Elena Díaz', 'elena.diaz@example.com', 26);
```

4. Modifica el archivo `.env` en la carpeta del backend con el siguiente contenido, ajustando los valores según tu configuración:

```env
DB_USER=postgres
DB_HOST=localhost
DB_NAME=nombre_base_de_datos
DB_PASSWORD=tu_contraseña
DB_PORT=5432
```

---

## Ejecución del Proyecto

### Backend

1. Verificar que PostgreSQL este corriendo y que la tabla `usuarios` esté creada con los datos iniciales.
2. Ingresa a la carpeta del backend:

```bash
cd backend
```

3. Inicia el backend con el comando:

```bash
npm run dev
```

El microservicio estará disponible en `http://localhost:3000/api/data`.

### Frontend

1. Ingresa a la carpeta del frontend:

```bash
cd frontend
```

2. Inicia el servidor de desarrollo del frontend:

```bash
ng serve
```

3. Accede al frontend en `http://localhost:4200`.

---

## Documentación de la API con Swagger

Este proyecto utiliza Swagger para documentar y visualizar la API del backend, para acceder a la documentación:

1. Asegúrate de que el backend esté corriendo.
2. Accede a la siguiente URL en tu navegador:

```
http://localhost:3000/api-docs
```

Aquí se podrá ver la ruta disponible en la API de forma interactiva.

---

## Pruebas

### Backend

- Puedes usar Postman o cualquier cliente HTTP para probar la API.
- Ejemplo de prueba de la ruta:

```http
GET http://localhost:3000/api/data
```

### Frontend

- Navega a `http://localhost:4200`.
- El formulario debe mostrar los datos obtenidos de la API.

---

