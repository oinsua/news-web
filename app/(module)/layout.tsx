import React from 'react'
import Header from 'components/header'
import Footer from '@/components/footer'
import Search from '@/components/Search'

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <>
    <Header />
    <Search />
    {
        children
    }
    <Footer />
    </>
  )
}
