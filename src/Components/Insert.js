import React, { useCallback, useState } from 'react';
import { MdPlaylistAdd } from "react-icons/md";


const Insert = ({onInsert}) => {

    const [value, setValue] = useState('')

    const onChange = useCallback( e => {
        setValue(e.target.value)
    }, [])
    
    const onSubmit = useCallback(e => {
        onInsert(value)
        setValue('')
        e.preventDefault()
    }, [onInsert, value])
    // useCallback's second prarameters should be array 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 point
    return (
        <form className="insert" onSubmit={onSubmit}>
            <input placeholder="enter something to do" onChange={onChange} value={value}/>
            <button type="submit"><MdPlaylistAdd/></button>
        </form>
    );
};

export default Insert;