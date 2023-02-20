"use client"
import React from 'react'
import styles from './logout.module.css'
import { useRouter } from 'next/navigation'

export default function Logout() {
    const router = useRouter()
  return (
    <div className={styles.continerLogout}>
        <span className={styles.logout} onClick={() => router.push('/')}>Logout</span>
    </div>
  )
}
