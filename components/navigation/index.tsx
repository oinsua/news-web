"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './nav.module.css'
import classNames from 'classnames';
import MenuList from 'data/menu.json';

export default function Nav() {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
     setOpen(open => !open);
  }

  const handleClose = () => {
    setTimeout(() => {
        setOpen(false)
    }, 500)
  }

  return (
    <div className={styles.navContainer}>
        <div className={styles.topBar}>
            <div className={styles.iconMenu} id="icon-menu" onClick={handleClick}>
                <div className={ classNames( styles.bar, open ? styles.barShow : '')} id="bar">

                </div>
                <div className={classNames(styles.close, open ? styles.closeShow : '' )} id="closeMenu">

                </div>
            </div>
        </div>
        <nav className={ classNames(styles.nav, open ? styles.navShow : '')}>
            <ul className={ classNames(styles.menu, open ? styles.menuShow : '')} id="main-menu">
               {
                MenuList.map((menu, index) => (
                    <li key={`${menu.item}-${index}`} className={styles.menuItem} onClick={handleClose}><Link href={menu.href} className={styles.menuLink}>{menu.item}</Link></li>
                ))
                }
            </ul>
        </nav>
   </div>
  )
}
