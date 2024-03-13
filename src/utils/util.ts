import {cookies} from "next/headers";

export function getSession() {
    const sessionData = cookies().get('session' as any)
    return sessionData?JSON.parse(sessionData.value) : ""
}

export function logout() {
    return cookies().delete('session' as any)
}
