import jsonStringifySafe from 'json-stringify-safe';

export const dehydrate = (state: any) => {
  return jsonStringifySafe(state)
}