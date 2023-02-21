import Image from 'next/image'
import React from 'react'
import styles from './panel.module.css'
import search from 'asset/svg/search.svg'
import SocialNetwork from '../socialNetwork'
import Link from 'next/link'

export default function Panel() {

  return (
    <div className={styles.container}>
        <div className={styles.wrapperSearch}>
            <Link href={`/search`}><h4>Search Article</h4></Link>
            <div className={styles.IconSearch}>
                <Image src={search} alt="Icon Search" width={20} height={20}/>
            </div>
        </div>
        <SocialNetwork />
    </div>
  )
}