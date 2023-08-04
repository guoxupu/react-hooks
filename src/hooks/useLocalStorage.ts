import { useLocalStorageState } from 'ahooks';
import { parse, stringify } from 'superjson';

const useLocalStorage: typeof useLocalStorageState = (key, options) => {
  return useLocalStorageState(key, {
    serializer: stringify,
    deserializer: parse,
    ...options,
  });
};

export default useLocalStorage;
