import { WithContext, Thing } from 'schema-dts'

interface Props {
    data: WithContext<Thing>
}

export default function StructuredData({ data }: Props) {
    return (
        // eslint-disable-next-line @next/next/no-head-element
        <head>
            <script
                id="webPage"
                key="structured-data"
                type="application/ld+json"
                // eslint-disable-next-line @typescript-eslint/naming-convention
                dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
            />
        </head>
    )
}
