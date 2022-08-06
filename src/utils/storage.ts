class Storage {
    static set(name: any, value: any){
        try{
            localStorage.setItem(name, value)
        }catch(err){
            console.log(err)
        }
    }

    static get(value: any){
        try{
            return localStorage.getItem(value)
        }catch(err){
            console.log(err)
        }
    }

    static remove(name: any){
        try{
           return localStorage.removeItem(name);
        }catch(err){
            console.log(err)
        }
    }
}

export default Storage;