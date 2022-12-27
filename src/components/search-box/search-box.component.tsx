import React from 'react';
import './search-box.styles.css';

interface SearchBoxProps {
  className: string;
  placeholder: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  className,
  placeholder,
  handleChange,
}) => {
  return (
    <input
      className='search'
      type='search'
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
