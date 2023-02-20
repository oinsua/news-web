import React from 'react'
import { Inter } from '@next/font/google'
import styles from './article.module.css'
import classNames from 'classnames'
import { News, NewsData } from 'model/news'
import { fetchNewsGeneral } from '@/util/news.util'
import DefaultImage from 'asset/jpg/defaultImage.jpg'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function ArticleList() {

    const { data }: NewsData = fetchNewsGeneral()

  return (
    <>
    {
       data.map(({ author, title, description, url, source, image, category, language, country, published_at}:News, index) => (
            <article className={classNames(inter.className,styles.card)} key={index} >
                <div className={styles.wrapperTitle}>
                    <h3 className={inter.className}>
                        {title}
                    </h3>
                    <Image src={image || DefaultImage} alt={`Img News`} height={80} width={80} className={styles.images} />
                </div>
                <span className={styles.textItaic}>Author: {author}</span>
                <span className={styles.textItaic}>Date Published: {published_at}</span>
                <p className={styles.description}>
                    {description}
                </p>
                <h6 className={styles.wrapperRead}>
                    <span className={styles.arrow}>-&gt;</span> 
                    <Link href={`/home/[id]`} as={`/home/${index}`}>
                            <span className={styles.readMore}>Leer Más ...</span>
                    </Link>
                </h6>
            </article>
        ))
    }
    </>
  )
}
