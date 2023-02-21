import React from 'react'
import Header from 'components/header'
import Footer from '@/components/footer'
import Search from '@/components/Search'
import styles from './layout.module.css'

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <>
    <Header />
    <Search />
    <div className={styles.main}>  
    {
        children
    }
    </div>
    <Footer />
    </>
  )
}
