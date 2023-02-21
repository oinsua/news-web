import classNames from 'classnames';
import Image from 'next/image';
import React from 'react'
import styles from './details.module.css'
import { Inter } from '@next/font/google'
import { News } from 'model/news' 
import DefaultImage from 'asset/jpg/defaultImage.jpg'

type props = {
    itemNew: News;
};

const inter = Inter({ subsets: ['latin'] })

export default function DetailsNews({itemNew}: props) {

  return (
     <div className={styles.containerDetails}>
        <article className={classNames(inter.className,styles.card)} key={itemNew.title} >
            <div className={styles.wrapper}>
                <div className={styles.wrapperTitle}>
                    <h3 className={inter.className}>
                        {itemNew.title}
                    </h3>
                    <div className={styles.wrapperData}>
                      <span className={styles.textItaic}>Author: {itemNew.author}</span>
                      <span className={styles.textItaic}>Source: {itemNew.source}</span>
                      <span className={styles.textItaic}>Category: {itemNew.category}</span>
                      <span className={styles.textItaic}>Languge: {itemNew.language}</span>
                      <span className={styles.textItaic}>Country: {itemNew.country}</span>
                      <span className={styles.textItaic}>Date Published: {itemNew.published_at}</span>
                    </div>
                </div>
                <div>
                    <Image src={itemNew.image || DefaultImage} alt={`Img News`} height={150} width={150} className={styles.images} />
                </div>
            </div> 
            <div className={styles.wrapperShow}>
              <span className={styles.textItaic}>Author: {itemNew.author}</span>
              <span className={styles.textItaic}>Source: {itemNew.source}</span>
              <span className={styles.textItaic}>Category: {itemNew.category}</span>
              <span className={styles.textItaic}>Languge: {itemNew.language}</span>
              <span className={styles.textItaic}>Country: {itemNew.country}</span>
              <span className={styles.textItaic}>Date Published: {itemNew.published_at}</span>
            </div>
                <p className={styles.description}>
                    {itemNew.description}
                </p>
                <h6 className={styles.wrapperRead}>
                    <span className={styles.arrow}>-&gt;</span> 
                    <a href={itemNew.url || '#'} target='_blank' rel="noopener noreferrer" >
                            <span className={styles.readMore}>Read More...</span>
                    </a>
                </h6>
            </article>
    </div>
  )
}
