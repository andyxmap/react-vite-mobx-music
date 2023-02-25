export interface Token {
    access_token:string
    refresh_token:string
}

export interface UserCurrent extends Token{
    username:string
    role:string
}

export interface Credentials{
    email:string,
    password:string,
    first_name:string,
    last_name:string
}

export interface User {
    id:number
    username?: string;
    role?:string;
    refresh_token?: string;
    access_token?: string;
    first_name?: string;
    last_name?: string;
}