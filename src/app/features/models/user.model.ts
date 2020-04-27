export class User {
    id: number;
    name: string = '';
    public email: string;
    public address:{
        street?: string;  
        suite?: string;  
        city?: string;  
        zipcode?: string; 
    };
    public phone: string;
    public website: string;
    public company: {
        name: string;  
        catchPhrase?: string; 
        bs?: string; 
    };
    complete: boolean = false;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
  





/*
export class User{
    public id: number;
    public name: string;
    public username: string;
    public email: string;
    public address:{
        street: string;  
        suite: string;  
        city: string;  
        zipcode: string; 
    };
    public phone: string;
    public website: string;
    public company: {
        name: string;  
        catchPhrase: string; 
        bs: string; 
    };
}


export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address:{
        street: string;  
        suite: string;  
        city: string;  
        zipcode: string; 
    };
    phone: string;
    website: string;
    company: {
        name: string;  
        catchPhrase: string;  
        bs: string; 
    };
}

export interface Adress {
    street: string;  
    suite: string;  
    city: string;  
    zipcode: string;  
}

export interface Company {
    name: string;  
    catchPhrase: string;  
    bs: string; 
}
*/