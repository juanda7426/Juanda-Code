---
description: Cómo desplegar tu portafolio en GitHub Pages
---

# 🚀 Guía de Despliegue: Publica tu Portafolio

Ya tenemos todo configurado en tu proyecto para que el despliegue sea muy fácil. Sigue estos pasos en tu terminal:

## Paso 1: Asegúrate de que tu repositorio esté en GitHub

Si aún no has subido tu código a GitHub, abre tu terminal y ejecuta:

```powershell
git init
git add .
git commit -m "Preparando portafolio premium"
# Reemplaza la URL con la de tu repositorio
git remote add origin https://github.com/tu-usuario/Juanda-Code.git
git push -u origin main
```

## Paso 2: Ejecuta el comando de despliegue

Gracias a que ya instalamos y configuramos `gh-pages` en tu `package.json`, solo tienes que ejecutar este comando:

// turbo

```powershell
npm run deploy
```

### ¿Qué hace este comando internamente?

1. **`npm run build`**: Crea una carpeta llamada `dist` con todo tu código optimizado, comprimido y listo para producción.
2. **`gh-pages -d dist`**: Toma el contenido de esa carpeta `dist` y lo sube a una rama especial en tu repositorio de GitHub llamada `gh-pages`.

## Paso 3: Configuración Final en GitHub (Si es necesario)

Normalmente es automático, pero por si acaso:

1. Ve a tu repositorio en GitHub.com.
2. Haz clic en **Settings** (Configuración).
3. En el menú lateral izquierdo, selecciona **Pages**.
4. En la sección **Build and deployment**, asegúrate de que esté seleccionado "Deploy from a branch".
5. En **Branch**, verifica que esté seleccionada la rama `gh-pages` y la carpeta `/ (root)`.

## Paso 4: ¡Disfruta tu web!

GitHub tardará unos 1 a 2 minutos en procesar los archivos. Después de eso, podrás ver tu portafolio en la URL que configuramos:
`https://juanda7426.github.io/Juanda-Code`

---

### Notas Pro:

- Cada vez que hagas un cambio y quieras que se vea en internet, simplemente vuelve a ejecutar **`npm run deploy`**.
- Si cambias el nombre de tu repositorio, recuerda actualizar el campo `"homepage"` en el archivo `package.json`.
