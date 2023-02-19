export interface NewsData {
    _type: string;
    totalCount: number;
    value: News[];
}

export interface News {
    id: string;
    title: string;
    url: string;
    description: string;
    body: string;
    snippet: string;
    language: string;
    isSafe: boolean;
    datePublished: string;
    provider: any[];
    image: any[];
}