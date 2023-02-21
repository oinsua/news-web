import React from 'react'
import DetailsNews from '@/components/details';
import styles from '../../common.module.css'
import { News } from 'model/news' 
import { fetchNewsId } from '@/util/news.util';
import entertainment from 'data/entertainment.json'
import Link from 'next/link';

type props = {
    params: {
        id: string;
    }
};

export default function DetailsEntertainment({params}:props) {
    const { id } = params
    const { data } = entertainment
    const itemNew: News = fetchNewsId({id, data})
  return (
    <div className={styles.gridID}> 
      <h4><Link href={`/entertainment`}>Entertainment</Link> - Details  </h4> 
      <DetailsNews itemNew={itemNew} />
     </div>
  )
}