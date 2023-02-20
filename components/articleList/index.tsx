import React from 'react'
import { fetchNewsSearch } from 'services/fetchRapidAPI'
import { Inter } from '@next/font/google'
import styles from './article.module.css'
import classNames from 'classnames'
import { News, NewsData } from 'model/news'

const inter = Inter({ subsets: ['latin'] })

export default async function ArticleList() {
    const items: NewsData = await fetchNewsSearch();
  return (
    <>
    {
       items?.value ? 
       items?.value.map(({ id, title, url, description, body, snippet, datePublished, image}:News) => (
            <article className={classNames(inter.className,styles.card)} key={id} >
                <div className={styles.wrapperTitle}>
                    <h3 className={inter.className}>
                        {title}
                    </h3>
                    <img src={image.url} alt={`Img News`} className={styles.images} />
                </div>
                <span className={styles.textItaic}>Date Published: {datePublished}</span>
                <p className={styles.description}>
                    {description}
                </p>
                <h6 className={styles.wrapperRead}>
                    <span className={styles.arrow}>-&gt;</span> 
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <span className={styles.readMore}>Leer Más ...</span>
                    </a>
                </h6>
            </article>
        ))
        :
        <article>You have exceeded the rate limit per second for your plan, BASIC, by the API provider</article>
    }
    </>
  )
}
