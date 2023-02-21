import Button from '@/components/button'
/* import { addPropertyJson, CreateNewsFile } from '@/util/news.util' */
import Image from 'next/image'
import styles from './page.module.css'
/* import general from 'data/general.json' */

export default async function Home() {
  /* await CreateNewsFile(); */
  /* await addPropertyJson({category: 'general', items: general}) */

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
        </div>
      </header>
    
    <main className={styles.main}>
      <form className={styles.formLogin}>
        <input type={"text"} placeholder="put in username" className={styles.inputLogin} />
        <input type={"password"} placeholder="put in password" className={styles.inputLogin} />
        <Button/>
      </form>
    </main>
    </>
  )
}
