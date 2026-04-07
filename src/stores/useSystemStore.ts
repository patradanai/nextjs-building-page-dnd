import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

// Define the store state types
interface ErrorState {
    message: string
    code?: string | number
    details?: any
}

interface SystemState {
    // Error state
    errors: ErrorState[]
    isErrorModalOpen: boolean

    // Error actions
    addError: (error: ErrorState) => void
    clearErrors: () => void
    openErrorModal: () => void
    closeErrorModal: () => void

    // Helper to wrap functions with error handling
    withErrorHandling: <T extends (...args: any[]) => any>(
        fn: T
    ) => (...args: Parameters<T>) => Promise<ReturnType<T> | undefined>
}

// Create the system store
export const useSystemStore = create<SystemState>()(
    devtools(
        (set, get) => ({
            // Initial state
            errors: [],
            isErrorModalOpen: false,

            // Error management actions
            addError: (error) =>
                set((state) => ({
                    errors: [...state.errors, error],
                    isErrorModalOpen: true,
                })),

            clearErrors: () => set({ errors: [] }),

            openErrorModal: () => set({ isErrorModalOpen: true }),

            closeErrorModal: () => set({ isErrorModalOpen: false }),

            // Helper function to wrap any async function with error handling
            withErrorHandling:
                (fn) =>
                async (...args) => {
                    try {
                        return await fn(...args)
                    } catch (error) {
                        // Process the error - could be an Error object, a string, or something else
                        const errorState: ErrorState = {
                            message:
                                error instanceof Error
                                    ? error.message
                                    : typeof error === 'string'
                                      ? error
                                      : 'An unknown error occurred',
                            details: error,
                        }

                        // Add the error to the store
                        get().addError(errorState)

                        // Return undefined or you could choose to re-throw
                        return undefined
                    }
                },
        }),
        {
            name: 'system-store',
        }
    )
)
