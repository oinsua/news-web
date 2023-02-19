import React from 'react'
import styles from './header.module.css'
import Image from 'next/image'
import Nav from '../navigation'

export default function Header() {
  return (
    <>
    <header className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.containerLogo}>
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={140}
              height={30}
              priority
            />
          </div>
          <Nav />
        </div>
      </header>
    </>
  )
}
