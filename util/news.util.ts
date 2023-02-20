import { fetchNewsSearch } from "@/services/fetchRapidAPI"
import fs from 'fs-extra'

const categories = ['business', 'entertainment', 'science', 'sports', 'technology']

export const CreateNewsFile = () => {

    categories.map(async (category) => {
        const items = await fetchNewsSearch({ category });
        await fs.writeJson(`data/${category}.json`, items);
    })
}