import type { NextApiRequest, NextApiResponse } from 'next'
import User from 'mongodb/model/user.model'
import { comparePassword } from '@/mongodb/util/helpers';
import jwt from 'jsonwebtoken'
import dbConnect from 'mongodb/lib/mongodb'

type Data = {
    success?: Boolean;
    error?: string;
    message?: string;
    token?: string;
    data?: {};
}

const SECRET = process.env.SECRET || '!2sAWQ4$fT%67GDV{e4%WAQ"=8'

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    //Get params
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'POST':
            try {
                const { user, password } = req.body;

                const existUser = await User.find({ user: user }).select('user password');

                if (existUser.length === 0) {
                    return res.status(200).json({ success: false, message: "Not Content User" });
                }

                const isTrue = await comparePassword(password, existUser[0].password);
                if (isTrue) {
                    const token = jwt.sign({ id: existUser[0]._id }, SECRET, { expiresIn: 86400 });

                    return res.status(201).json({ success: true, message: "OK", token, data: existUser[0] })
                }
                return res.status(200).json({ success: false, message: "Incorrect Password" });
            } catch (error: any) {
                res.status(400).json({ success: false, error: error ? error?.message : '' })
            }
            break
        default:
            res.status(400).json({ success: false, error: "Invalid Method" })
            break
    }
}