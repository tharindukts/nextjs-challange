"use client"
import errorImage from '../../public/errorimage.png'
import Image from "next/image";

export default function Error({error, reset}: {
    error: Error & { digest?: string }
    reset: () => void
}) {


    return (
        <div className="flex flex-col items-center content-center justify-center h-full" style={{height: '100vh'}}>
            <div className=" text-center p-5" style={{width: '50%'}}>
                <div className="flex justify-center">
                    <Image src={errorImage} style={{width: '50%'}}/>
                </div>

                <h2 className="text-2xl font-bold mb-4">{error.message}</h2>
                <button
                    onClick={reset}
                    className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Try again
                </button>
            </div>
        </div>
    )
}