/*
getStaticProps =>  return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json());

getServerSideProps =>  return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
        .then(res => res.json());

Incremental Static Generation =>  return fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 60 } })
        .then(res => res.json());

*/
import axios from 'axios'
type Options = {
    method: string;
    params: {
        q: string;
        pageNumber: string;
        pageSize: string;
        autoCorrect: string;
        fromPublishedDate: string;
        toPublishedDate: string;
    },
    headers: {
        'X-RapidAPI-Key': string;
        'X-RapidAPI-Host': string;
    },
    next: { revalidate: number; }
}

export function fetchNewsSearch(): Promise<any> {

    /* const options: Options = {
        method: 'GET',
        params: {
            q: 'taylor swift',
            pageNumber: '1',
            pageSize: '10',
            autoCorrect: 'true',
            fromPublishedDate: 'null',
            toPublishedDate: 'null'
        },
        headers: {
            'X-RapidAPI-Key': process.env.XRapidAPIKey || '',
            'X-RapidAPI-Host': process.env.XRapidAPIHost || ''
        },
        next: { revalidate: 60 }
    }
    return fetch("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI", options)
        .then(res => res.json()); */
    const options = {
        method: 'GET',
        url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
        params: {
            q: 'taylor swift',
            pageNumber: '1',
            pageSize: '10',
            autoCorrect: 'true',
            fromPublishedDate: 'null',
            toPublishedDate: 'null'
        },
        headers: {
            'X-RapidAPI-Key': process.env.XRapidAPIKey || '',
            'X-RapidAPI-Host': process.env.XRapidAPIHost || ''
        }
    };

    return axios.request(options).then(function (response) {
        console.log(response.data);
        return response.data
    }).catch(function (error) {
        console.error(error);
    });
};