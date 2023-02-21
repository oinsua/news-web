import React from 'react'
import { Inter } from '@next/font/google'
import styles from './article.module.css'
import classNames from 'classnames'
import { News } from 'model/news'
import DefaultImage from 'asset/jpg/defaultImage.jpg'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

type props = {
    data: News[];
    url: string;
}

export default function ArticleList({ data, url }: props) {

  return (
    <>
    {
       data.map(({ author, title, description, image, published_at}:News) => (
            <article className={classNames(inter.className,styles.card)} key={title} >
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
                    <Link href={`${url}[id]`} as={`${url}${title?.replace(/ /g, "")}`}>
                            <span className={styles.readMore}>Read More ...</span>
                    </Link>
                </h6>
            </article>
        ))
    }
    </>
  )
}
