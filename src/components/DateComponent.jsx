export const DateComponent = ( {passDateFn} ) => {
    const date = new Date();
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 
        'August', 'Sept', 'Oct', 'Nov', 'Dec'];

    const month = monthNames[date.getMonth()]
    const day = date.getDate()
    const y = date.getFullYear()
    console.log(month);
    let dateString = `${month} ${day} ${y}`;
    
    passDateFn(date.toString()) ; // for upper level component 
    
    return (<span>{dateString}</span>)
}