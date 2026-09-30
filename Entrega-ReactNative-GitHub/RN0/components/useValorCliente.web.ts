import { useEffect, useState } from 'react';

// El efecto no se ejecuta durante el renderizado del servidor.
// Por eso permite detectar cuándo la página ya está en el cliente.
export function useClientOnlyValue<S, C>(server: S, client: C): S | C {
  const [value, setValue] = useState<S | C>(server);
  useEffect(() => {
    setValue(client);
  }, [client]);

  return value;
}
