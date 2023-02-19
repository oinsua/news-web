import React from 'react'
import Image from 'next/image'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.container}>
         <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
    </footer>
  )
}
