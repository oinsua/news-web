import ArticleList from '@/components/articleList'
import { NewsData } from 'model/news'
import { fetchNewsGeneral } from '@/util/news.util'
import styles from '../common.module.css'

export default async function Home() {
  const { data }: NewsData = fetchNewsGeneral()
  return (
    <div className={styles.grid}>
        <ArticleList data={data} url={`/home/`}/>
    </div>    
  )
}
