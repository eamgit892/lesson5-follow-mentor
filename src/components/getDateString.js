export default function getDateString() {
    
    const date = new Date();
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 
        'August', 'Sept', 'Oct', 'Nov', 'Dec'];

    const month = monthNames[date.getMonth()]
    const day = date.getDate()
    const y = date.getFullYear()

    const hours   = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    
    return {MDY: `${month} ${day}, ${y}`, time: `${hours}:${minutes}:${seconds}`}
}