import React from 'react';
import '../../CSS/Inputs/SearchBar.scss';

interface PropsData{
    placeholderText: string;
}

const SearchBar: React.FC<PropsData> = ({placeholderText}:PropsData)  => {
  return (
    <div>
        <input className="form-control form-control-borderless border-0 rounded-pill" type="search" placeholder={placeholderText} id="SearchBar"/>
    </div>
  );
}

export default SearchBar;