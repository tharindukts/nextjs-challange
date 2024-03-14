"use server"
import axios from "axios";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import NextCrypto from 'next-crypto';

const CRYPTO_KEY = '/1qBgbxzswO8/67OuXqld7Cmjl7uQWPap93iLTeMruZS3Er24R7LlFt3yl1czast'

export async function handleLogin(formData: FormData) {
    let isResponseSuccess = false
    try {
        const response = await axios.post('https://jym3r82vt6.execute-api.ap-southeast-2.amazonaws.com/dev/auth/create', {
            email: formData.get('email'),
            pin: formData.get('pin'),
        })
        const crypto = new NextCrypto(CRYPTO_KEY);

        const encrypted = await crypto.encrypt(JSON.stringify(response.data));
        cookies().set('session' as any, encrypted as any)
        isResponseSuccess = true

    } catch (err) {
        isResponseSuccess = false

        if (err.response.data) {
            throw new Error(err.response.data.errorMessage)
        } else {
            throw new Error("Something went wrong")
        }

    } finally {
        if (isResponseSuccess)
            redirect('/building')
    }

}

export async function deleteSession() {
    cookies().delete('session' as any)
    redirect('/login')
}

export async function getSession() {
    const crypto = new NextCrypto(CRYPTO_KEY);

    const sessionData = cookies().get('session' as any)
    if (sessionData) {
        const decrypted = await crypto.decrypt(JSON.stringify(sessionData.value));
        if (decrypted != null)
            return JSON.parse(decrypted)
    }

}

