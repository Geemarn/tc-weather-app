import { renderHook } from '@testing-library/react';
import useWeatherApi from './index';

describe('test useSearch hooks', () => {
  const { result } = renderHook(
    () => useWeatherApi({ location: '', unit: 'standard' }),
    {},
  );

  const dataMock = result.current.data;

  it('should return default data in render', () => {
    renderHook(() => useWeatherApi({ location: '', unit: 'standard' }));
    expect(dataMock).toEqual({});
  });
});
