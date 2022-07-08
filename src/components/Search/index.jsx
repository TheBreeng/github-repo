import React, { useState } from 'react';
import './style.scss';

const Search = ({ newData }) => {
    const [keyword, setKeyword] = useState('');

    const search = () => {
        if (keyword.trim().length) newData(keyword);
    };

    return (
        <div className="Search">
            <input
                type="text"
                placeholder="Ключевое слово"
                onChange={(e) => setKeyword(e.target.value)}
            />
            <button onClick={search}>Найти</button>
        </div>
    );
};

export default Search;
