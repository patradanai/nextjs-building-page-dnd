const addCommas = (num: any) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
const removeComma = (num: any) => num.toString().replace(/[/,]/g, '')
export const removeNonNumeric = (num: any) => {
    if (num === undefined || num === null) return

    return num.toString().replace(/[^0-9]/g, '')
}

export const numberWithCommas = (x: any): string => {
    if (x === undefined || x === null) return ''
    return addCommas(removeComma(x))
}
