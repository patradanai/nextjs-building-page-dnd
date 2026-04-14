import React from 'react'

import { MySwal } from '@/lib/sweetalert'

interface Props {
    handlerDelete: () => void
}

const ModalDelete = async ({ handlerDelete }: Props): Promise<void> => {
    return await MySwal.fire({
        title: <p>กรุณายืนยันเพื่อลบ</p>,
        showConfirmButton: true,
        showCancelButton: true,
    }).then((result) => {
        if (result.isConfirmed) {
            handlerDelete?.()
        }
    })
}

export default ModalDelete
