import React from 'react'

import { NextPage } from 'next'

interface Props {
    size: number
}

// TODO: Spacer Size
const Spacer: NextPage<Props> = ({ size }) => {
    return <div style={{ height: size }} />
}

export default Spacer
