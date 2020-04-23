export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address:{
        [key: string]:Adress
    };
    phone: string;
    website: string;
    company: {
        [key: string]:Company
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