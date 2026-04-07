import { IPaginationDetail } from '@/types/pagination'

export const mappingFilters = (value: Record<string, any>) => {
    const filters: IPaginationDetail[] = []
    for (const [k, v] of Object.entries(value)) {
        if (!v) continue

        filters.push({ key: k, value: v })
    }
    return filters
}
