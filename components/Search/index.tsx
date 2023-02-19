"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './search.module.css'
import twitter from 'asset/svg/twitter.svg'
import instagram from 'asset/svg/instagram.svg'
import facebook from 'asset/png/facebook.png'
import search from 'asset/svg/search.svg'
import classNames from 'classnames'

export default function Search() {
    const [active, setActive] = useState(false);

  return (
    <div className={styles.container}>
        <div className={ classNames(styles.wrapperSearch, active ? styles.wrapperSearchActive : '')}>
            <form>
                <input type="text" placeholder='Search..' className={styles.formInput} onFocus={() => setActive(true)} onBlur={() => setActive(false)} />
            </form>
            <div className={styles.IconSearch}>
                <Image src={search} alt="Icon Search" width={20} height={20}/>
            </div>
        </div>
        <div  className={styles.socialNetwork}>
            <div className={styles.wrapperImg}>
                <a href={`https://www.facebook.com/WixEspanol`} >
                    <Image src={facebook} alt="Icon Facebook" width={30} height={30} />
                </a>
            </div>
            <div className={styles.wrapperImg}>
                <a href={`https://twitter.com/MundoWix`}>
                    <Image src={twitter} alt="Icon Twitter" width={30} height={30} />
                </a>
            </div>
            <div className={styles.wrapperImg}>
                <a href={`https://www.instagram.com/wix`}>
                    <Image src={instagram} alt="Icon Instagram " width={30} height={30} />
                </a>
            </div>
        </div>
    </div>
  )
}
