import React from 'react'
import DetailsNews from '@/components/details';
import styles from '../../common.module.css'
import { News } from 'model/news' 
import { fetchNewsId } from '@/util/news.util';
import technology from 'data/technology.json'

type props = {
    params: {
        id: string;
    }
};

export default function DetailsBusinnes({params}:props) {
    const { id } = params
    const { data } = technology
    const itemNew: News = fetchNewsId({id, data})
    console.log({id})
    console.log({data})
    console.log({itemNew})
  return (
    <div className={styles.gridID}> 
      <DetailsNews itemNew={itemNew} />
     </div>
  )
}