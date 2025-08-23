#  Gestor de Tareas (To-Do App)

Aplicación web desarrollada con **React + TypeScript**, que permite gestionar tareas con funcionalidades como:

- ✅ Crear, editar y eliminar tareas
- ⭐ Asignar prioridades (alta, media, baja)
- 🏷️ Organizar con etiquetas
- ⏰ Definir fechas de vencimiento
- 🎉 Marcar como completadas con animaciones de confetti
- 💾 Persistencia en **LocalStorage**

---

##  Tecnologías utilizadas

-  **React** → Librería para la interfaz de usuario
-  **TypeScript** → Tipado estático
-  **Vite** → Entorno de desarrollo rápido
-  **Tailwind CSS** → Estilos utilitarios
-  **Lucide Icons** → Iconografía moderna
-  **LocalStorage** → Persistencia local
-  **Yup** → Validación de formularios
-  **Canvas Confetti** → Animación al completar tareas

---

## 🗂️ Estructura del Proyecto

Este proyecto sigue una **arquitectura Feature-Based**, donde las carpetas se organizan en torno a **funcionalidades (features)** en lugar de hacerlo únicamente por tipo de archivo (ej. `components`, `services`, etc.).  
Esto facilita la escalabilidad, el mantenimiento y la colaboración en equipo, ya que cada "feature" tiene sus propios **componentes, hooks y lógica bien agrupada**.

### 📂 Estructura de Carpetas

```bash
src/
├── features/
│   └── tasks/
│       ├── components/   # Botones, cards, formularios específicos de tareas
│       ├── hooks/        # useTasks, useTaskForm, etc.
│       ├── types/        # Interfaces relacionadas con Task (Task, Priority)
│ 
│     
│
├── shared/               # Recursos globales reutilizables
│   ├── components/       # Botones genéricos, inputs, modales, etc.
│   ├── hooks/            # useLocalStorage, useDebounce
│   ├── types/            # Tipos globales
│   └── utils/            # Funciones helper y validaciones
│
├── pages/                # Páginas principales de la aplicación
│   ├── TodoHome.tsx

├── App.tsx               # Punto de entrada principal de la aplicación
└── main.tsx              # Renderizado en el DOM

##  Instalación y Uso

### 1. Clona el repositorio
```bash
git clone https://github.com/tu-usuario/todo-app.git
cd todo-app

2. Instala las dependencias
npm install