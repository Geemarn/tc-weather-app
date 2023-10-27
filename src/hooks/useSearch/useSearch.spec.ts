import { useSearch } from './index';
import { renderHook } from '@testing-library/react';

describe('test useSearch hooks', () => {
  const { result } = renderHook(() => useSearch(), {});

  const searchValueMock = result.current.searchValue;
  const debouncedSearchMock = result.current.debouncedSearch;

  it('should not call any function on render', () => {
    renderHook(() => useSearch());
    const debouncedSearchMockJest = jest
      .fn(debouncedSearchMock)
      .mockImplementation();
    expect(debouncedSearchMockJest.mock.calls.length).toBe(0);
  });
  it('should return default data in render', () => {
    renderHook(() => useSearch());
    expect(searchValueMock).toEqual('');
  });
});
