import { memo } from 'react';

interface SearchFormProps {
  setLocation: (e: string) => void;
}

function SearchForm({ setLocation }: SearchFormProps) {
  return (
    <section className='search' data-testid={'tc-search'}>
      <input
        name={'search-input'}
        onChange={(e) => setLocation(e.target.value)}
        placeholder='Search location...'
        type='text'
        data-testid={'tc-search-input'}
      />
    </section>
  );
}

export default memo(SearchForm);
