export const Heading = {
    H1: ({ children }: { children: React.ReactNode }) => (
        <div className="my-2 border-y border-yellow-500">
            <h1 className="text-2xl font-bold">{children}</h1>
        </div>
    ),
    H2: ({ children }: { children: React.ReactNode }) => (
        <div className="my-2 border-y border-yellow-500">
            <h2 className="text-xl font-bold">{children}</h2>
        </div>
    ),
    H3: ({ children }: { children: React.ReactNode }) => (
        <div className="my-2 border-y border-yellow-500">
            <h2 className="text-xl font-bold">{children}</h2>
        </div>
    ),
}
