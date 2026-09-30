import { useRef, useState } from 'react';
import {
  Button,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import type { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

import { useAppTheme } from '@/components/TemaApp';
import ComponentCard from '@/components/TarjetaComponente';
import FloatingActions from '@/components/AccionesFlotantes';
import { basicsStyles } from '@/styles/estilosBasicos';

export default function BasicsScreen() {
  const { colors, isDarkMode } = useAppTheme();
  // Guarda los valores mostrados por el campo y los dos ejemplos de botones.
  const [inputValue, setInputValue] = useState('');
  const [buttonMessage, setButtonMessage] = useState('Todavía no pulsaste el Button.');
  const [pressableMessage, setPressableMessage] = useState(
    'Todavía no pulsaste el Pressable.',
  );
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollViewRef = useRef<ScrollView | null>(null);

  // Muestra el botón de regreso solo después de desplazar el contenido.
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setShowScrollTop(event.nativeEvent.contentOffset.y > 120);
  };

  const handleScrollToTop = () => {
    // Devuelve los ejemplos a su posición inicial.
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
    setShowScrollTop(false);
  };

  // Presenta los componentes nativos básicos dentro de un desplazamiento vertical.
  return (
    <View style={[basicsStyles.screen, { backgroundColor: colors.screen }]}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={basicsStyles.content}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}>
        <View style={basicsStyles.header}>
          <Text style={[basicsStyles.eyebrow, { color: colors.accent }]}>REACT NATIVE</Text>
          <Text style={[basicsStyles.title, { color: colors.text }]}>Componentes básicos</Text>
          <Text style={[basicsStyles.subtitle, { color: colors.secondaryText }]}>
            Ejemplos pequeños para entender cómo se construye una interfaz nativa.
          </Text>
        </View>

        <ComponentCard
          name="View"
          description="Es el contenedor fundamental para agrupar elementos y organizar layouts."
          usage="agrupar contenido y distribuirlo con Flexbox.">
          <View style={basicsStyles.viewExample}>
            <View style={[basicsStyles.viewBlock, { backgroundColor: colors.accent }]} />
            <View style={[basicsStyles.viewBlock, { backgroundColor: colors.accentSoft }]} />
          </View>
        </ComponentCard>

        <ComponentCard
          name="Text"
          description="Permite mostrar texto y aplicar estilos a títulos, párrafos o etiquetas."
          usage="mostrar información legible dentro de la aplicación.">
          <Text style={[basicsStyles.textExample, { color: colors.text }]}>
            Hola <Text style={[basicsStyles.textHighlight, { color: colors.accent }]}>React Native</Text>
          </Text>
        </ComponentCard>

        <ComponentCard
          name="Image"
          description="Muestra imágenes locales o remotas dentro de la interfaz."
          usage="presentar iconos, fotografías o recursos visuales.">
          <Image
            accessibilityLabel="Icono de ejemplo de la aplicación"
            source={require('../../assets/images/icon.png')}
            style={basicsStyles.imageExample}
          />
        </ComponentCard>

        <ComponentCard
          name="TextInput"
          description="Permite que la persona escriba texto utilizando el teclado del dispositivo."
          usage="capturar nombres, búsquedas, comentarios o datos de formularios.">
          <TextInput
            placeholder="Escribí algo..."
            placeholderTextColor={colors.mutedText}
            style={[
              basicsStyles.input,
              { backgroundColor: colors.card, borderColor: colors.border, color: colors.text },
            ]}
            value={inputValue}
            onChangeText={setInputValue}
          />
          <Text style={[basicsStyles.resultText, { color: colors.mutedText }]}>
            {inputValue ? `Texto ingresado: ${inputValue}` : 'El texto aparecerá aquí.'}
          </Text>
        </ComponentCard>

        <ComponentCard
          name="Button"
          description="Es un botón nativo simple que ejecuta una acción al tocarlo."
          usage="acciones sencillas con el estilo estándar de la plataforma.">
          <Button
            title="Probar Button"
            onPress={() => setButtonMessage('El Button fue pulsado correctamente.')}
          />
          <Text style={[basicsStyles.resultText, { color: colors.mutedText }]}>{buttonMessage}</Text>
        </ComponentCard>

        <ComponentCard
          name="Pressable"
          description="Detecta distintas fases de una pulsación y permite crear controles personalizados."
          usage="botones o tarjetas que necesitan estilos propios y feedback táctil.">
          <Pressable
            accessibilityRole="button"
            onPress={() => setPressableMessage('El Pressable fue pulsado correctamente.')}
            style={({ pressed }) => [
              basicsStyles.pressable,
              { backgroundColor: colors.accent },
              pressed && basicsStyles.pressablePressed,
            ]}>
            {({ pressed }) => (
              <Text
                style={[
                  basicsStyles.pressableText,
                  { color: isDarkMode ? '#0F172A' : '#FFFFFF' },
                ]}>
                {pressed ? 'Pulsando...' : 'Probar Pressable'}
              </Text>
            )}
          </Pressable>
          <Text style={[basicsStyles.resultText, { color: colors.mutedText }]}>
            {pressableMessage}
          </Text>
        </ComponentCard>
      </ScrollView>
      <FloatingActions onScrollToTop={handleScrollToTop} showScrollTop={showScrollTop} />
    </View>
  );
}
