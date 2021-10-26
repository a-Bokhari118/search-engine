import { useEffect, useState } from 'react';
import Links from './Links';
import { useDebounce } from 'use-debounce';
import { useResultsContext } from '../context/ResultContextProvider';
const Search = () => {
  const [text, setText] = useState('Elon Musk');
  const { setSearchTerm } = useResultsContext();
  const [debouncedValue] = useDebounce(text, 500);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue, setSearchTerm]);
  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        value={text}
        type="text"
        className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="Search..."
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <button
          type="button"
          className="absolute top-1.5 right-4 text-2xl text-gray-500 hover:shadow-lg"
          onClick={() => setText('')}
        >
          &times;
        </button>
      )}
      <Links />
    </div>
  );
};

export default Search;
