export const getCustomQueryOptions = <T extends Record<string, any>>(
  options: T,
  _params: Record<string, unknown>,
  operation: { url: string; operationId: string; operationName: string },
): T => {
  return {
    ...options,
    meta: { ...options.meta, operationId: operation.operationId },
  };
};
