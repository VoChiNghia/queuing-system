
export const ACCESS_TOKEN = 'accessToken';
export const USER_LOGIN = 'userLogin';


export const {saveStore,saveStoreJson,getStore,getStoreJson,removeStore} = {
    saveStore:(name:string,stringValue:any)=>{
        localStorage.setItem(name,stringValue)
        return stringValue
    },
    saveStoreJson:(name:string,value:any)=>{
        localStorage.setItem(name,JSON.stringify(value))
        return value
    },
    getStore:(name:string)=>{
        if(localStorage.getItem(name)){
            return localStorage.getItem(name)
        }
        return null
    },
    getStoreJson:(name:any)=>{
       if(localStorage.getItem(name)){
          const dataStore = localStorage.getItem(name)
           if(typeof dataStore === 'string'){
             return JSON.parse(dataStore)
           }
       }
       return null
   },
    removeStore:(name:string)=>{
        if(localStorage.getItem(name)){
            localStorage.removeItem(name)
        }
    }
 
 }