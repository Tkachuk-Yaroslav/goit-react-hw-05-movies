// import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchForm = ({ onSubmit }) => {
  // const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search') ?? '';

  // useEffect(() => {
  //   value !== query && setValue(query);
  // }, [query, value]);

  const handleChange = e => {
    const { value } = e.currentTarget;
    // console.log('r', name);
    // setValue(value);
    // setSearchParams({ search: value });
    value ? setSearchParams({ search: value }) : setSearchParams({});
  };

  const handleSubmit = e => {
    e.preventDefault();
    const dataURL = searchParams.get('search');
    console.log('dataURL', dataURL);
    // onSubmit(value);
    onSubmit(query);
    // onSubmit(dataURL);
  };

  return (
    <form onClick={handleSubmit}>
      <input
        type="text"
        name="searchQuery"
        onChange={handleChange}
        autoComplete="off"
        value={query}
        // value={value}
      />
      <button type="submit">Find</button>
    </form>
  );
};

export default SearchForm;
