"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import styles from './button.module.css'

export default function Button() {

    const router  = useRouter()

    const handleClick = () => {
      router.push('/home')
    }

  return (
    <>
     <button type='button' onClick={handleClick} className={styles.buttonLogin}>Login</button>
    </>
  )
}
