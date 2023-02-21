import React from 'react'
import ArticleList from '@/components/articleList'
import { NewsData } from 'model/news'
import { fetchNewsBusiness } from '@/util/news.util'
import styles from '../common.module.css'

export default function Business() {
  const { data }: NewsData = fetchNewsBusiness()
  return (
    <div className={styles.grid}>
        <ArticleList data={data} url={`/business/`}/>
    </div>    
  )
}
