import getDateString from "./getDateString";

export const DateComponent = ( {passDateFn} ) => {
    const dateObj =  getDateString() 
    const dateStr =  dateObj.MDY + ' ' + dateObj.time
    passDateFn(dateStr) ; // for upper level component 
    
    return (<span>{dateStr}</span>)
}