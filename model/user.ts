export interface TUser {
    user: string;
    email: string;
    password: string;
    rol: any[];
};

export interface TRol {
    name: string;
    permission: string;
}