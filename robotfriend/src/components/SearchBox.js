import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <input
            className ="pa3 ba b--green bg-lightest-blue w-10" 
            type="input" 
            placeholder="Insert name robots"
            onChange = {searchChange}
        />
    );
}

export default SearchBox;