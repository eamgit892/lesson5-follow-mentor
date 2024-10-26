import React from 'react'

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

    return (
        <li className={classes.join(' ')}>
            <div>
                <label>
                    <input type="checkbox" checked={checked} onChange={updateStatus}/>
                    <span>{title}</span>
                </label>
                <i className="material-icons red-text"onClick={removeItem}> X </i>
            </div>
        </li>)
}