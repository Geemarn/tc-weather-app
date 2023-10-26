import { KeyboardEvent, memo } from 'react';

interface SearchFormProps {
  handleSearchLocation: (e: KeyboardEvent<HTMLInputElement>) => void;
  setLocation: (e: string) => void;
}

function SearchForm({ setLocation }: SearchFormProps) {
  return (
    <section className='search'>
      <input
        onChange={(e) => setLocation(e.target.value)}
        placeholder='Search location...'
        type='text'
      />
    </section>
  );
}

export default memo(SearchForm);
