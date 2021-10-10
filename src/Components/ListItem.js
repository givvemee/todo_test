import React from 'react';
import cn from 'classnames'
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from "react-icons/md";

const ListItem = ({ todo, removeTodo, onToggle }) => {
    const {id, checked, text} = todo
    return (
        <div className="listitem">
            <div className={cn ('checkbox', {checked})} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => removeTodo(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default ListItem;