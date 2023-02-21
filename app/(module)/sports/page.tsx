import React from 'react'
import ArticleList from '@/components/articleList'
import { NewsData } from 'model/news'
import { fetchNewsSports } from '@/util/news.util'
import styles from '../common.module.css'

export default function Sports() {
  const { data }: NewsData = fetchNewsSports()
  return (
    <div className={styles.grid}>
        <ArticleList data={data} url={`/sports/`}/>
    </div>    
  )
}
