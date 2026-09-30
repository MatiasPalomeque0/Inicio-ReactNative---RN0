# Guía de defensa — Proyecto 2

## ¿Qué demuestra este proyecto?

Demuestra componentes nativos habituales de React Native mediante ejemplos visibles e interactivos, utilizando TypeScript.

## Organización

- `Básicos` en `basicos.tsx`: componentes de estructura, texto, imágenes, entrada y botones.
- `Listas`: desplazamiento y listas simples o agrupadas.
- `Interacción`: estados, modal, carga, teclado y barra del sistema.

## Preguntas técnicas frecuentes

### ¿Cuándo usar `ScrollView`?

Cuando el contenido es limitado y se puede renderizar completo. No es la mejor opción para listas muy extensas.

### ¿Cuándo usar `FlatList`?

Cuando se tienen muchos elementos del mismo nivel. Renderiza los elementos de forma eficiente y permite reutilizar filas.

### ¿Cuándo usar `SectionList`?

Cuando los datos están organizados en grupos o categorías y cada grupo tiene un encabezado.

### ¿Por qué se usa `Pressable`?

Permite controlar distintos estados de interacción, como cuando una superficie está siendo presionada. Es más flexible que un botón visualmente fijo.

### ¿Cómo se utiliza TypeScript?

Se tipan las props de `TarjetaComponente`, los elementos de las listas, las secciones y los estados que controlan las demostraciones. No se utiliza `any` innecesariamente.

### ¿Por qué no se usa `SafeAreaView` como solución principal?

La API nativa está deprecated en versiones actuales de React Native. Por eso se evita presentarla como la alternativa moderna.

## Validación

```powershell
npx tsc --noEmit
npx expo-doctor
npx expo start
```

El proyecto se prueba desde Expo Go utilizando el código QR mostrado por Metro.
