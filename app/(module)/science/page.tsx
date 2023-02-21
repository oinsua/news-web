import React from 'react'
import ArticleList from '@/components/articleList'
import { NewsData } from 'model/news'
import { fetchNewsScience } from '@/util/news.util'
import styles from '../common.module.css'

export default function Science() {
  const { data }: NewsData = fetchNewsScience()
  return (
    <>
      <h2>Science</h2>
      <div className={styles.grid}>
          <ArticleList data={data} url={`/science/`}/>
      </div>
    </>    
  )
}
