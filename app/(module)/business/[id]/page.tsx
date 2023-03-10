import React from 'react'
import DetailsNews from '@/components/details';
import styles from '../../common.module.css'
import { News } from 'model/news' 
import { fetchNewsId } from '@/util/news.util';
import business from 'data/business.json'
import Link from 'next/link';

type props = {
    params: {
        id: string;
    }
};

export default function DetailsBusiness({params}:props) {
    const { id } = params
    const { data } = business
    const itemNew: News = fetchNewsId({id, data})
  return (
    <div className={styles.gridID}> 
      <h4><Link href={`/business`}>Business</Link> - Details  </h4> 
      <DetailsNews itemNew={itemNew} />
     </div>
  )
}