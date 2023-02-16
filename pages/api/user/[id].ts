import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/mongodb/lib/mongodb'
import { TUser } from '@/model/user';
import User from 'mongodb/model/user.model'

type Data = {
    success?: Boolean;
    error?: string;
    data?: TUser;
}

const adapterUserData = ({ users }: any): TUser => {
    const data: TUser = {
        user: users?.user ? users?.user : '',
        email: users?.email ? users?.email : '',
        password: users?.password ? users?.password : '',
        rol: users?.rol ? users?.rol[0].toString() : ''
    }
    return data
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    //Get params
    const { method } = req
    const id = req.query.id

    if (typeof id === 'undefined') {
        res.status(400).json({ error: "Invalid" });
    }

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const users = await User.findById(id)

                const data: TUser = adapterUserData({ users })

                res.status(200).json({ success: true, data })
            } catch (error: any) {
                res.status(400).json({ success: false, error: error ? error?.message : '' })
            }
            break
        case 'PUT':
            try {
                const { user, email, password, rol } = req.body

                const existUser = await User.find({ id })

                if (existUser !== null) {
                    const newUser = {
                        user,
                        email,
                        password,
                        rol,
                    }

                    await User.findByIdAndUpdate(id, newUser, { new: true })

                    res.status(200).json({ success: true })
                } else {
                    res.status(404).json({ success: false, error: "User is not Found" })
                }
            } catch (error: any) {
                res.status(400).json({ success: false, error: error ? error?.message : '' })
            }
            break
        case 'DELETE':
            try {
                const existUser = await User.findById(id);

                if (existUser !== null) {

                    const users = await User.findByIdAndRemove(id);

                    const data: TUser = adapterUserData({ users })

                    res.status(200).json({ success: true, data });
                } else {
                    res.status(404).json({ success: false, error: "User is not Found" })
                }

            } catch (error: any) {
                res.status(400).json({ success: false, error: error ? error?.message : '' })
            }
        default:
            res.status(400).json({ success: false, error: "Invalid Method" })
            break
    }


}