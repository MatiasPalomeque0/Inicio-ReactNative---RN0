# RN0 — Introducción a React Native y Expo

Proyecto correspondiente al Punto 1 del trabajo práctico.

## Objetivo

Demostrar cómo crear y ejecutar una aplicación React Native con Expo, cómo funciona Expo Router y cómo se organizan dos pantallas mediante Tabs.

## Tecnologías

- React Native `0.86.3`
- Expo `57.0.26`
- Expo Router `57.0.24`
- TypeScript `6.0.3`
- npm
- Expo Go

## Ejecutar el proyecto

Desde esta carpeta:

```powershell
npm install
npx expo start
```

Luego se escanea el código QR desde Expo Go. El celular y la computadora deben estar en la misma red Wi-Fi.

## Navegación

La navegación utiliza Expo Router:

- `app/_layout.tsx`: layout raíz.
- `app/(tabs)/_layout.tsx`: configuración de la barra de Tabs.
- `app/(tabs)/inicio.tsx`: pestaña `Inicio`.
- `app/(tabs)/estilos.tsx`: pestaña `Estilos`.

## Pantallas

### Inicio

Pantalla simple con el texto `Hola Mundo` y estilos básicos. Incluye el botón flotante
para alternar el modo claro/oscuro.

### Estilos

Pantalla con encabezado, tarjetas, jerarquía tipográfica y una distribución visual diferente.
También incluye el modo claro/oscuro y un botón para volver al inicio después de desplazarse.

## Comprobaciones

```powershell
npx tsc --noEmit
npx expo-doctor
```

No se utilizan librerías de navegación adicionales: Expo Router resuelve la navegación por archivos.
