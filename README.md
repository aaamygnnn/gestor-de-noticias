# Gestor de Noticias - Despliegue Web

Aplicación web desarrollada en Angular para la gestión y visualización de noticias.

## Proceso de Optimización y Empaquetado
1. **Organización:** Estructura modular de código fuente en `src/` y recursos estáticos en `public/`.
2. **Minificación y Optimización:** Compilación para producción mediante Angular CLI (`ng build --base-href /gestor-noticias/`), generando paquetes JS y CSS minificados en `dist/gestor-de-noticias/browser`.
3. **Empaquetado:** Compresión de los archivos compilados en `gestor-de-noticias.zip` listos para despliegue en servidor.
4. **Despliegue:** Configuración de servidor local Apache (XAMPP) mediante Virtual Host en `http://localhost/gestor-noticias`.