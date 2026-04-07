export const getBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onloadend = () => {
            resolve(reader.result)
        }

        reader.onerror = (err) => {
            reject(err)
        }
    })
}
