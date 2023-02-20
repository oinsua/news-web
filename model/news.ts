export interface NewsData {
    pagination?: {
        limit: number;
        offset: number;
        count: number;
        total: number;
    };
    data: News[];
}

export interface News {
    author: string | null;
    title: string | null;
    description: string | null;
    url: string | null;
    source: string | null;
    image: string | null;
    category: string | null;
    language: string | null;
    country: string | null;
    published_at: string | null;
}