import algoliasearch from 'algoliasearch/lite'
import type { NextApiRequest, NextApiResponse } from 'next'

//Get enviroment variables
const APPIDALGOLIA = process.env.APPIDALGOLIA || ''
const SearchOnlyAPIKey = process.env.SearchOnlyAPIKey || ''
const IndexName = process.env.IndexName || ''

// Connect and authenticate with your Algolia app
const client = algoliasearch(APPIDALGOLIA, SearchOnlyAPIKey)

// Create a new index and add a record
const index = client.initIndex(IndexName)

type Data = {
    success?: Boolean;
    error?: string;
    hits?: any;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    //Get params
    const { method } = req

    switch (method) {
        case 'GET':
            try {
                const { keyword = '' } = req.query

                // Search the index and print the results
                const { hits } = await index.search(keyword.toString(), {
                    attributesToRetrieve: ['id', 'title', 'description', 'category', 'author', 'published_at'],
                    hitsPerPage: 10
                })

                res.status(200).json({ success: true, hits })
            } catch (error: Error | any) {
                res.status(400).json({ success: false, error: error ? error?.message : '' })
            }
            break
        default:
            res.status(400).json({ success: false, error: "Invalid Method" })
            break
    }

}


