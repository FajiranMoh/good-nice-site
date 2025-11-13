import Head from 'next/head';
import styles from '../styles/Home.module.css';

const projectName = 'Good nice site';

const features = [
  {
    title: 'Instant setup',
    description: 'Launch a modern landing page in minutes with ready-to-use building blocks.'
  },
  {
    title: 'Conversion focused',
    description: 'Persuasive copy, social proof, and CTAs that drive action out of the box.'
  },
  {
    title: 'Guided storytelling',
    description: 'Structured sections make it simple to communicate value with clarity.'
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>{projectName}</title>
        <meta
          name="description"
          content={'A modern landing page for ' + projectName + ' built with Selda AI'}
        />
      </Head>
      <div className={styles.page}>
        <header className={styles.hero} id="top">
          <span className={styles.badge}>Powered by Selda AI</span>
          <h1>Introduce {projectName} with confidence</h1>
          <p>
            Craft a conversion-ready story with responsive layouts, social proof, and compelling calls to action.
          </p>
          <div className={styles.heroCta}>
            <a className={[styles.button, styles.primary].join(' ')} href="#contact">Start building</a>
            <a className={[styles.button, styles.ghost].join(' ')} href="#features">See features</a>
          </div>
        </header>

        <main>
          <section className={styles.features} id="features">
            <h2>A complete launch kit</h2>
            <div className={styles.grid}>
              {features.map((feature) => (
                <article key={feature.title}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.cta} id="contact">
            <div>
              <h2>Ready to launch {projectName}?</h2>
              <p>Spin up a production-ready landing page in minutes with Selda AI.</p>
            </div>
            <form className={styles.ctaForm}>
              <label className={styles.srOnly} htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Work email" required />
              <button type="submit" className={[styles.button, styles.primary].join(' ')}>
                Book a demo
              </button>
            </form>
          </section>
        </main>

        <footer className={styles.footer}>
          <span>{projectName} © {new Date().getFullYear()}</span>
          <nav>
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
            <a href="#top">Back to top</a>
          </nav>
        </footer>
      </div>
    </>
  );
}
