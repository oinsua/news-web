import { TUser } from "@/model/user"

export const adapterUserData = ({ users }: any): TUser => {
    const data: TUser = {
        user: users?.user ? users?.user : '',
        email: users?.email ? users?.email : '',
        password: users?.password ? users?.password : '',
        rol: users?.rol ? users?.rol[0]?.toString() : ''
    }
    return data
}