import axios from 'axios'

type Options = {
    method: string;
    url: string;
    access_key?: string;
    categories?: string;
    countries?: string;
    languages?: string;
    sort?: string;
    next: { revalidate: number; }
}

type props = {
    category: string
}

export function fetchNewsSearch({ category }: props): Promise<any> {

    const options: Options = {
        method: 'GET',
        url: `http://api.mediastack.com/v1/news?access_key=${process.env.APIKEY || ''}&categories=${category}&countries=us&languages=en&sort=popularity`,
        next: { revalidate: 60 }
    };

    return axios.request(options).then(function (response) {
        return response.data
    }).catch(function (error) {
        console.error(error);
    });
};