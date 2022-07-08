import React from 'react';
import ResultItem from '../ResultItem';
import './style.scss';

const ResultsList = (props) => {
    return (
        <div className="ResultsList">
            {props.data.length ? (
                <div>
                    <h1>Найдено {props.data.length}</h1>

                    <div>
                        {props.data.map((item, i) => (
                            <ResultItem key={i} item={item} />
                        ))}
                    </div>
                </div>
            ) : (
                <h1>Список пуст</h1>
            )}
        </div>
    );
};

export default ResultsList;
