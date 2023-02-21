import React from 'react'
import DetailsNews from '@/components/details';
import styles from '../../common.module.css'
import { News } from 'model/news' 
import { fetchNewsId } from '@/util/news.util';
import science from 'data/science.json'

type props = {
    params: {
        id: string;
    }
};

export default function DetailsScience({params}:props) {
    const { id } = params
    const { data } = science
    const itemNew: News = fetchNewsId({id, data})
  return (
    <div className={styles.gridID}> 
      <DetailsNews itemNew={itemNew} />
     </div>
  )
}