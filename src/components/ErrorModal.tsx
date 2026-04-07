'use client'
import { useEffect } from 'react'

import { useSystemStore } from '@/stores/useSystemStore'

const ErrorModal = () => {
    const { errors, isErrorModalOpen, closeErrorModal, clearErrors } =
        useSystemStore()

    // Close modal with escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isErrorModalOpen) {
                closeErrorModal()
            }
        }

        window.addEventListener('keydown', handleEscape)
        return () => window.removeEventListener('keydown', handleEscape)
    }, [isErrorModalOpen, closeErrorModal])

    // If modal is not open or no errors, don't render
    if (!isErrorModalOpen || errors.length === 0) {
        return null
    }

    const handleClose = () => {
        closeErrorModal()
        // Optionally clear errors when closing
        // clearErrors();
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="mx-4 w-full max-w-md rounded-lg bg-white p-6">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-red-600">Error</h2>
                    <button
                        onClick={handleClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        ×
                    </button>
                </div>

                <div className="max-h-60 overflow-y-auto">
                    {errors.map((error, index) => (
                        <div
                            key={index}
                            className="mb-3 border-b border-gray-200 pb-3 last:border-b-0"
                        >
                            <p className="font-medium">{error.message}</p>
                            {error.code && (
                                <p className="text-sm text-gray-600">
                                    Code: {error.code}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-4 flex justify-end">
                    <button
                        onClick={handleClose}
                        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ErrorModal
