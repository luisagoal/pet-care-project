-- =============================================================
-- SCRIPT DE CREACIÓN DE BASE DE DATOS - (PET CARE)
-- =============================================================

-- 1. Tabla de Usuarios (Manejo de Roles diferenciados)
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol VARCHAR(20) NOT NULL -- 'Administrador', 'Fundacion', 'Adoptante'
);

-- 2. Tabla de Mascotas (Catálogo Dinámico del Refugio)
CREATE TABLE mascotas (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    edad VARCHAR(20) NOT NULL,
    estado_medico VARCHAR(255) NOT NULL, -- Vacunas, desparasitación, etc.
    foto_url VARCHAR(255),
    fundacion_id INT REFERENCES usuarios(id) ON DELETE CASCADE
);

-- 3. Tabla de Solicitudes (Módulo automatizado de postulación en tiempo real)
CREATE TABLE solicitudes (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id) ON DELETE CASCADE,
    mascota_id INT REFERENCES mascotas(id) ON DELETE CASCADE,
    estado VARCHAR(20) DEFAULT 'Pendiente', -- 'Pendiente', 'Aprobada', 'Rechazada'
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);