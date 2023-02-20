export interface NewsData {
    _type?: string;
    totalCount?: number;
    value?: News[];
    data?: {
        message?: string;
    }
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
    image: {
        url: string;
        height: number;
        width: number;
        thumbnail: string;
        thumbnailHeight: number;
        thumbnailWidth: number;
        base64Encoding: string;
        name: string;
        title: string;
        provider: { name: string; favIcon: string; favIconBase64Encoding: string; };
        webpageUrl: string;
    };
}