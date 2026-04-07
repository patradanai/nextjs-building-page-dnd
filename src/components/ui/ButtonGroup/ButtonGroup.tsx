import React from 'react'

import { NextPage } from 'next'

/**
 *
 * ButtonGroup
 *
 */

interface Props {
    children?: React.ReactNode
}

const ButtonGroup: NextPage<Props> = ({ children }) => {
    return <div className="shadow-xs inline-flex rounded-md">{children}</div>
}

export default ButtonGroup
