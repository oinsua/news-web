import React from 'react'
import styles from './header.module.css'
import Image from 'next/image'
import Nav from '../navigation'
import Logout from '../logout'
import Link from 'next/link'

export default function Header() {
  return (
    <>
    <header className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.containerLogo}>
            <Link href={`/home`}></Link>
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
        <Logout />
      </header>
    </>
  )
}
