import React from 'react'
import ArticleList from '@/components/articleList'
import { NewsData } from 'model/news'
import { fetchNewsTechnology } from '@/util/news.util'
import styles from '../common.module.css'

export default function Technology() {
  const { data }: NewsData = fetchNewsTechnology()
  return (
    <>
      <h2>Technology</h2>
      <div className={styles.grid}>
          <ArticleList data={data} url={`/technology/`}/>
      </div> 
    </>   
  )
}
