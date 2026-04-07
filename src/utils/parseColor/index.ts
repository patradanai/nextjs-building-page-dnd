/////////////////////////////////////////////////////////////////////
// Change hex color into RGB /////////////////////////////////////////////////////////////////////
export const getRGBColor = (hex: string, type: string) => {
    const color = hex.replace(/#/g, '')
    // rgb values
    const r = parseInt(color.slice(0, 2), 16)
    const g = parseInt(color.slice(2, 4), 16)
    const b = parseInt(color.slice(4, 6), 16)

    return `--tw-color-${type}: ${r}, ${g}, ${b};`
}

export const getRGBColorNoPrefix = (hex: string) => {
    const color = hex.replace(/#/g, '')
    // rgb values
    const r = parseInt(color.slice(0, 2), 16)
    const g = parseInt(color.slice(2, 4), 16)
    const b = parseInt(color.slice(4, 6), 16)

    return `${r}, ${g}, ${b}`
}

/////////////////////////////////////////////////////////////////////
// Determine the accessible color of text
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// Determine the accessible color of text
/////////////////////////////////////////////////////////////////////
export const getAccessibleColor = (hex: string) => {
    const color = hex.replace(/#/g, '')
    // rgb values
    const r = parseInt(color.slice(0, 2), 16)
    const g = parseInt(color.slice(2, 4), 16)
    const b = parseInt(color.slice(4, 6), 16)
    const yiq = (r * 299 + g * 587 + b * 114) / 1000
    return yiq >= 128 ? '#000000' : '#FFFFFF'
}
