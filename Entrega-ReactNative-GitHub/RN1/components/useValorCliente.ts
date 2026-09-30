// En nativo se devuelve directamente el valor destinado al cliente.
export function useClientOnlyValue<S, C>(server: S, client: C): S | C {
  return client;
}
