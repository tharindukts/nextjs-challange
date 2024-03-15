"use server";
import axios from "axios";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import NextCrypto from "next-crypto";
import {revalidatePath} from "next/cache";

const CRYPTO_KEY = process.env.CRYPTO_KEY;

export async function handleLogin(formData: FormData) {
    let isResponseSuccess = false;
    try {
        const response = await axios.post(process.env.TOKEN_FETCH_URL, {
            email: formData.get("email"),
            pin: formData.get("pin"),
        });
        const crypto = new NextCrypto(CRYPTO_KEY);

        const encrypted = await crypto.encrypt(JSON.stringify(response.data));
        cookies().set("session" as any, encrypted as any);
        isResponseSuccess = true;

    } catch (err) {
        isResponseSuccess = false;

        if (err.response) {
            throw new Error(err.response.data.errorMessage);
        } else {
            throw new Error("Something went wrong");
        }

    } finally {
        if (isResponseSuccess)
            redirect("/");
    }

}

export async function deleteSession() {
    cookies().delete("session" as any);
    redirect("/login");
}

export async function getSession() {
    const crypto = new NextCrypto(CRYPTO_KEY);

    const sessionData = cookies().get("session" as any);
    if (sessionData) {
        const decrypted = await crypto.decrypt(JSON.stringify(sessionData.value));
        if (decrypted != null)
            return JSON.parse(decrypted);
    }
}
export async function revalidateBuildingData() {
    revalidatePath("/building");
}


