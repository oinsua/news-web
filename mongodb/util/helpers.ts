import { TUser } from '@/model/user';
import bcrypt from 'bcrypt'
import Rol from 'mongodb/model/rol.model'

export const encrytPassword = async (password: string) => {
    try {
        const res = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, res);
    } catch (error) {
        console.log(error)
    }
}

export const comparePassword = async (password: string, newpassword: string) => {
    try {
        return await bcrypt.compare(password, newpassword);
    } catch (error) {
        console.log(error);
    }
}

export const getRoles = async ({ roles, newUser }: { roles: any[], newUser: TUser }) => {
    try {
        if (typeof (roles) !== 'undefined') {
            const arrayRol = await Rol.findById(roles[0]);
            newUser.rol = arrayRol._id;
        } else {
            const rolUser = await Rol.find({ name: "user" });
            newUser.rol = [rolUser[0]._id];
        }
        return newUser;
    } catch (error) {
        console.log(error)
    }
};

export const getRole = async ({ id }: { id: any }) => {
    console.log('id: ', id)
    if (typeof (id) !== 'undefined') {
        const rol = await Rol.findById(id);
        return [rol._id];
    }
    return null;
};