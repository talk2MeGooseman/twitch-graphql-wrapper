import lodash from 'lodash';

function isObjectLike(value: any): boolean{
  return typeof value == 'object' && value !== null;
}

export const snakeCaseFieldResolver = (source: any, args: object, contextValue: any, info: any) => {
  const snakeCaseFieldName = lodash.snakeCase(info.fieldName)
  // ensure source is a value for which property access is acceptable.
  if (isObjectLike(source) || typeof source === 'function') {
    const property = source[info.fieldName] || source[snakeCaseFieldName]
    if (typeof property === 'function') {
      return property(args, contextValue, info);
    }

    return property;
  }
}
