import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const { TokenExpiredError } = jwt;

    const catchError = (err: any, res: any) => {
        if (err instanceof TokenExpiredError) {
            return res.status(401).send({ message: "Unauthorized! Access Token was expired!" });
        }

        return res.sendStatus(401).send({ message: "Unauthorized!" });
    }

    let token = request.headers["x-access-token"];

    if (!token) {
        return new NextResponse(
            JSON.stringify({ success: false, message: 'No token provided!' }),
            { status: 403, headers: { 'content-type': 'application/json' } }
        )
    }

    jwt.verify(token, process.env.SECRET || '', (err: any, decoded: any) => {
        if (err) {
            return catchError(err, NextResponse);
        }
        request.userId = decoded.id;
        return NextResponse.rewrite(new URL('/api/search', request.url))
    });

}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/api',
}