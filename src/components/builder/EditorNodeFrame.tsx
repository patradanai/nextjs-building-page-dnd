// 'use client'

// import React from 'react'

// import { useBuilder } from '@/lib/builder-context'

// type Props = {
//     nodeId: string
//     children: React.ReactNode
// }

// export function EditableNodeFrame({ nodeId, children }: Props) {
//     const { selectedNodeId, setSelectedNodeId } = useBuilder()
//     const isSelected = selectedNodeId === nodeId

//     return (
//         <div
//             onClick={(e) => {
//                 e.stopPropagation()
//                 setSelectedNodeId(nodeId)
//             }}
//             className={`relative rounded ${
//                 isSelected
//                     ? 'ring-2 ring-blue-500'
//                     : 'hover:ring-1 hover:ring-blue-300'
//             }`}
//         >
//             {isSelected && (
//                 <div className="absolute -top-6 left-0 z-10 rounded bg-blue-600 px-2 py-1 text-xs text-white">
//                     {nodeId}
//                 </div>
//             )}
//             {children}
//         </div>
//     )
// }
