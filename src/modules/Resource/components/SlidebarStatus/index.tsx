interface Props {
    id: string
    published: string
    createdAt: string
}

const SidebarStatus: React.FC<Props> = ({ id, createdAt, published }) => {
    return (
        <div className="min-h-screen w-[30%] p-5">
            <div className="flex flex-col">
                <div className="mb-5 font-bold">Information</div>
                <ul className="flex flex-col gap-3">
                    <li className="flex items-center">
                        <p className="flex-1 text-black">Id</p>
                        <span className="inline-flex items-center justify-center">
                            {id}
                        </span>
                    </li>
                    <li className="flex items-center">
                        <p className="flex-1 text-black">Created</p>
                        <span className="inline-flex items-center justify-center">
                            {createdAt}
                        </span>
                    </li>
                    <li className="flex items-center">
                        <p className="flex-1 text-black">Published</p>
                        <span className="inline-flex items-center justify-center">
                            {published}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SidebarStatus
