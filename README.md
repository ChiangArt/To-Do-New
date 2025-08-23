<h1 align="left">
  Gestor de Tareas (To-Do App)
  <img src="/src/assets/React%20Logo.gif" alt="App" width="50" style="vertical-align: middle;">
</h1>

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
│       ├── components/   
│       ├── hooks/        
│       ├── types/        
│ 
│     
│
├── shared/               
│   ├── components/      
│   ├── hooks/            
│   ├── types/           
│   └── utils/           
│
├── pages/                
│   ├── TodoHome.tsx

├── App.tsx               
└── main.tsx              

```
##  Instalación y Uso

### 1. Clona el repositorio

```bash
git clone https://github.com/aaguilar-igp/BRYAN_CHIANG.git

```

### 2. Instala las dependencias

```bash
npm install o npm i

```


### 3. Instala las dependencias

```bash
npm run dev

```

### 4. Abre en tu navegador

[http://localhost:5173](http://localhost:5173)


##  Imagenes

### Desktop
![App](/src/assets/image.png)

![App](/src/assets/image-2.png)


### Movil
![App](/src/assets/image-1.png)

![App](/src/assets/image-3.png)


##  Funcionalidades destacadas

- Crear, editar, eliminar y completar tareas

- Prioridades: alto / medio / bajo

- Fecha límite con calendario personalizado

- Etiquetas (tags)

- Validaciones con Yup

- Persistencia en LocalStorage

- UI accesible y responsiva (Tailwind)


##  Autor

[Bryan Lee Chiang Arteaga]
bryan_94tj@hotmail.com

