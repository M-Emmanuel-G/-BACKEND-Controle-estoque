export abstract class CurrentTime{
    static GetTime = () =>{
        const date = new Date()
        const day = date.getDay()
        const month = date.getMonth()
        const fullYear = date.getFullYear()
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()
        
        return ` ${day}/${month}/${fullYear} as ${hours}:${minutes}:${seconds}`
    }
}