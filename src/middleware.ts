import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'
import {getSession} from "./app/action";

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const session = await getSession()
    if (!session && path !== "/login") {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    if (session && session.token && path == "/login") {
        return NextResponse.redirect(new URL('/building', request.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher: [
        '/',
        '/building',
        '/login'
    ]
}