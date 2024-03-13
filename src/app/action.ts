"use server"
import axios from "axios";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

export async function handleLogin(formData: FormData) {
    let isResponseSuccess = false
    try {
        const response = await axios.post('https://jym3r82vt6.execute-api.ap-southeast-2.amazonaws.com/dev/auth/create', {
            email: formData.get('email'),
            pin: formData.get('pin'),
        })
        // const encryptedSessionData = await encrypt(response.data)

        cookies().set('session' as any, JSON.stringify(response.data) as any)
        isResponseSuccess = true

    } catch (err) {
        isResponseSuccess = false

        if(err.response.data){
            throw new Error(err.response.data.errorMessage)
        }else{
            throw new Error("Something went wrong")
        }

    } finally {
        if (isResponseSuccess)
            redirect('/building')
    }

}