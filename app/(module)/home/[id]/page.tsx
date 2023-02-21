import React from 'react'
import DetailsNews from '@/components/details';
import styles from '../../common.module.css'
import { News } from 'model/news' 
import { fetchNewsId } from '@/util/news.util';
import general from 'data/general.json'

type props = {
    params: {
        id: string;
    }
};

export default function DetailsHome({params}:props) {
    const { id } = params
    const { data } = general
    const itemNew: News = fetchNewsId({id, data})
  return (
    <div className={styles.gridID}> 
      <DetailsNews itemNew={itemNew} />
     </div>
  )
}
