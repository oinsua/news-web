import React from 'react'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from './find.module.css'
import classNames from 'classnames'
import { News } from 'model/news'

const inter = Inter({ subsets: ['latin'] })

type props = {
    result: News[]
}

export default function Find({result}:props) {

  return (
   <>
    <h4 style={{marginTop: "1rem"}}>Search Results</h4>
    <div className={classNames(styles.grid, styles.gridWrapper)}>
    {
       result.map(({ id, author, title, description, category, published_at}:News) => (
            <article className={classNames(inter.className,styles.card)} key={id} >
                <div className={styles.wrapperTitle}>
                    <h3 className={inter.className}>
                        {title}
                    </h3>
                </div>
                <span className={styles.textItaic}>Author: {author}</span>
                <span className={styles.textItaic}>Date Published: {published_at}</span>
                <p className={styles.description}>
                    {description}
                </p>
                <h6 className={styles.wrapperRead}>
                    <span className={styles.arrow}>-&gt;</span> 
                    <Link href={`${category}/[id]`} as={`${category}/${id}`}>
                            <span className={styles.readMore}>Read More ...</span>
                    </Link>
                </h6>
            </article>
        ))
    }
    </div>
    </>
  )
}
