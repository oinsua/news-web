import { TUser } from '@/model/user'
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from 'mongodb/lib/mongodb'
import User from 'mongodb/model/user.model'
import { adapterUserData } from '@/util/user.util'
import jwt from 'jsonwebtoken'

type Data = {
    success?: Boolean;
    error?: string;
    data?: TUser[];
    token?: string;
}

const SECRET = process.env.SECRET || '';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    //Get params
    const { method } = req
    console.log('method: ', method);

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const allUser = await User.find({});

                const data = allUser.map(users => adapterUserData({ users }))

                res.status(200).json({ success: true, data });

            } catch (error: any) {
                res.status(400).json({ success: false, error: error ? error?.message : '' })
            }
            break
        case 'POST':
            try {
                const { user, email, password, rol } = req.body;

                let newUser = new User({
                    user,
                    email,
                    password,
                    rol
                });

                //newUser = await getRoles({ roles: rol, newUser });

                const userInsert = await newUser.save();

                const token = jwt.sign({ id: userInsert._id }, SECRET, { expiresIn: 86400 });

                res.status(201).json({ success: true, token })
            } catch (error: any) {
                res.status(400).json({ success: false, error: error ? error?.message : '' })
            }
            break
        default:
            res.status(400).json({ success: false, error: "Invalid Method" })
            break
    }
}
