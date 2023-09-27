import { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    console.log('r', name);
    setQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <form onClick={handleSubmit}>
      <input
        type="text"
        name="searchQuery"
        onChange={handleChange}
        autoComplete="off"
      />
      <button type="submit">Find</button>
    </form>
  );
};

export default SearchForm;
