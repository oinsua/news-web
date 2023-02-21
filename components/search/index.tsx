"use client"
import React, { useRef, useState } from 'react'
import styles from './search.module.css'
import classNames from 'classnames'
import Find from '../find'

export default function SearchComponent() {
    const [active, setActive] = useState(false)
    const [result, setResult] = useState([])
    const searchRef = useRef(null)

    const handleChange = () => {
        const keyword = searchRef.current?.value || ''

        fetch(`/api/search?keyword=${keyword}`)
            .then(res => res.json())
            .then(data => {
                setResult(data.hits)
            })
    }

  return (
    <>
        <div className={styles.container}>
            <div className={ classNames(styles.wrapperSearch, active ? styles.wrapperSearchActive : '')}>
                <form>
                    <input ref={searchRef} type="text" placeholder='Search..' className={styles.formInput} onFocus={() => setActive(true)} onBlur={() => setActive(false)} onChange={handleChange} />
                </form>
            </div>
        </div>
        <Find result={result} />
    </>
  )
}
