import { Inter } from '@next/font/google'
import classNames from 'classnames'
import styles from './home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  
  return (
    <div className={styles.main}>
      <div className={styles.grid}>
        <article className={styles.card} >
          <h3 className={inter.className}>
            Docs
          </h3>
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.Find in-depth information about Next.js features and API.Find in-depth information about Next.js features and API.Find in-depth information about Next.js features and API.Find in-depth information about Next.js features and API.Find in-depth information about Next.js features and API. 
          </p>
          <h6 className={classNames(inter.className, styles.wrapperRead) }>
            <span className={styles.arrow}>-&gt;</span> <span className={styles.readMore}>Leer Más ...</span>
          </h6>
        </article>
        
        <article className={styles.card} >
          <h3 className={inter.className}>
            Docs
          </h3>
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.Find in-depth information about Next.js features and API.Find in-depth information about Next.js features and API.Find in-depth information about Next.js features and API.Find in-depth information about Next.js features and API.Find in-depth information about Next.js features and API. 
          </p>
          <h6 className={classNames(inter.className, styles.wrapperRead) }>
            <span className={styles.arrow}>-&gt;</span> <span className={styles.readMore}>Leer Más ...</span>
          </h6>
        </article>

        <article className={styles.card} >
          <h3 className={inter.className}>
            Docs
          </h3>
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.Find in-depth information about Next.js features and API.Find in-depth information about Next.js features and API.Find in-depth information about Next.js features and API.Find in-depth information about Next.js features and API.Find in-depth information about Next.js features and API. 
          </p>
          <h6 className={classNames(inter.className, styles.wrapperRead) }>
            <span className={styles.arrow}>-&gt;</span> <span className={styles.readMore}>Leer Más ...</span>
          </h6>
        </article>       
      </div>
    </div>
  )
}
