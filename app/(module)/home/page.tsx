import ArticleList from '@/components/articleList'
import styles from './home.module.css'

export default async function Home() {
  
  return (
    <div className={styles.main}>
      <div className={styles.grid}>
        <ArticleList />    
      </div>
    </div>
  )
}
