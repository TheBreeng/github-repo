import React, { useState } from 'react';
import './App.scss';
import Search from './components/Search';
import ResultsList from './components/ResultsList';
import searchRepo from './API/searchRepo';

function App() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [text, setText] = useState(false);

    const getData = async (keyword) => {
        try {
            setIsLoading(true);
            setText('Загрузка...');
            setData(await searchRepo.getAll(keyword));
            setIsLoading(false);
        } catch (error) {
            setText('Что-то пошло не так...');
            console.log(error);
        }
    };

    return (
        <div className="App">
            <Search newData={getData} />
            {!isLoading ? <ResultsList data={data} /> : <h1>{text}</h1>}
        </div>
    );
}

export default App;
