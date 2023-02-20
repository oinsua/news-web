import { fetchNewsSearch } from "@/services/fetchRapidAPI"
import fs from 'fs-extra'
import general from 'data/general.json';

const categories = ['general', 'business', 'entertainment', 'science', 'sports', 'technology']

export const CreateNewsFile = () => {

    categories.map(async (category) => {
        const items = await fetchNewsSearch({ category });
        await fs.writeJson(`data/${category}.json`, items);
    })
}

export const fetchNewsGeneral = () => {
    return general
}