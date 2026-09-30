# RN1 — Componentes nativos de React Native

Proyecto correspondiente al Punto 2 del trabajo práctico.

## Objetivo

Mostrar los principales componentes nativos de React Native mediante ejemplos visuales, explicaciones breves e interacciones simples.

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

Luego se escanea el código QR desde Expo Go.

## Organización de la aplicación

El proyecto utiliza tres pestañas:

- `Básicos`: `View`, `Text`, `Image`, `TextInput`, `Button` y `Pressable`.
- `Listas`: `ScrollView`, `FlatList` y `SectionList`.
- `Interacción`: `Switch`, `Modal`, `ActivityIndicator`, `StatusBar` y `KeyboardAvoidingView`.

Las tres pestañas comparten un modo claro/oscuro mediante un contexto de tema. Las pantallas con desplazamiento también incluyen acciones flotantes para cambiar el tema y volver al inicio del contenido.

## Estructura principal

- `app/(tabs)/basicos.tsx`: demostraciones básicas.
- `app/(tabs)/listas.tsx`: ejemplos de scroll y listas.
- `app/(tabs)/interaccion.tsx`: ejemplos interactivos.
- `components/TarjetaComponente.tsx`: tarjeta reutilizable para presentar cada componente.
- `components/TemaApp.tsx`: estado compartido del modo claro/oscuro.
- `components/AccionesFlotantes.tsx`: botones flotantes de tema y desplazamiento.
- `components/lists/`: encabezado, filas, selector y listas virtualizadas reutilizables.
- `data/datosListas.ts`: tipos y datos de ejemplo de las listas.
- `styles/`: estilos separados por pantalla para facilitar su búsqueda y mantenimiento.
- `app/(tabs)/_layout.tsx`: configuración de las pestañas.

## Decisiones técnicas

- Se utilizan tipos e interfaces de TypeScript para props, listas y estados.
- `FlatList` se utiliza para elementos homogéneos.
- `SectionList` se utiliza para datos agrupados.
- `Pressable` se utiliza para controles personalizados.
- `TouchableOpacity` no es el control principal porque `Pressable` ofrece mayor control sobre los estados de interacción.
- `SafeAreaView` no se utiliza como solución principal porque la API nativa está deprecated en versiones actuales de React Native.
- No se agregaron librerías externas de UI.

## Comprobaciones

```powershell
npx tsc --noEmit
npx expo-doctor
```
