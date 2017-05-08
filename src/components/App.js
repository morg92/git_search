import React from 'react';
import Search from './SearchBar.js';
import FilterKey from './../containers/FilterKey';

const App = () => (
    <div>
        <Search
            invia= {this.props}
        />
        <FilterKey />
    </div>
);

export default App;