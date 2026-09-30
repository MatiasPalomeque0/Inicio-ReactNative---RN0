# Guía de defensa — Proyecto 1

## ¿Qué demuestra este proyecto?

Demuestra la creación de una aplicación React Native con Expo, la ejecución mediante Metro y la navegación básica con Tabs.

## Decisiones principales

- Se utilizó el template `tabs` porque Expo Router ya configura navegación basada en archivos.
- `app/(tabs)/_layout.tsx` define la barra de pestañas.
- `app/(tabs)/inicio.tsx` corresponde a `Inicio`.
- `app/(tabs)/estilos.tsx` corresponde a `Estilos`.
- Cada pantalla utiliza `StyleSheet` para mantener los estilos agrupados y legibles.
- `TemaApp` comparte el modo claro/oscuro entre las dos pestañas.
- `AccionesFlotantes` concentra el cambio de tema y el regreso al inicio del contenido.

## ¿Por qué las pantallas son diferentes?

`Inicio` es intencionalmente minimalista para demostrar el primer renderizado. `Estilos` utiliza tarjetas, jerarquía visual y desplazamiento para demostrar que cada pantalla puede tener su propia composición. Ambas pantallas permiten alternar entre modo claro y oscuro.

## ¿Cómo se ejecuta?

```powershell
npx expo start
```

Metro muestra un código QR que se puede abrir desde Expo Go.

## Explicación breve

Expo facilita la creación y ejecución inicial del proyecto. Expo Router convierte la estructura de archivos en rutas y el layout de Tabs organiza la navegación inferior sin instalar React Navigation manualmente.
