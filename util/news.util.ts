import { fetchNewsSearch } from "@/services/fetchRapidAPI"
import fs from 'fs-extra'
import general from 'data/general.json'
import business from 'data/business.json'
import entertainment from 'data/entertainment.json'
import science from 'data/science.json'
import sports from 'data/sports.json'
import technology from 'data/technology.json'
import { News, NewsData } from "@/model/news";
import { uuid } from 'uuidv4';
const categories = ['general', 'business', 'entertainment', 'science', 'sports', 'technology']

type propsNews = {
    items: NewsData;
}

const addUUID = ({ items }: propsNews) => {
    const result = items?.data.map(item => {
        if (!item.hasOwnProperty('id')) {
            item.id = uuid()
        }
        return item
    })
    return {
        pagination: {
            limit: items.pagination?.limit,
            offset: items.pagination?.offset,
            count: items.pagination?.count,
            total: items.pagination?.total,
        },
        data: result
    }
}

type propsProperty = {
    category: string;
    items: NewsData;
}

export const addPropertyJson = async ({ category, items }: propsProperty) => {
    await fs.writeJson(`dataStore/${category}.json`, addUUID({ items }));
}

export const CreateNewsFile = () => {

    categories.map(async (category) => {
        const items = await fetchNewsSearch({ category });
        await fs.writeJson(`dataStore/${category}.json`, items);
    })
}

export const fetchNewsGeneral = () => {
    return general
}

export const fetchNewsBusiness = () => {
    return business
}

export const fetchNewsEntertainment = () => {
    return entertainment
}

export const fetchNewsScience = () => {
    return science
}

export const fetchNewsSports = () => {
    return sports
}

export const fetchNewsTechnology = () => {
    return technology
}

type props = {
    id: string;
    data: News[];
}

export const fetchNewsId = ({ id, data }: props) => {
    const item = data.find(item => item.id === id)
    const news: News = {
        author: item?.author || '',
        title: item?.title || '',
        description: item?.description || '',
        url: item?.url || '',
        source: item?.source || '',
        image: item?.image || '',
        category: item?.category || '',
        language: item?.language || '',
        country: item?.country || '',
        published_at: item?.published_at || '',
    }

    return news
}