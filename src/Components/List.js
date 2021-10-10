import React from 'react';
import ListItem from './ListItem';

const List = ({todo, removeTodo, onToggle}) => {
    return (
        <div className="todolist">
            {
                todo.map((todo => <ListItem key={todo.id} todo={todo} removeTodo={removeTodo} onToggle={onToggle}/>))
            }
        </div>
    );
};

export default List;