import React from 'react'
import Image from 'next/image'
import styles from './social.module.css'
import twitter from 'asset/svg/twitter.svg'
import instagram from 'asset/svg/instagram.svg'
import facebook from 'asset/png/facebook.png'

export default function SocialNetwork() {
  return (
    <>
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
    </>
  )
}
