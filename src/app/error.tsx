"use client"
import { useEffect } from 'react'

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string }
    reset: () => void
}) {


    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl font-bold mb-4">{error.message}</h2>
            <button
                onClick={reset}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Try again
            </button>
        </div>
    )
}