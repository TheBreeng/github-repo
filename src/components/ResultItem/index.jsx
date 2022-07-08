import React from 'react';
import './style.scss';

const ResultItem = (props) => {
    return (
        <div className="ResultItem">
            <div>
                Автор:{' '}
                <a href={props.item.owner.html_url} target="_blank">
                    {props.item.owner.login}
                </a>
            </div>
            <div>
                Название: <strong>{props.item.name}</strong>
            </div>
            <div>
                Описание: <strong>{props.item.description}</strong>
            </div>
            <div>
                Язык программирования: <strong>{props.item.language}</strong>
            </div>
            <a href={props.item.clone_url} target="_blank">
                Перейти в репозиторий
            </a>
        </div>
    );
};

export default ResultItem;
