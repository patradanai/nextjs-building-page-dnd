import React from 'react'

interface Props {
    children: React.ReactNode
}
const UnorderedList: React.FC<Props> = ({ children }) => {
    return (
        <ul className="my-4 list-disc text-base text-pink-600">{children}</ul>
    )
}
export default UnorderedList
