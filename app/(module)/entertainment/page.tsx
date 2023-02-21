import React from 'react'
import ArticleList from '@/components/articleList'
import { NewsData } from 'model/news'
import { fetchNewsEntertainment } from '@/util/news.util'
import styles from '../common.module.css'

export default function Entertainment() {
  const { data }: NewsData = fetchNewsEntertainment()
  return (
    <div className={styles.grid}>
        <ArticleList data={data} url={`/entertainment/`}/>
    </div>    
  )
}
