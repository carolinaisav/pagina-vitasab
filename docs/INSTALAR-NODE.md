# Guía para instalar Node.js — para Caro

> **Qué es y por qué:** Node.js es el "motor" que necesita el computador para construir y probar
> la web. Sin él, tenemos los planos pero no podemos levantar la obra. Es gratis, oficial y seguro.
> Esta guía es para **Windows 11** (el sistema de este equipo). Toma ~10 minutos.

## Antes de empezar

- No necesitas saber programar. Es instalar un programa como cualquier otro.
- Vas a usar el instalador **oficial**. No descargues Node de ningún otro sitio.

## Paso a paso

1. **Abre el navegador** y anda a la página oficial: **https://nodejs.org**
2. Vas a ver dos botones grandes de descarga. **Elige el que dice "LTS"**
   (significa "soporte a largo plazo" — es la versión estable y recomendada).
   Se descarga un archivo que termina en `.msi`.
3. **Abre el archivo descargado.** Se abre un instalador.
4. Dale **"Next" / "Siguiente"** en cada pantalla, **acepta los términos**, y deja todas las
   opciones **como vienen por defecto**. No cambies nada.
   - Si aparece una casilla que dice algo como *"Automatically install the necessary tools"* o
     *"Tools for Native Modules"*, **déjala como está** (por defecto). No es obligatoria para
     nuestro proyecto.
5. Dale **"Install"**. Windows puede pedirte permiso ("¿Permitir que esta app haga cambios?") →
   **Sí**.
6. Cuando termine, dale **"Finish"**.

## Cómo saber que quedó bien

1. Abre el buscador de Windows (tecla ⊞ Windows) y escribe **PowerShell**. Ábrelo.
2. Escribe esto y presiona Enter:
   ```
   node --version
   ```
   Debería responder algo como `v22.x.x` (un número). Si sale un número, **quedó instalado** ✓.
3. Escribe esto y presiona Enter:
   ```
   npm --version
   ```
   Debería responder otro número (ej. `10.x.x`). Si sale, **listo** ✓.

## Si algo sale mal

- Si `node --version` dice *"no se reconoce el comando"*, **cierra PowerShell y vuelve a abrirlo**
  (a veces necesita reiniciarse para reconocer lo nuevo). Si sigue fallando, reinicia el computador
  y prueba de nuevo.
- Cualquier duda, me copias lo que salió en la pantalla y te ayudo.

## ¿Y después?

Cuando Node esté instalado y me confirmes que `node --version` responde un número, ya puedo:
crear el esqueleto del proyecto Next.js, dejar todo listo para trabajar con datos de prueba
(`MockProvider`), y montar los controles de calidad automáticos desde el día 1.

> **Nota:** también conviene tener cuentas en **Supabase**, **Vercel** y **Resend** (los servicios
> donde vivirá la web, la base de datos y los correos). No es urgente para empezar, pero lo
> necesitaremos antes de publicar. Te aviso cuándo y te guío para crearlas.
