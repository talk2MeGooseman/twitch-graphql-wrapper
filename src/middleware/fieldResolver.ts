import lodash from 'lodash';

export const snakeCaseFieldResolver = (source: any, args: object, contextValue: any, info: any) => {
  const fieldName = lodash.snakeCase(info.fieldName)

  // ensure source is a value for which property access is acceptable.
  if (typeof source === 'object' || typeof source === 'function') {
    const property = source[fieldName];
    if (typeof property === 'function') {
      return source[fieldName](args, contextValue, info);
    }
    return property;
  }
}
