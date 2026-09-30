import { useRef, useState } from 'react';
import {
  ActivityIndicator,
  Button,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import type { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

import { useAppTheme } from '@/components/TemaApp';
import ComponentCard from '@/components/TarjetaComponente';
import FloatingActions from '@/components/AccionesFlotantes';
import { interactionStyles } from '@/styles/estilosInteraccion';

export default function InteractionScreen() {
  const { isDarkMode } = useAppTheme();
  // Guarda el estado utilizado por los ejemplos interactivos.
  const [isEnabled, setIsEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollViewRef = useRef<ScrollView | null>(null);

  // Controla cuándo aparece el botón flotante de regreso.
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setShowScrollTop(event.nativeEvent.contentOffset.y > 120);
  };

  const handleInputFocus = () => {
    // Mueve el formulario para mantenerlo visible al abrir el teclado.
    requestAnimationFrame(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    });
  };

  const handleScrollToTop = () => {
    // Devuelve los ejemplos interactivos a su posición inicial.
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
    setShowScrollTop(false);
  };

  // Combina el teclado, la barra del sistema y el contenido desplazable.
  return (
    <KeyboardAvoidingView
      style={[interactionStyles.screen, isDarkMode && interactionStyles.screenDark]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 88 : 0}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#0F172A' : '#F1F5F9'}
      />
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={interactionStyles.content}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode={Platform.OS === 'ios' ? 'interactive' : 'on-drag'}>
        <View style={interactionStyles.header}>
          <Text style={[interactionStyles.eyebrow, isDarkMode && interactionStyles.eyebrowDark]}>
            REACT NATIVE
          </Text>
          <Text style={[interactionStyles.title, isDarkMode && interactionStyles.titleDark]}>
            Interacción
          </Text>
          <Text style={[interactionStyles.subtitle, isDarkMode && interactionStyles.subtitleDark]}>
            Componentes que responden a acciones, estados del sistema o entrada de datos.
          </Text>
        </View>

        <ComponentCard
          name="Switch"
          description="Representa un valor booleano que puede estar activado o desactivado."
          usage="preferencias, configuraciones y opciones simples.">
          <View style={interactionStyles.switchRow}>
            <Text style={[interactionStyles.controlLabel, isDarkMode && interactionStyles.controlLabelDark]}>
              Notificaciones: {isEnabled ? 'activadas' : 'desactivadas'}
            </Text>
            <Switch
              accessibilityLabel="Activar notificaciones"
              value={isEnabled}
              onValueChange={setIsEnabled}
              trackColor={{ false: isDarkMode ? '#475569' : '#CBD5E1', true: '#93C5FD' }}
              thumbColor={isEnabled ? '#2563EB' : '#F8FAFC'}
            />
          </View>
        </ComponentCard>

        <ComponentCard
          name="Modal"
          description="Presenta contenido por encima de la pantalla actual."
          usage="confirmaciones, formularios breves o información contextual.">
          <Button title="Abrir Modal" onPress={() => setModalVisible(true)} />
        </ComponentCard>

        <ComponentCard
          name="ActivityIndicator"
          description="Muestra que una tarea está ejecutándose o que se está esperando una respuesta."
          usage="cargas, solicitudes de red o procesos en curso.">
          <View style={interactionStyles.loadingExample}>
            <ActivityIndicator
              animating={isLoading}
              color={isDarkMode ? '#93C5FD' : '#2563EB'}
              size="large"
            />
            <Button
              title={isLoading ? 'Detener carga' : 'Simular carga'}
              onPress={() => setIsLoading((current) => !current)}
            />
          </View>
        </ComponentCard>

        <ComponentCard
          name="StatusBar"
          description="Permite configurar el estilo de la barra superior del dispositivo."
          usage="adaptar el contraste de la hora, batería y otros indicadores del sistema.">
          <Text style={[interactionStyles.statusExample, isDarkMode && interactionStyles.statusExampleDark]}>
            La barra superior usa contenido {isDarkMode ? 'claro' : 'oscuro'}.
          </Text>
        </ComponentCard>

        <ComponentCard
          name="KeyboardAvoidingView"
          description="Ajusta la pantalla y permite desplazar el contenido cuando aparece el teclado."
          usage="formularios y pantallas con campos de entrada.">
          <TextInput
            placeholder="Escribí un mensaje..."
            placeholderTextColor="#94A3B8"
            style={[interactionStyles.input, isDarkMode && interactionStyles.inputDark]}
            value={message}
            onChangeText={setMessage}
            onFocus={handleInputFocus}
          />
          <Text style={[interactionStyles.inputResult, isDarkMode && interactionStyles.inputResultDark]}>
            {message ? `Mensaje: ${message}` : 'El campo está listo para recibir texto.'}
          </Text>
        </ComponentCard>
      </ScrollView>

      <FloatingActions onScrollToTop={handleScrollToTop} showScrollTop={showScrollTop} />

      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={interactionStyles.modalBackdrop}>
          <View style={[interactionStyles.modalContent, isDarkMode && interactionStyles.modalContentDark]}>
            <Text style={[interactionStyles.modalTitle, isDarkMode && interactionStyles.modalTitleDark]}>
              Modal funcionando
            </Text>
            <Text style={[interactionStyles.modalText, isDarkMode && interactionStyles.modalTextDark]}>
              Este contenido se muestra por encima de la pantalla actual.
            </Text>
            <Pressable
              accessibilityRole="button"
              onPress={() => setModalVisible(false)}
              style={interactionStyles.modalButton}>
              <Text style={interactionStyles.modalButtonText}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}
