import React from 'react'
import DetailsNews from '@/components/details';
import styles from '../../common.module.css'
import { News } from 'model/news' 
import { fetchNewsId } from '@/util/news.util';
import technology from 'data/technology.json'
import Link from 'next/link';

type props = {
    params: {
        id: string;
    }
};

export default function DetailsTechnology({params}:props) {
    const { id } = params
    const { data } = technology
    const itemNew: News = fetchNewsId({id, data})
  return (
      <div className={styles.gridID}> 
        <h4><Link href={`/technology`}>Technology</Link> - Details  </h4>
        <DetailsNews itemNew={itemNew} />
      </div>
  )
}