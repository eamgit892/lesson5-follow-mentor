import React, { useEffect, useState } from 'react'
import getDateString from './getDateString';

export default function Item( {id, title, status, tasks, setTasks} ) {
    
    const [checked, setChecked] = React.useState(status)

    // add class for line-thourgh
    const classes = ['todo']
    if (checked) classes.push('status');

    
    const updateStatus = ()=> {
        setChecked(!checked);     // invert state var 
        tasks.map( t => {
            if (t.id === id) t.status = !checked;
            return  true; 
        })
        setTasks([...tasks])  // passed from parent element 
    }

    const removeItem = () => setTasks([...tasks].filter(t => t.id !== id)) ;

    // EDIT MODE CHANGES // --------------------------------------------------
    const [editMode, setEditMode] = useState(false);
    const [editBoxValue, setEditBoxValue] = useState(title);

    useEffect(
        ()=> {
        setEditBoxValue(title);
        console.log(`edit mode ${editMode}`);
        }
    , [editMode])
    
    const finishEdit = (e) => {
        if (e.key == "Enter" && e.target.value !== '') {
            // update value in the task 
            tasks.map( t => {
                // !!! add timestamp here 
                let dateObject = getDateString();
                let dateString = dateObject.MDY + ' ' + dateObject.time;
                if (t.id == id) {
                    let newtitle = e.target.value
                                   .replace("\[.*?/]\g", '') // remove old date in [...]
                    t.title = `${newtitle} [modified on ${dateString}]`; 
                }
            })
            setTasks([...tasks]) 
            setEditMode(false)
            e.target.value = ''
        }
    } // end of edit mode ---------------------------------------------------     

    return (
        <li className={classes.join(' ')}>
            <div>
                <label className={editMode ? 'hide-class' : ''}>
                    <input type="checkbox" 
                           checked={checked} onChange={updateStatus}/>
                    <span className={editMode ? 'hide-class' : ''}>{title}</span>
                </label>
                <input type="text" className={!editMode ? 'hide-class' : ''} 
                       onKeyDown={finishEdit} 
                />
                <button onClick={(e) => {
                    e.target.previousSibling.value = editBoxValue;
                    setEditMode(true)}}>Edit</button>
                <i className="material-icons red-text"onClick={removeItem}> X </i>
            </div>
        </li>)
}