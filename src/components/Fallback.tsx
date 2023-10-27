import React from 'react';
import { FallbackProps } from 'react-error-boundary';

export default function FallbackError(props: FallbackProps) {
  const { error, resetErrorBoundary } = props;

  return (
    <div className={'error'}>
      <div>Something went wrong</div>
      <div>{error.message}</div>
      <div onClick={() => resetErrorBoundary()}>Reload page</div>
    </div>
  );
}
