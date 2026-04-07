import React from 'react'

interface Props {
    children: React.ReactNode
}
const Paragraph: React.FC<Props> = ({ children }) => {
    return <p className="my-4 text-base text-gray-700">{children}</p>
}
export default Paragraph
