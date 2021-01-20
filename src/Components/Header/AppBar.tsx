import React from 'react';
import '../../CSS/Inputs/SearchBar.scss';

interface PropsData{
    placeholderText: string;
}

const AppBar: React.FC<PropsData> = ({placeholderText}:PropsData)  => {
  return (
    <div>
<form className="navbar-form navbar-left" role="search">
  <div className="form-group">
    <input type="text" className="form-control" placeholder="Search"/>
  </div>
  <button type="submit" className="btn btn-default">Submit</button>
</form>    </div>
  );
}

export default AppBar;