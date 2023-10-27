import { useEffect, useMemo, useState } from 'react';
import debounce from 'lodash/debounce';

interface useSearchReturnProps {
  searchValue: string;
  debouncedSearch: (e: string) => void;
}

export const useSearch = (time = 1500): useSearchReturnProps => {
  const [searchValue, setSearchValue] = useState<string>('');
  const changeHandler = (e: string) => setSearchValue(e);

  const debouncedSearch = useMemo(
    () => debounce(changeHandler, time ?? 1500),
    [searchValue],
  );

  /**Remove debounce**/
  useEffect(() => {
    return () => debouncedSearch.cancel();
  }, [searchValue]);

  return { searchValue, debouncedSearch };
};
