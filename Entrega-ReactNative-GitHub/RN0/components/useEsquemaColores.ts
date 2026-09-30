import { useColorScheme as useColorSchemeCore } from 'react-native';

export const useColorScheme = () => {
  // Considera claro un tema del dispositivo que no esté especificado.
  const coreScheme = useColorSchemeCore();
  return coreScheme === 'unspecified' ? 'light' : coreScheme;
};
