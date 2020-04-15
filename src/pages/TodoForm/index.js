import React from 'react';
import { FaPlus, FaSearch, FaBroom } from 'react-icons/fa';
import Grid from './../Templates/Grid/index';

import './style.css';

export default props => {

    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClean()
        }
    }


    return (
        <div role="form" className="todoForm">
            <Grid cols="12 9 10">
                <input 
                    id="description"
                    className="form-control"
                    placeholder="Adicione uma tarefa"
                    onKeyUp={keyHandler}
                    onChange={props.handleChange}
                    value={props.description}
                />  
            </Grid>
    
            <Grid cols="12 3 2">
                <button className="btn btn-primary" onClick={props.handleAdd}>
                    <FaPlus />
                </button>
                <button className="btn btn-info" onClick={props.handleSearch}>
                    <FaSearch />
                </button>
                <button className="btn btn-default" onClick={props.handleClean}>
                    <FaBroom />
                </button>
            </Grid>
        </div>
    )
}