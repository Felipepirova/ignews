import Head from 'next/head'

import style from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={style.contentContainer}>
        <section className={style.hero}>
          <span>👏 Hey,Welcome</span>
          <h1>News about that</h1>
          <p>
            Get acess to all the publications <span>for $9.90 month</span>
          </p>
        </section>
        <img src="/images/avatar.svg" alt="Girld Colding" />
      </main>
    </>
  )
}
