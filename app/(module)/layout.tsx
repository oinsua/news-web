import React from 'react'
import Header from 'components/header'
import Footer from '@/components/footer'
import styles from './layout.module.css'
import Panel from '@/components/panel'

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <>
    <Header />
    <Panel />
    <div className={styles.main}>  
    {
        children
    }
    </div>
    <Footer />
    </>
  )
}
