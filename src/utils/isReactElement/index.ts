export const isReactElement = (obj: any, name?: string): boolean =>
    !!obj &&
    typeof obj !== 'boolean' &&
    typeof obj !== 'string' &&
    typeof obj !== 'number' &&
    typeof obj === 'object' &&
    !!obj.type &&
    (name
        ? !!obj.type?.displayName && obj.type.displayName === name
        : !!obj.type)
