export function DefaultEmptyResponse<T extends { new (...args: any[]): {} }>(constructor: T) {
  const methodNames = Object.getOwnPropertyNames(constructor.prototype).filter(
    (name) => name !== 'constructor' && typeof constructor.prototype[name] === 'function',
  );

  for (const methodName of methodNames) {
    const descriptor = Object.getOwnPropertyDescriptor(constructor.prototype, methodName);
    if (!descriptor) continue;

    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const result = await originalMethod.apply(this, args);

      if (!result) {
        return Object;
      }
      return result;
    };

    Object.defineProperty(constructor.prototype, methodName, descriptor);
  }

  return constructor;
}
