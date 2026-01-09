import perfil from "../img/Perfil.jpg";
import cmInicio from "../img/CM Inicio.png";
import cmAdmin from "../img/CM Admin.png";
import cmLogin from "../img/CM login.png";
import cbInventario from "../img/CB inventario.png";
import cbCaja from "../img/CB Caja.png";
import cbLogin from "../img/CB login.png";
import logicSync from "../img/logicSync.png";
import customFlow from "../img/customFlow.png";

// Perfil de Juanda Code actualizado
export const INITIAL_PROFILE = {
  name: "Juanda Code",
  title: "Full Stack Developer",
  bio: `Soy Juan David Valencia, desarrollador full stack especializado en construir aplicaciones y ecosistemas digitales a medida desde cero.
   No utilizo plantillas: diseño y desarrollo soluciones con código limpio, arquitectura escalable y una experiencia de usuario cuidada al detalle. 
  Si buscas llevar tu idea a un nivel profesional, estable y competitivo, estás en el lugar correcto.`,
  problemsSolved: [
    "Digitalización de procesos operativos manuales para negocios.",
    "Creación de interfaces intuitivas que reducen la curva de aprendizaje del usuario.",
    "Desarrollo de aplicaciones de escritorio seguras con persistencia local.",
    "Optimización de la presencia digital de empresas mediante arquitecturas modernas.",
  ],
  avatar: perfil,
  skills: [
    "Frontend Development (React, Vite)",
    "Backend Development (Node.js / Express)",
    "Relational Databases (PostgreSQL, MySQL)",
    "NoSQL Databases",
    "Responsive UI (Bootstrap 5, Tailwind)",
    "Desktop Applications (Electron)",
  ],

  email: "juanvalencia.code@gmail.com",
  phone: "573207643590",
};

export const INITIAL_PROJECTS = [
  {
    id: "1",
    title: "Caminos de Amor",
    category: "Real: Website",
    year: "2023",
    image: cmInicio,
    images: [cmLogin, cmInicio, cmAdmin],
    description: `Sitio web corporativo para una empresa de servicios funerarios para mascotas, orientado a la presentación institucional, gestión de servicios y beneficios para los dueños.
       La solución fue implementada priorizando seguridad, escalabilidad y facilidad de administración.
       La plataforma incluye un módulo administrativo web que permite la gestión centralizada de contenidos y operaciones, como administración de servicios funerarios, planes y beneficios, información corporativa,
       secciones informativas y control de usuarios. 
       El sistema tambien implemneta conexion con redes sociales y acceso a WhatsApp desde la plataforma.
       La solución permite escalabilidad funcional, facilitando la incorporación futura de nuevos módulos como reservas en línea, solicitudes de servicios, pagos, notificaciones o integraciones con sistemas externos.`,
    tags: ["React", "Node.js", "Bootstrap", "Firebase", "Security"],
    link: "https://caminosdeamor.com",
    isReal: true,
  },
  {
    id: "2",
    title: "GesCaBar",
    category: "Real: Desktop App",
    year: "2025",
    image: cbInventario,
    images: [cbInventario, cbCaja, cbLogin],
    description: `Aplicación de escritorio multiplataforma (Windows y macOS) desarrollada para la gestión operativa de bares, cantinas y cafeterías. 
     El sistema integra módulos de inventario y caja con sincronización en tiempo real, permitiendo la consistencia de datos entre ventas, stock y movimientos financieros.
     Incluye gestión estructurada de mesas, pedidos, clientes y proveedores, con persistencia de datos segura y transaccional. Implementa encriptación de extremo a extremo para la protección de la información sensible y comunicación segura entre módulos.
     La aplicación permite configuración dinámica del entorno operativo, incluyendo parametrización de mesas, datos corporativos y ajustes generales del negocio.
     Incorpora control de gastos e ingresos por turno y por día, registro de clientes frecuentes, administración de colaboradores y un sistema de control de accesos basado en roles y permisos.
     El diseño está orientado a escalabilidad, seguridad y estabilidad operativa, garantizando un flujo de trabajo eficiente y confiable en entornos comerciales de alta rotación.`,
    tags: ["Electron", "React", "Node.js", "Bootstrap", "MySQL", "Security"],
    link: "https://github.com/juandavinci/GesCaBar",
    isReal: true,
  },
  {
    id: "3",
    title: "LogicSync Desktop",
    category: "Conceptual: Utility App",
    year: "2025",
    image: logicSync,
    images: [logicSync],
    description:
      "Herramienta conceptual de escritorio diseñada para la sincronización inteligente de bases de datos locales en entornos con conectividad limitada. Ideal para negocios que necesitan operar 100% offline y sincronizar datos en la nube de forma segura cuando el acceso a internet se restablece.",
    tags: ["Electron", "Node.js", "SQLite", "Security"],
    isReal: false,
  },
  {
    id: "4",
    title: "CustomFlow ERP",
    category: "Conceptual: Business Ecosystem",
    year: "2025",
    image: customFlow,
    images: [customFlow],
    description:
      "Sistema modular conceptual para la gestión de flujos de producción en empresas de manufactura a pequeña escala. Este proyecto explora cómo eliminar procesos manuales en papel mediante una interfaz React ultra-rápida y un backend escalable que centraliza pedidos, stock y entregas.",
    tags: ["React", "Express", "PostgreSQL", "Digitalization"],
    isReal: false,
  },
];
