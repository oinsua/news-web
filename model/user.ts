export interface TUser {
    user: string;
    email: string;
    password: string;
    rol: string;
};

export interface TRol {
    name: string;
    permission: string;
}